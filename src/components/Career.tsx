import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Career() {
  return (
    <Content>
      <Title>Career</Title>
    </Content>
  );
}

const Content = styled.div`
  width: 100vw;
  padding-top: 60px;
  padding-bottom: 100px;
  background-color: #f5f5f5;
`;

const Title = styled.p`
  width: 100%;
  text-align: center;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 60px;
  color: black;
`;

const Info = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
`;
