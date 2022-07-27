import React from 'react';
import styled from 'styled-components';
import * as XLSX from 'xlsx';
import { useDispatch } from 'react-redux';
import { createData } from '../redux/modules/tcData';
import { createName } from '../redux/modules/tcSheetName';
import { createBugData, resetBugData } from '../redux/modules/bugData';

import DataResult from '../components/DataResult';

export default function Main() {
  const dispatch = useDispatch();
  const reg = /[^\w\s]/g;

  const handleUpload = (e) => {
    dispatch(createName(''));
    dataRefine([]);
    dispatch(resetBugData());
    e.preventDefault();
    var files = e.target.files,
      f = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      var data = e.target.result;
      let readedData = XLSX.read(data, { type: 'binary' });

      readedData.SheetNames.forEach((value, index) => {
        const SheetName = readedData.SheetNames[index];
        const ws = readedData.Sheets[SheetName];
        const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
        const filterData = dataParse.filter((v) => v.length > 0);
        dispatch(createName(SheetName));
        dataRefine(filterData);
        const issueData = filterData?.filter((v) => v.length - 1 > 7);
        const bugData = issueData?.filter((v) => v[8].includes('#'));
        const number = bugData?.map((v) => v[8].replace(reg, ''));

        number?.forEach((v) => {
          bugDataServer(v);
        });
      });
    };
    reader.readAsBinaryString(f);
  };

  const dataRefine = (data) => {
    data.map((v, i) => {
      if (!v[5]) {
        while (!data[i][5]) {
          i--;
        }
        v[5] = data[i][5];
      }

      if (!v[1]) {
        while (!data[i][1]) {
          i--;
        }
        v[1] = data[i][1];
      }

      if (!v[2]) {
        while (!data[i][2]) {
          i--;
        }
        v[2] = data[i][2];
      }

      if (!v[3]) {
        while (!data[i][3]) {
          i--;
        }
        v[3] = data[i][3];
      }
    });
    dispatch(createData({ data }));
  };

  const bugDataServer = (number) => {
    fetch(`/getData?name=${number}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(createBugData(data, true));
      });
  };

  return (
    <MainWrap>
      <PageTitle>TestCase 결과 분석기</PageTitle>
      <input type="file" onChange={handleUpload} />
      <DataResult />
    </MainWrap>
  );
}

const MainWrap = styled.header`
  padding: 50px;
`;

const PageTitle = styled.h1`
  font-size: 50px;
  margin-bottom: 50px;
`;
