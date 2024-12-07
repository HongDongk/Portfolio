import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface SkillBoxProps {
  title: string;
}
interface SkillData {
  title: string;
  iconsrc: string[];
}

const skillData = [
  {
    title: '⭐Frontend',
    iconsrc: [
      '../../images/HTML.svg',
      '../../images/CSS.svg',
      '../../images/JavaScript.svg',
      '../../images/TypeScript.svg',
      '../../images/React-Light.svg',
      '../../images/Angular-Light.svg',
      '../../images/nextjs.png',
      '../../images/redux.png',
      '../../images/recoil.png',
      '../../images/react-query.svg',
    ],
  },
  {
    title: 'Backend',
    iconsrc: [
      '../../images/NodeJS-Light.svg',
      '../../images/MySQL-Light.svg',
      '../../images/PostgreSQL-Light.svg',
    ],
  },
  {
    title: 'Deployment',
    iconsrc: [
      '../../images/docker.png',
      '../../images/amazon.png',
      '../../images/vercel.png',
      '../../images/netlify.png',
    ],
  },
  {
    title: 'Version Control',
    iconsrc: [
      '../../images/git.png',
      '../../images/gitlab.png',
      '../../images/github2.png',
    ],
  },
];

const longImgPaths = [
  '../../images/nextjs.png',
  '../../images/redux.png',
  '../../images/recoil.png',
  '../../images/react-query.svg',
  '../../images/amazon.png',
  '../../images/docker.png',
  '../../images/git.png',
  '../../images/gitlab.png',
  '../../images/github2.png',
  '../../images/vercel.png',
  '../../images/netlify.png',
];

export default function SkillBox({ title }: SkillBoxProps) {
  const [data, setData] = useState<SkillData | null>(null);

  useEffect(() => {
    switch (title) {
      case '⭐Frontend':
        setData(skillData[0]);
        break;
      case 'Backend':
        setData(skillData[1]);
        break;
      case 'Deployment':
        setData(skillData[2]);
        break;
      case 'Version Control':
        setData(skillData[3]);
        break;
      default:
        setData(null);
    }
  }, [title]);

  return (
    <Content>
      <Title>{title}</Title>
      <StackBox>
        {data?.iconsrc.map((a, index) => {
          if (longImgPaths.includes(a)) {
            return (
              <LongStack key={index}>
                <img src={a} alt={'skill'} />
              </LongStack>
            );
          } else
            return (
              <Stack key={index}>
                <img src={a} alt={'skill'} />
              </Stack>
            );
        })}
      </StackBox>
    </Content>
  );
}

const Content = styled.div`
  margin-top: 15px;
  width: 17rem;
  box-shadow: 2px 2px 2px grey;
  border-radius: 1rem;
  background-color: white;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 100%;
  height: 25px;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  font-size: 1.5rem;
  color: #f4623a;
  padding-bottom: 1rem;
`;

const StackBox = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Stack = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-width: 2px;
  border-color: #eeeeee;
  border-style: solid;
  cursor: pointer;
  border-radius: 1rem;
  img {
    width: 80%;
    height: 80%;
  }
  &:hover {
    transform: scale(1.1);
  }
  transition: transform 0.1s ease-in-out;
`;

const LongStack = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17rem;
  height: 80px;
  border-width: 2px;
  border-color: #eeeeee;
  border-style: solid;
  cursor: pointer;
  border-radius: 1rem;
  img {
    width: 65%;
  }
  &:hover {
    transform: scale(1.04);
  }
  transition: transform 0.1s ease-in-out;
`;
