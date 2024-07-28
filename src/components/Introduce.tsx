import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import person from '../assets/person-fill.svg';
import envelope from '../assets/envelope-fill.svg';
import calendar from '../assets/calendar-fill.svg';
import telephone from '../assets/telephone-fill.svg';
import github from '../assets/github.webp';
import velog from '../assets/velog.png';

export default function Introduce() {
  return (
    <Content>
      <Title>Introduce</Title>
      <Info>
        <Big>🍀안녕하세요, 도전하는 개발자 홍동근입니다🍀</Big>
        <br />
        <Small>
          개발자로써 문제를 해결하는 것과 새로운 기술에 도전하는 것을 좋아하며,
          언젠가 프런트엔드에서 정점을 찍고 싶다고 생각하며 매일
          노력하고있습니다.
        </Small>
      </Info>
      <InfoBox>
        <InfoLine>
          <InfoImg src={person} alt="person" />
          <InfoText>
            <div>이름</div>
            <p>홍동근</p>
          </InfoText>
        </InfoLine>
        <InfoLine>
          <InfoImg src={calendar} alt="calendar" />
          <InfoText>
            <div>생년월일</div>
            <p>1997.12.01</p>
          </InfoText>
        </InfoLine>
        <InfoLine>
          <InfoImg src={telephone} alt="telephone" />
          <InfoText>
            <div>연락처</div>
            <p>010-9055-7519</p>
          </InfoText>
        </InfoLine>
        <InfoLine>
          <InfoImg src={envelope} alt="envelope" />
          <InfoText>
            <div>메일</div>
            <p>hongdongk@naver.com</p>
          </InfoText>
        </InfoLine>
      </InfoBox>
      <InfoBox2>
        <Box>
          <LinkBox
            href="https://github.com/HongDongk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link>
              <Img src={github} alt="Github" />
              <p>소스코드 저장소</p>
            </Link>
            <h1>https://github.com/HongDongk</h1>
            <ul>
              <li>과거 팀, 개인 프로젝트 소스코드</li>
              <li>혼자서 코딩 연습을 위해 작성한 소스코드</li>
              <li>학부시절 수강한 수업들의 과제 소스코드</li>
            </ul>
          </LinkBox>
          <LinkBox
            href="https://velog.io/@hongdongk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link>
              <Img src={velog} alt="Velog" />
              <p>개발 블로그</p>
            </Link>
            <h1>https://velog.io/@hongdongk/posts</h1>
            <ul>
              <li>지금까지 공부한 것을 온전히 내것으로 만들기위한 기록</li>
              <li>CS지식과 JavaScript 학습내용 정리</li>
              <li>
                다양한 개발자들과의 정보공유를 통해 성장하기 위한 소통의 장소
              </li>
            </ul>
          </LinkBox>
        </Box>
      </InfoBox2>
    </Content>
  );
}

const Content = styled.div`
  width: 100vw;
  padding-top: 60px;
`;

const Title = styled.p`
  width: 100%;
  text-align: center;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 60px;
`;

const Info = styled.div`
  margin-top: 50px;
  width: 100%;
  text-align: center;
`;

const Big = styled.p`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const Small = styled.p`
  width: 100%;
  text-align: center;
  font-size: 15px;
`;

const InfoBox = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InfoLine = styled.div`
  display: flex;
  justify-content: center;
  width: 320px;
  min-width: 280px;
  height: 80px;
`;

const InfoImg = styled.img`
  width: 35px;
  height: 80px;
`;

const InfoText = styled.div`
  margin-left: 25px;
  height: 80px;
  div {
    margin-top: 15px;
    color: black;
    font-weight: bold;
    font-size: 18px;
  }
  p {
    margin-top: 15px;
    color: grey;
    font-weight: bold;
    font-size: 15px;
  }
`;

const InfoBox2 = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 510px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212529;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 850px;
  min-width: 850px;
  height: 500px;
`;

const LinkBox = styled.a`
  width: 330px;
  height: 280px;
  padding: 30px;
  border-radius: 20px;
  background-color: #f5f5f5;
  color: black;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.04);
  }
  h1 {
    font-weight: bold;
    margin-top: 20px;
    font-size: 14px;
    color: #1e90ff;
  }
  ul {
    li {
      margin-top: 15px;
      list-style-type: disc;
      line-height: 1.5;
    }
    margin-left: 15px;
    margin-top: 50px;
    font-size: 14px;
  }
`;

const Link = styled.div`
  display: flex;
  align-items: center;
  width: 330px;
  p {
    margin-left: 20px;
    font-size: 22px;
    font-weight: bold;
    text-decoration: none;
  }
`;

const Img = styled.img`
  width: 50px;
`;
