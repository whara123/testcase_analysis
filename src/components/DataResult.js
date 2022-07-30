import React, { useState } from 'react';
import styled from 'styled-components';
import ChartData from './ChartData';
import { useSelector } from 'react-redux';
import FadeLoader from 'react-spinners/FadeLoader';

export default function DataResult() {
  const resultData = useSelector((state) => state.tcData.data);
  const selectResult = useSelector((state) => state.selectResult);
  const bugData = useSelector((state) => state.bugData.issueData);
  let isLoading = useSelector((state) => state.bugData.isLoading);

  const issueData = resultData?.filter((v) => v[7] != 'Pass');

  const importanceArr = ['All', 'Critical', 'Major', 'Normal', 'Minor'];
  const [selectImportance, setSelectImportance] = useState('All');

  return (
    <div>
      {resultData && (
        <DataWrap>
          <ResultWrap>
            <ChartData />
            <IssueList>
              <ImportanceWrap>
                <p>이슈 정보</p>
                {importanceArr.map((v) => (
                  <ImportanceButton
                    key={v}
                    onClick={() => {
                      setSelectImportance(v);
                    }}
                  >
                    {v}
                  </ImportanceButton>
                ))}
              </ImportanceWrap>

              {isLoading ? (
                bugData?.map(({ issueNum, issueTitle, issueImportance }) =>
                  issueImportance == selectImportance ? (
                    <IssueListWrap key={issueNum}>
                      <IssueItem importance={issueImportance}>
                        {issueNum}
                      </IssueItem>
                      <div>{issueTitle}</div>
                    </IssueListWrap>
                  ) : selectImportance == 'All' ? (
                    <IssueListWrap key={issueNum}>
                      <IssueItem importance={issueImportance}>
                        {issueNum}
                      </IssueItem>
                      <div>{issueTitle}</div>
                    </IssueListWrap>
                  ) : (
                    <></>
                  ),
                )
              ) : (
                <Loading>
                  <FadeLoader color="#000" size={100} />
                </Loading>
              )}
            </IssueList>
          </ResultWrap>
          <div>
            <p>이슈 내용</p>
            <ul>
              {issueData.map(
                (v, i) =>
                  i > 0 &&
                  selectResult == v[7] && (
                    <TableList key={v}>
                      <IssueComment>
                        <IssueResult result={`${v[7]}`}>{v[7]}</IssueResult>
                        <div>{v[8] && v[8]}</div>
                      </IssueComment>
                      <Table>
                        <thead>
                          <TableRow>
                            <th width="120px">메인카테고리</th>
                            <th width="120px">서브카테고리</th>
                            <th width="120px">디테일카테고리</th>
                            <th width="300px">검증스텝</th>
                            <th width="300px">기대결과</th>
                          </TableRow>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{v[1]}</td>
                            <td>{v[2]}</td>
                            <td>{v[3]}</td>
                            <td>{v[5]}</td>
                            <td>{v[6]}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </TableList>
                  ),
              )}
            </ul>
          </div>
        </DataWrap>
      )}
    </div>
  );
}

const Loading = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const DataWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

const ResultWrap = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  margin-top: 50px;
`;

const IssueList = styled.div`
  min-width: 300px;
`;

const IssueItem = styled.li`
  display: inline-block;
  border-radius: 5px;
  background-color: ${(props) =>
    props.importance == 'Critical'
      ? 'red'
      : props.importance == 'Major'
      ? '#f0a19d'
      : props.importance == 'Normal'
      ? '#FAD9A3'
      : props.importance == 'Minor'
      ? '#999'
      : '#fff'};
  color: #fff;
  font-weight: bold;
  padding: 1px 3px;
  margin-right: 4px;
  margin-bottom: 4px;
`;

const IssueResult = styled.div`
  display: inline-block;
  padding: 0 10px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  background-color: ${(props) =>
    props.result == 'Fail'
      ? '#F0A19D'
      : props.result == 'Not Available'
      ? '#E093F0'
      : props.result == 'Block'
      ? '#F5CAA8'
      : props.result == 'Not Test'
      ? '#D9D9D9'
      : '#eee'};
`;

const IssueComment = styled.div`
  display: flex;
  gap: 10px;
`;

const TableList = styled.li`
  margin-bottom: 10px;
`;

const Table = styled.table`
  min-width: 60vw;
  td {
    border: 1px solid #000;
    word-break: keep-all;
  }
`;

const TableRow = styled.tr`
  text-align: center;
  th {
    background-color: #eee;
    border: 1px solid #000;
  }
`;

const IssueListWrap = styled.div`
  display: flex;
  align-items: center;
`;

const ImportanceWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const ImportanceButton = styled.div`
  padding: 1px 5px;
  background-color: #eee;
  border-radius: 5px;
  cursor: pointer;
`;
