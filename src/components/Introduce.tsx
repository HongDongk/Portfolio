import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Introduce() {
  return (
    <Content>
      <Title>Introduce</Title>
      <Info>
        🍀 안녕하세요! 도전하는 개발자 홍동근입니다 🍀
        <br /> 학교 창업팀에서 프런트엔드 개발을 담당하여 초기 프로젝트 설계부터
        런칭까지 시켜본 경험과 알고리즘 동아리, 인턴 등 다양한 개발활동을
        했습니다. <br />
        개발자로써 문제를 해결하는 것과 새로운 기술에 도전하는 것을 좋아하며,
        언젠가 프런트엔드에서 정점을 찍고 싶다고 생각하며 매일 조금씩
        노력하고있습니다.
      </Info>
    </Content>
  );
}

const Content = styled.div`
  width: 100vw;
  height: 300px;
  padding-top: 60px;
  // background-color: #e0e0e0;
`;

const Title = styled.p`
  width: 100%;
  text-align: center;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 45px;
`;

const Info = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
`;
