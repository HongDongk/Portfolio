import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import { Outlet } from 'react-router';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Noto Sans KR", sans-serif;
    overflow-x: hidden; /* 수평 스크롤 제거 */
    width: 100%;
    height: 100%;
  }
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
