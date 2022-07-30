import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { createResult } from '../redux/modules/selectResult';
import { createSelect } from '../redux/modules/selectSheet';

import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';

export default function ChartData() {
  const dispatch = useDispatch();

  Chart.register(CategoryScale);
  const sheetName = useSelector((state) => state.tcSheetName.name).filter(
    (v) => v.length != 0,
  );

  const result = ['Pass', 'Fail', 'Not Available', 'Block', 'Not Test'];
  const color = ['#86CAF8', '#F0A19D', '#E093F0', '#F5CAA8', '#D9D9D9'];
  const sheetResult = useSelector((state) => state.sheetResultData.data);

  const [selectSheetNumber, setSelectSheetNumber] = useState(0);
  const dataSets = [
    {
      type: 'bar',
      label: sheetName[selectSheetNumber],
      backgroundColor: color,
      data: sheetResult[selectSheetNumber],
      borderColor: color,
      borderWidth: 1,
    },
  ];

  const data = {
    labels: result,
    datasets: dataSets,
  };

  const options = {
    onClick: (e, activeEls) => {
      let dataIndex = activeEls[0].index;

      let label = e.chart.data.labels[dataIndex];
      dispatch(createResult(label));
    },
  };

  return (
    <>
      <Container>
        <SheetButtonWrap>
          {sheetName.map((v, i) => (
            <SheetButton
              key={v}
              onClick={() => {
                setSelectSheetNumber(i);
                dispatch(createSelect(i));
              }}
            >
              {v}
            </SheetButton>
          ))}
        </SheetButtonWrap>
        <Line type="line" data={data} options={options} />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 50vw;
  max-width: 700px;
`;

const SheetButton = styled.div`
  padding: 1px 5px;
  background-color: #eee;
  border-radius: 5px;
  cursor: pointer;
`;

const SheetButtonWrap = styled.div`
  display: flex;
`;
