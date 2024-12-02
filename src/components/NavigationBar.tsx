import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import media from '../styles/media';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  scrolled: string;
}

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState<string>('false');
  const [isSmall, setIsSmall] = useState<boolean>(false);
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

    const handleResize = () => {
      setIsSmall(window.innerWidth <= 1024);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize();

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
        {isSmall ? (
          <StyledSelect
            IconComponent={(props) => (
              <MenuIcon {...props} sx={{ fontSize: '2.5rem' }} />
            )}
            label="Menu"
            MenuProps={{
              disableScrollLock: true, // 스크롤 락 비활성화 제거
            }}
          >
            {listData.map((list) => (
              <MenuItem
                key={list.id}
                onClick={() => scrollToPosition(list.targetId)}
              >
                {list.text}
              </MenuItem>
            ))}
          </StyledSelect>
        ) : (
          listData.map((list) => (
            <li key={list.id} onClick={() => scrollToPosition(list.targetId)}>
              {list.text}
            </li>
          ))
        )}
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
  ${media.medium`
    background-color: white;
    justify-content: space-between;
  `};
`;

const Left = styled.div<HeaderProps>`
  margin-left: 10px;
  min-width: 470px;
  color: ${(props) =>
    props.scrolled === 'true' ? 'black' : 'hsla(0, 0%, 100%, 0.7)'};
  text-decoration: none;
  font-weight: 700;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
  ${media.medium`
    color:black;
    font-size: 25px;
    min-width: 0px;
  `};
  ${media.small`
    font-size: 20px;
  `};
`;

const Right = styled.ul`
  margin-right: 10px;
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
  ${media.medium`
    margin-right: 20px;
    min-width: 0px;
  `};
`;

const StyledSelect = styled(Select)`
  width: 55px;
  display: flex;
  justify-content: center;
  margin-left: auto;
  input:focus {
    outline: none;
  }
`;
