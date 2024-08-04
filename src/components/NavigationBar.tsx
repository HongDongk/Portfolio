import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  scrolled: string;
}

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState<string>('false');
  const listData = [
    { id: 1, text: 'Introduce', targetId: 'Introduce' },
    { id: 2, text: 'Projects', targetId: 'Projects' },
    { id: 3, text: 'Career', targetId: 'Career' },
    { id: 4, text: 'Skills', targetId: 'Skills' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled('true');
      } else {
        setScrolled('false');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToPosition = (targetId: string) => {
    if (targetId === '0') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Content scrolled={scrolled}>
      <Left scrolled={scrolled} onClick={() => scrollToPosition('0')}>
        CoderDuck's Portfolio
      </Left>
      <Right>
        {listData.map((list) => (
          <li key={list.id} onClick={() => scrollToPosition(list.targetId)}>
            {list.text}
          </li>
        ))}
      </Right>
    </Content>
  );
}

const Content = styled.div<HeaderProps>`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: ${(props) =>
    props.scrolled === 'true' ? '0 1px .3rem hsla(0, 0%, 80%, .8)' : ''};
  background-color: ${(props) => (props.scrolled === 'true' ? 'white' : '')};
`;

const Left = styled.div<HeaderProps>`
  min-width: 470px;
  color: ${(props) =>
    props.scrolled === 'true' ? 'black' : 'hsla(0, 0%, 100%, 0.7)'};
  text-decoration: none;
  font-weight: 700;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const Right = styled.ul`
  width: 25%;
  min-width: 450px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  color: #f5b041;
  li {
    &:hover {
      cursor: pointer;
      color: #ff8c00;
    }
  }
`;
