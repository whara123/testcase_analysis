import React from 'react';
import styled from 'styled-components';

export default function Issue() {
  const issuedata = [
    {
      issueNum: '#123432',
      issueTitle: '조사 본부 버튼 테두리가 제대로 점멸하지 않는 문제',
      issueContent: `
      [현재문제]
      상단 UI의 조사 본부 이동목록의 버튼 테두리가 제대로 점멸하지 않는 문제입니다. 
      기획서 상 버튼 테두리가 느리게 점멸되어야 하지만 현재 버전에서 점멸이 작동하고 있지 않습니다. 약 1분 대기하였으며 기획서 상의 점멸 간격은 10초입니다.
      `,
      issueStep: `
      [재현스텝]
      로비 이동 > 상단 UI > 조사 본부 > 이동목록 확인 > 버튼 테두리 점멸 확인 > 문제 발생
      `,
      issueResult: `
      [기대결과]
      버튼의 점멸 효과가 10초 간격으로 발생되어야 합니다.
      `,
      issueVersion: `
      [발생버전]
      1.1.0`,
      issueImportance: `Minor`,
    },
    {
      issueNum: '#123433',
      issueTitle: '집무실 버튼이 확장되지 않는 문제',
      issueContent: `
      [현재문제]
      상단 UI의 집무실에서 버튼이 확장되지 않는 문제입니다. 
      집무실 메뉴를 선택한 경우 집무실 버튼이 확장되어야 하지만 아무 반응을 하지 않고 있습니다.
      `,
      issueStep: `
      [재현스텝]
      로비 이동 > 상단 UI > 조사 본부 > 집무실 선택 > 문제 발생
      `,
      issueResult: `
      [기대결과]
      집무실 버튼이 확장되어야 합니다.
      `,
      issueVersion: `
      [발생버전]
      1.1.0`,
      issueImportance: `Normal`,
    },
    {
      issueNum: '#123434',
      issueTitle: '집무실 버튼 좌측에 퀘스트가 노출되지 않는 문제',
      issueContent: `
      [현재문제]
      상단 UI의 집무실에서 퀘스트가 노출되지 않는 문제입니다. 
      집무실 메뉴를 선택한 경우 집무실 버튼의 좌측에 퀘스트가 노출되어야 하지만 아무것도 노출되고 있지 않습니다.
      `,
      issueStep: `
      [재현스텝]
      로비 이동 > 상단 UI > 조사 본부 > 집무실 선택 > 좌측확인 > 문제 발생
      `,
      issueResult: `
      [기대결과]
      집무실 버튼 좌측에 퀘스트가 생성되어야 합니다.
      `,
      issueVersion: `
      [발생버전]
      1.1.0`,
      issueImportance: `Major`,
    },
    {
      issueNum: '#123435',
      issueTitle: '집무실 버튼에 C버튼이 노출되지 않는 문제',
      issueContent: `
      [현재문제]
      상단 UI의 집무실에서 c버튼이 노출되지 않는 문제입니다. 
      집무실 메뉴를 선택한 경우 집무실 버튼에 c버튼이 노출되어야 하지만 아무것도 노출되고 있지 않습니다.
      `,
      issueStep: `
      [재현스텝]
      로비 이동 > 상단 UI > 조사 본부 > 집무실 선택 > 문제 발생
      `,
      issueResult: `
      [기대결과]
      집무실 버튼에 c버튼이 노출되어야 합니다.
      `,
      issueVersion: `
      [발생버전]
      1.1.0`,
      issueImportance: `Normal`,
    },
    {
      issueNum: '#232492',
      issueTitle: '타이틀로 돌아가기가 노출되지 않는 문제',
      issueContent: `
      [현재문제]
      하단 UI의 메뉴에서 타이틀로 돌아가기가 노출되지 않는 문제입니다. 
      해당 문제로 하단 UI 메뉴에 진입 시 타이틀로 이동이 불가능합니다.
      `,
      issueStep: `
      [재현스텝]
      로비 이동 >하단 UI > 메뉴 > 타이틀로 돌아가기가 노출되지 않는 문제 확인
      `,
      issueResult: `
      [기대결과]
      돌아가기 버튼이 노출되어야 합니다.
      `,
      issueVersion: `
      [발생버전]
      1.1.0`,
      issueImportance: `Major`,
    },
    {
      issueNum: '#232493',
      issueTitle: '옵션에서 화살표가 보이지 않는 문제',
      issueContent: `
      [현재문제]
      하단 UI의 메뉴 옵션에서 화살표가 표시되지 않는 문제입니다. 
      기획서 상 옵션에 화살표가 노출되어 유저에게 튜토리얼을 유도한다고 명시되어 있으나 현재 버전에서 화살표가 노출되지 않습니다.
      `,
      issueStep: `
      [재현스텝]
      로비 이동 > 하단 UI > 옵션 > 화살표 확인 > 문제 발생
      `,
      issueResult: `
      [기대결과]
      옵션 버튼에 화살표가 노출되어야 합니다.
      `,
      issueVersion: `
      [발생버전]
      1.1.0`,
      issueImportance: `Normal`,
    },
    {
      issueNum: '#232494',
      issueTitle: '옵션에서 C버튼이 보이지 않는 문제',
      issueContent: `
      [현재문제]
      옵션UI에서 조건 완료 후 노출되어야 하는 C버튼이 보이지 않는 문제입니다.
      `,
      issueStep: `
      [재현스텝]
      로비 이동 > 하단 UI > 옵션 > C버튼 확인 > 문제 발생
      `,
      issueResult: `
      [기대결과]
      조건 달성 시 옵션에서 C버튼이 노출되어야 합니다.
      `,
      issueVersion: `
      [발생버전]
      1.1.0`,
      issueImportance: `Normal`,
    },
    {
      issueNum: '#232495',
      issueTitle: '메뉴에서 옵션버튼이 비활성화 되는 문제',
      issueContent: `
      [현재문제]
      옵션 UI가 활성화되지 않는 문제입니다.
      현재 버젼에서 옵션버튼이 비활성화 상태가 되어 눌리지 않고 있습니다.
      `,
      issueStep: `
      [재현스텝]
      로비 이동 > 하단 UI > 옵션 > 활성화 확인 > 문제 발생
      `,
      issueResult: `
      [기대결과]
      옵션버튼이 활성화되어야 합니다.
      `,
      issueVersion: `
      [발생버전]
      1.1.0`,
      issueImportance: `Major`,
    },
    {
      issueNum: '#232496',
      issueTitle: '기록보기 화살표가 보이지 않는 문제',
      issueContent: `
      [현재문제]
      기록보기 화살표가 노출되지 않고 있습니다.
      조건 달성 시 기록보기에 화살표가 노출되어 유저에게 클릭을 유도한다고 명시되어 있으나 현재 화살표가 보이지 않습니다.
      `,
      issueStep: `
      [재현스텝]
      로비 이동 > 하단 UI > 옵션 > 화살표 확인 > 문제 발생
      `,
      issueResult: `
      [기대결과]
      기록보기 버튼에 화살표가 노출되어야 합니다.
      `,
      issueVersion: `
      [발생버전]
      1.1.0`,
      issueImportance: `Normal`,
    },
    {
      issueNum: '#232497',
      issueTitle: '기록보기에서 C버튼이 보이지 않는 문제',
      issueContent: `
      [현재문제]
      기록보기에서 조건 완료 후 노출되어야 하는 C버튼이 보이지 않는 문제입니다.
      `,
      issueStep: `
      [재현스텝]
      로비 이동 > 하단 UI > 조건달성 > 옵션 > C버튼 확인 > 문제 발생
      `,
      issueResult: `
      [기대결과]
      기록보기에서 C버튼이 노출되어야 합니다.
      `,
      issueVersion: `
      [발생버전]
      1.1.0`,
      issueImportance: `Normal`,
    },
    {
      issueNum: '#232498',
      issueTitle: '1-3 페이지 진입 시 게임이 진행되지 않는 문제',
      issueContent: `
      [현재문제]
      모험 1-3 단계에서 게임이 멈추는 문제입니다.
      모든 기기에서 발생되었으며 1-3단계 이후 프리징이 생겨 다른 동작을 하지 않습니다.
      `,
      issueStep: `
      [재현스텝]
      모험 > 1-2까지 클리어 > 1-3 진입 > 게임 프리징 확인
      `,
      issueResult: `
      [기대결과]
      1-3 진입 시 프리징 되지 않고 게임이 진행되어야 합니다.
      `,
      issueVersion: `
      [발생버전]
      1.1.0`,
      issueImportance: `Critical`,
    },
  ];
  return (
    <IssueWrap>
      {issuedata.map(
        ({
          issueNum,
          issueTitle,
          issueContent,
          issueStep,
          issueResult,
          issueVersion,
          issueImportance,
        }) => (
          <ul key={issueNum}>
            <Iist>
              <IistTitle>
                <p className="issueNumber">{issueNum}</p>
                <p className="issueTitle">{issueTitle}</p>
              </IistTitle>

              <div>
                <div>
                  <p>{issueContent}</p>
                  <br />
                  <br />
                  <p>{issueStep}</p>
                  <br />
                  <br />
                  <p>{issueResult}</p>
                  <br />
                  <br />
                  <p>{issueVersion}</p>
                  <br />
                  <br />
                  <p>{issueImportance}</p>
                </div>
              </div>
            </Iist>
          </ul>
        ),
      )}
    </IssueWrap>
  );
}

const IssueWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Iist = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const IistTitle = styled.div`
  display: flex;
`;
