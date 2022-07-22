import React from 'react';
import { useSelector } from 'react-redux';

export default function DataResult() {
  const resultData = useSelector((state) => state.tcData.filterData);

  return (
    <div>
      {resultData && (
        <ul>
          <li>pass : {resultData.filter((v) => v.includes('Pass')).length}</li>
          <li>fail : {resultData.filter((v) => v.includes('Fail')).length}</li>
          <li>
            N.A : {resultData.filter((v) => v.includes('Not Available')).length}
          </li>
          <li>
            Block : {resultData.filter((v) => v.includes('Block')).length}
          </li>
          <li>
            N.T : {resultData.filter((v) => v.includes('Not Test')).length}
          </li>
        </ul>
      )}
    </div>
  );
}
