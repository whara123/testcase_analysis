import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';

export default function ChartData() {
  Chart.register(CategoryScale);
  const resultData = useSelector((state) => state.tcData.data);
  const sheetName = useSelector((state) => state.tcSheetName);

  const result = ['Pass', 'Fail', 'Not Available', 'Block', 'Not Test'];
  const color = ['#86CAF8', '#F0A19D', '#E093F0', '#F5CAA8', '#D9D9D9'];

  const resultCount = result.map(
    (value) => resultData?.filter((v) => v.includes(value)).length,
  );

  const data = {
    labels: result,
    datasets: [
      {
        type: 'bar',
        label: sheetName,
        backgroundColor: color,
        data: resultCount,
        borderColor: color,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    onClick: (e, activeEls) => {
      let dataIndex = activeEls[0].index;

      let label = e.chart.data.labels[dataIndex];
      console.log(label);
    },
  };

  return (
    <Container>
      <Line type="line" data={data} options={options} />
    </Container>
  );
}

const Container = styled.div`
  width: 50vw;
  max-width: 700px;
`;
