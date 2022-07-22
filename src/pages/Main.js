import React from 'react';
import styled from 'styled-components';
import * as XLSX from 'xlsx';
import { useDispatch } from 'react-redux';
import { createData } from '../redux/modules/tcData';

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
        dispatch(createData({ filterData }));
      });
    };
    reader.readAsBinaryString(f);
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
