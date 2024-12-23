import styled, { keyframes } from 'styled-components';
import top from '../assets/top.jpg';
import NavigationBar from './NavigationBar';
import React, { useState, useEffect } from 'react';
import media from '../styles/media';

interface BackgroundProps {
  opacity: number;
}

export default function Top() {
  const [opacity, setOpacity] = useState(1);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = window.innerHeight;
    const newOpacity = Math.max(1 - scrollPosition / maxScroll, 0); // (0 : 완전히 투명)
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [opacity]);

  const scrollToPosition = () => {
    window.scrollTo({
      top: 470,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <NavigationBar />
      <Content opacity={opacity}>
        <Middle>
          <p>FrontEnd Developer Portfolio</p>
          <SubTitle>홍동근</SubTitle>
        </Middle>
        <Bottom>
          <BottomButton onClick={scrollToPosition}>
            자세히 알아보기 ↓
          </BottomButton>
        </Bottom>
      </Content>
    </>
  );
}

const Content = styled.div<BackgroundProps>`
  width: 100vw;
  height: 550px;
  background-image: url(${top});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 75%;
  transition: opacity 0.5s ease;
  opacity: ${({ opacity }) => opacity};
`;

const Middle = styled.div`
  font-family: 'Karla', sans-serif;
  font-weight: 800;
  width: 100vw;
  height: 200px;
  padding-top: 190px;
  text-align: center;
  color: white;
  font-size: 45px;
  ${media.medium`
    font-size: 35px;
  `};
`;

const SubTitle = styled.p`
  margin-top: 20px;
  font-size: 33px;
  letter-spacing: 5px;
`;

const Bottom = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const moveArrow = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(7px);
  }
  100% {
    transform: translateY(0);
  }
`;

const BottomButton = styled.div`
  width: 140px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: none;
  border-radius: 50px;
  background-color: #f4623a;
  font-weight: 600;
  font-size: 13px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    animation: ${moveArrow} 1s infinite;
  }
`;

// const BottomButton = styled.div`
//   display: inline-block;
//   width: 30px;
//   height: 30px;
//   border: 5px solid red;
//   border-left: 5px solid red;
//   border-bottom: 5px solid red;
//   animation: ${moveArrow} 1s infinite;
//   margin: 50px auto;
//   img {
//     width: 100%;
//     height: 100%;
//     background-color: white;
//     font-weight: bold;
//     font-size: 18px;
//   }
// `;
