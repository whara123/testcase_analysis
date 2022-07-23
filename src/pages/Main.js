import React from 'react';
import styled from 'styled-components';
import * as XLSX from 'xlsx';
import { useDispatch } from 'react-redux';
import { createData } from '../redux/modules/tcData';
import { createName } from '../redux/modules/tcSheetName';

import DataResult from '../components/DataResult';

export default function Main() {
  const dispatch = useDispatch();

  const handleUpload = (e) => {
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
  return (
    <MainWrap>
      <PageTitle>TestCase 결과 분석기</PageTitle>
      <InputElsx type="file" onChange={handleUpload} />
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

const InputElsx = styled.input`
  position: relative;
  top: 50%;
  left: 50%;
`;
