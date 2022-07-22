import React from 'react';
import { useSelector } from 'react-redux';

export default function DataResult() {
  const resultData = useSelector((state) => state.tcData.data);
  console.log(resultData);
  const result = ['Pass', 'Fail', 'Not Available', 'Block', 'Not Test'];
  const issueData = resultData?.filter((v) => v.length - 1 > 7);

  const bugData = issueData?.filter((v) => v[8].includes('#'));
  const etcData = issueData?.filter((v) => !v[8].includes('#'));

  return (
    <div>
      {resultData && (
        <>
          <p>테스트 결과</p>
          <ul>
            {result.map((resultValue) => (
              <li key={resultValue}>
                {resultValue} :
                {resultData.filter((v) => v.includes(resultValue)).length}
              </li>
            ))}
          </ul>
          <p>버그 사항</p>
          <ul>
            {bugData.map((v) => (
              <li key={v}>{v[8]}</li>
            ))}
          </ul>
          <p>그 외 이슈</p>
          <ul>
            {etcData.map(
              (v, i) =>
                i > 0 && (
                  <li key={v}>
                    <p>비고내용 : {v[8]}</p>
                    <p>
                      메인카테고리 : {v[1]} 서브카테고리 : {v[2]} 디테일카테고리
                      :{v[3]} 검증스탭 : {v[5]} 예상결과 : {v[6]}
                    </p>
                  </li>
                ),
            )}
          </ul>
        </>
      )}
    </div>
  );
}
