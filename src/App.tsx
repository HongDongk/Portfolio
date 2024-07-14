import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import { Outlet } from 'react-router';

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden; /* 수평 스크롤 제거 */
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
