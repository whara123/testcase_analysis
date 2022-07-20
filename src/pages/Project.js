import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

export default function Project() {
  const testArr = [{ title: '1.0.0' }, { title: '1.0.1' }, { title: '1.0.2' }];

  const [openUI, setOpenUI] = useState(false);
  const handleUI = () => {
    setOpenUI(!openUI);
  };

  return (
    <MainWrap>
      <PageTitle>프로젝트 명</PageTitle>
      <ProjectList>
        {testArr.map(({ title }) => (
          <ProjectItem key={title}>
            <ProjectButton></ProjectButton>
            <ProjectTitle>Ver. {title}</ProjectTitle>
          </ProjectItem>
        ))}
      </ProjectList>

      <ButtonPos>
        <AddButton onClick={handleUI}>
          {openUI && <input type="file" />}
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
