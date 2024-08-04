import styled from 'styled-components';
import CareerBox from './CarrerBox';

export default function Career() {
  return (
    <Content>
      <Title>Career</Title>
      <CareerBox company={'온품'} />
      <CareerBox company={'윈스'} />
      <CareerBox company={'한국외국어대학교'} />
    </Content>
  );
}

const Content = styled.div`
  width: 100vw;
  padding-top: 60px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
`;

const Title = styled.p`
  width: 100%;
  text-align: center;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 60px;
`;
