import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import TechStackBox from './TechStackBox';

interface ProjectBoxProps {
  title: string;
}
interface ProjectData {
  title: string;
  info: string;
  intro: string;
  mainfunc: string;
  url: string;
  stack: string[];
}

const projectData = [
  {
    title: '미팅학개론',
    info: '2022.12 ~ 2023.03 (개발자 3人 팀 프로젝트)',
    intro:
      '미팅학개론 서비스는 <b>대학생을 위한 대학생 미팅 매칭</b> 서비스입니다. 미팅학개론은 교내 창업팀에서 코로나로 얼었던 학교생활과 대학생 연애 시장을 목표로 시작한 프로젝트입니다. /n 기획자 3명과 개발자 3명으로 이루어진 팀으로 4개월 동안 여정을 함께했습니다. 이곳에서 <b>FE개발을 전담하여 소셜 로그인과 결제 시스템기능, 유저 정보, 성비 그래프, 후기 등 다양한 시각화 컴포넌트 제작</b>하며 React를 더 깊게 이해할 수 있던 계기가 되었습니다. /n 서비스 출시 후 지금까지  <b>1,5000명 이상의 대학생</b>이 사용하였고, 서비스를 통해 발생한 수익을 기부하며 뜻 깊은 경험을 할 수 있었습니다.',
    mainfunc: '대학생 미팅 매칭 서비스',
    url: 'https://meetingo.me',
    stack: ['React', 'Redux-toolkit', 'Docker', 'AWS'],
  },
  {
    title: '코인뷰어',
    info: '2022.09 ~ 2022.10 (1人 개인 프로젝트)',
    intro:
      '아하 서비스는 궁금한 점을 질문하면 검증된 전문가로 부터 답변을 받을 수 있는 보상형 Q&A 서비스입니다. 아하 서비스의 모바일 디바이스 점유율이 전체 중 60 퍼센트로, 비중이 높아 모바일 디바이스에 대한 어플리케이션 니즈 해결을 위해 시작하게된 프로젝트입니다. ',
    mainfunc: '실시간 가상화폐 추이 비교 서비스',
    url: 'https://coinviewer2022.netlify.app',
    stack: ['React', 'Recoil', 'React query', 'TypeScript', 'Netlify'],
  },
  {
    title: '포트폴리오 사이트',
    info: '2024.07 ~ 2024.08 (1人 개인 프로젝트)',
    intro:
      '<b>포트폴리오 용도로 제작</b>한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.  ',
    mainfunc: '포트폴리오',
    url: 'https://coderduck-portfolio.com',
    stack: ['React', 'TypeScript', 'styled-components', 'Vercel'],
  },
];

export default function ProjectBox({ title }: ProjectBoxProps) {
  const [data, setData] = useState<ProjectData | null>(null);

  useEffect(() => {
    switch (title) {
      case '미팅학개론':
        setData(projectData[0]);
        break;
      case '코인뷰어':
        setData(projectData[1]);
        break;
      case '포트폴리오 사이트':
        setData(projectData[2]);
        break;
      default:
        setData(null);
    }
  }, [title]);

  if (!data) return null;

  return (
    <Content>
      <Title>{title}</Title>
      <Info>{data.info}</Info>
      <DetailBox>
        <Slider />
        <Intro>
          <IntroTop>
            {data.intro.split('/n').map((a) => {
              return (
                <IntroDetatil>
                  {a.split(/(<b>.*?<\/b>)/g).map((b, index) => {
                    if (b.startsWith('<b>') && b.endsWith('</b>')) {
                      return (
                        <IntroDetatilBold key={index}>
                          {b.slice(3, -4)}
                        </IntroDetatilBold>
                      );
                    }
                    return b;
                  })}
                </IntroDetatil>
              );
            })}
          </IntroTop>
          <IntroBottom>
            <ul>
              <li>
                <BottomTitle>주요 기능</BottomTitle>
                <BottomLi>{data.mainfunc}</BottomLi>
              </li>
              <li>
                <BottomTitle>URL</BottomTitle>
                <BottomLi>
                  <a href={data.url} target="_blank" rel="noopener noreferrer">
                    {data.url}
                  </a>
                </BottomLi>
              </li>
              <li>
                <BottomTitle>기술 스택</BottomTitle>
                <BottomLi>
                  {data.stack.map((a) => {
                    return <TechStackBox stack={a} />;
                  })}
                </BottomLi>
              </li>
            </ul>
          </IntroBottom>
        </Intro>
      </DetailBox>
    </Content>
  );
}

const Content = styled.div`
  margin-top: 80px;
  width: 55%;
  height: 550px;
  padding: 40px;
  border-radius: 20px;
  background-color: white;
`;

const Title = styled.p`
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

const Info = styled.p`
  margin-top: 13px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #6c757d;
  font-weight: bold;
`;

const DetailBox = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 440px;
  display: flex;
  justify-content: space-between;
  // border: 1px solid red;
`;

const Slider = styled.div`
  width: 100%;
  // border: 1px solid blue;
`;

const Intro = styled.div`
  width: 100%;
`;

const IntroTop = styled.div`
  width: 100%;
  height: 280px;
  padding-bottom: 10px;
  border-bottom: 0.01px solid #ccc;
`;

const IntroDetatil = styled.div`
  margin-top: 20px;
  width: 100%;
  font-size: 14px;
  line-height: 1.7;
`;

const IntroDetatilBold = styled.span`
  font-weight: bold;
`;

const IntroBottom = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: black;
  li {
    display: flex;
    width: 100%;
    height: 25px;
    line-height: 25px;
    min-width: 100%;
    margin-top: 20px;
  }
`;

const BottomTitle = styled.span`
  display: inline-block;
  width: 100px;
  min-width: 100px;
`;

const BottomLi = styled.span`
  display: flex;
  font-weight: normal;
  margin-left: 40px;
  a {
    text-decoration: none;
    color: #1e90ff;
  }
`;
