import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import TechStackBox from './TechStackBox';
import ProjectSlider from './ProjectSlider';
import media from '../../styles/media';

interface ProjectBoxProps {
  title: string;
}
interface ProjectData {
  title: string;
  info: string;
  imgsrc: string[];
  intro: string;
  mainfunc: string;
  url: string;
  stack: string[];
}

const projectData = [
  {
    title: '미팅학개론',
    info: '2022.12 ~ 2023.03 (개발자 3人 팀 프로젝트)',
    imgsrc: [
      '../../images/meeting1.png',
      '../../images/meeting2.png',
      '../../images/meeting3.png',
      '../../images/meeting4.png',
      '../../images/meeting5.png',
    ],
    intro:
      '미팅학개론 서비스는 <b>대학생을 위한 대학생 미팅 매칭</b> 서비스입니다. 미팅학개론은 교내 창업팀에서 코로나로 얼었던 학교생활과 대학생 연애 시장을 목표로 시작한 프로젝트입니다. /n 기획자 3명과 개발자 3명으로 이루어진 팀으로 4개월 동안 여정을 함께했습니다. 이곳에서 <b>FE개발을 전담하여 소셜 로그인과 결제 시스템기능, 유저 정보, 성비 그래프, 후기 등 다양한 시각화 컴포넌트 제작</b>하며 React를 더 깊게 이해할 수 있던 계기가 되었습니다. /n 서비스 출시 후 지금까지  <b>1,5000명 이상의 대학생</b>이 사용하였고, 서비스를 통해 발생한 수익을 기부하며 뜻 깊은 경험을 할 수 있었습니다.',
    mainfunc: '대학생 미팅 매칭 서비스',
    url: 'https://github.com/HongDongk/MeetingGo',
    stack: ['React', 'Redux-toolkit', 'Docker', 'AWS'],
  },
  {
    title: '코인뷰어',
    info: '2022.09 ~ 2022.10 (1人 개인 프로젝트)',
    imgsrc: [
      '../../images/coin3.png',
      '../../images/coin1.png',
      '../../images/coin2.png',
    ],
    intro:
      '코인뷰어 서비스는 Open API를 이용해 다양한 가상 화폐정보를 받아와 사용자에게 <b>급변하는 가격정보를 시각적으로 보여주는 서비스</b>입니다. /n 가격 변동이 심한 가상 화폐의 특성을 고려하여, <b>React query</b>로 데이터 패칭과 캐싱을 효율적으로 처리했습니다. 또한 전역 상태 관리로 <b>Recoil</b>을 사용해 다크모드를 구현하였고, <b>Apex Chart</b>를 활용해 데이터를 시각적인 그래프로 제공했습니다.',
    mainfunc: '실시간 가상화폐 추이 비교 서비스',
    url: 'https://coinviewer2022.netlify.app',
    stack: ['React', 'Recoil', 'React query', 'TypeScript', 'Netlify'],
  },
  {
    title: '포트폴리오 사이트',
    info: '2024.07 ~ 2024.08 (1人 개인 프로젝트)',
    imgsrc: [
      '../../images/portfolio1.png',
      '../../images/portfolio2.png',
      '../../images/portfolio3.png',
    ],
    intro:
      '<b>포트폴리오 용도로 제작</b>한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.  /n  <b>TypeScript</b> 문법을 준수하며 프로젝트를 진행하면서, <b>타입 안전성의 중요성</b>을 깨달았습니다. 타입을 명시함으로써 컴파일 단계에서 많은 오류를 미리 잡을 수 있었고, 코드 가독성과 유지보수성면에서도 큰 장점을 느낄 수 있었습니다. 비록 초기에 러닝커브는 존재하지만, 장기적인 효율성을 고려할 때 TypeScript는 매우 유용한 도구임을 깨달았습니다.',
    mainfunc: '포트폴리오',
    url: 'https://github.com/HongDongk/Portfolio',
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
        <Slider>
          <ProjectSlider imgarr={data.imgsrc} />
        </Slider>
        <Intro>
          <IntroTop>
            {data.intro.split('/n').map((a, index) => {
              return (
                <IntroDetatil key={index}>
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
                  {data.stack.map((a, index) => {
                    return <TechStackBox key={index} stack={a} />;
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
  min-width: 970px;
  height: 550px;
  padding: 40px;
  border-radius: 20px;
  background-color: white;
  ${media.medium`
    // width: 200px;
    min-width: 280px;
    padding: 25px;
  `};
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
  min-width: 500px;
  display: flex;
  justify-content: center;
  ${media.medium`
    display: none;
  `};
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
  flex-wrap: wrap;
  font-weight: normal;
  margin-left: 40px;
  a {
    text-decoration: none;
    color: #1e90ff;
  }
`;
