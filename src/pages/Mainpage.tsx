import styled from 'styled-components';
import Top from '../components/Top';
import Introduce from '../components/Introduce';
import Projects from '../components/ProjectSection/Projects';
import Career from '../components/Career';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

function Mainpage() {
  return (
    <Content>
      <Top />
      <div id="Introduce">
        <Introduce />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Career">
        <Career />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Skills">
        <Skills />
      </div>
    </Content>
  );
}

const Content = styled.div`
  width: 100vw;
`;

export default Mainpage;
