import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ProjectBox from './ProjectBox';

export default function Projects() {
  return (
    <Content>
      <Title>Projects</Title>
      <ProjectList>
        <ProjectBox title={'미팅학개론'} />
        <ProjectBox title={'코인뷰어'} />
        <ProjectBox title={'포트폴리오 사이트'} />
      </ProjectList>
    </Content>
  );
}

const Content = styled.div`
  width: 100vw;
  padding-top: 60px;
  padding-bottom: 100px;
  background-color: #4244ff;
`;

const Title = styled.p`
  width: 100%;
  text-align: center;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 60px;
  color: white;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
