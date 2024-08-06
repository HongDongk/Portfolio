import styled from 'styled-components';
import top from '../assets/top.jpg';
import NavigationBar from './NavigationBar';

export default function Top() {
  const scrollToPosition = () => {
    window.scrollTo({
      top: 420,
      behavior: 'smooth',
    });
  };

  return (
    <Content>
      <NavigationBar />
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
  );
}

const Content = styled.div`
  width: 100vw;
  height: 500px;
  background-image: url(${top});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 75%;
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
    background-color: #b22222;
  }
`;
