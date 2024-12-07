import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SkillBox from './SkillBox';
import media from '../../styles/media';

export default function Skills() {
  return (
    <Content>
      <Title>Skills</Title>
      <SkillContatiner>
        <div>
          <SkillBox title={'⭐Frontend'} />
        </div>
        <SkillLine>
          <SkillBox title={'Backend'} />
          <SkillBox title={'Deployment'} />
        </SkillLine>
        <div>
          <SkillBox title={'Version Control'} />
        </div>
      </SkillContatiner>
    </Content>
  );
}

const Content = styled.div`
  width: 100vw;
  padding-top: 60px;
  padding-bottom: 100px;
  background-color: #f9c51d;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Title = styled.p`
  width: 100%;
  text-align: center;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 60px;
`;

const SkillContatiner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  width: 68%;
  min-width: 1200px;
  ${media.medium`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 0px;
  `};
`;

const SkillLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
