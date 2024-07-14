import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Experience() {
  return (
    <Content>
      <Title>Experience</Title>
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
