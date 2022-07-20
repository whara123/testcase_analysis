import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

export default function Main() {
  const testArr = [
    { title: '원티드페이지' },
    { title: '원티드프리랜서' },
    { title: '원티드AI' },
  ];

  return (
    <MainWrap>
      <PageTitle>TestCase 결과 분석기</PageTitle>
      <ProjectList>
        {testArr.map(({ title }) => (
          <ProjectItem key={title}>
            <ProjectButton></ProjectButton>
            <ProjectTitle>{title}</ProjectTitle>
          </ProjectItem>
        ))}
      </ProjectList>

      <ButtonPos>
        <AddButton>
          <AiOutlinePlus />
        </AddButton>
      </ButtonPos>
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

const AddButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #eee;
  font-size: 25px;
  line-height: 25px;
`;

const ButtonPos = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

const ProjectList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const ProjectItem = styled.li``;

const ProjectButton = styled.button`
  width: 250px;
  height: 250px;
  border-radius: 20px;
  background-color: #eee;
`;

const ProjectTitle = styled.p`
  font-size: 25px;
`;
