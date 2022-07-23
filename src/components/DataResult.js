import React from 'react';
import styled from 'styled-components';
import ChartData from './ChartData';
import { useSelector } from 'react-redux';

export default function DataResult() {
  const resultData = useSelector((state) => state.tcData.data);
  const selectResult = useSelector((state) => state.selectResult);
  console.log(selectResult);

  const issueData = resultData?.filter((v) => v.length - 1 > 7);
  const bugData = issueData?.filter((v) => v[8].includes('#'));
  const etcData = issueData?.filter((v) => !v[8].includes('#'));

  return (
    <div>
      {resultData && (
        <DataWrap>
          <div>
            <ChartData />
          </div>
          <div>
            <p>이슈번호</p>
            <IssueList>
              {bugData.map((v) => (
                <IssueItem key={v}>
                  <a href={`/issue/${v[8].match(/([0-9])\w+/g)}`}>{v[8]}</a>
                </IssueItem>
              ))}
            </IssueList>
          </div>
          <div>
            <p>그 외 이슈</p>
            <ul>
              {etcData.map(
                (v, i) =>
                  i > 0 &&
                  selectResult == v[7] && (
                    <li key={v}>
                      <p>비고내용 : {v[8]}</p>
                      <p>
                        메인카테고리 : {v[1]} 서브카테고리 : {v[2]}{' '}
                        디테일카테고리 :{v[3]} 검증스탭 : {v[5]} 예상결과 :{' '}
                        {v[6]}
                        {v[7]}
                      </p>
                    </li>
                  ),
              )}
            </ul>
          </div>
        </DataWrap>
      )}
    </div>
  );
}

const DataWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const IssueList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 50vw;
`;

const IssueItem = styled.li`
  border: 1px solid #000;
`;
