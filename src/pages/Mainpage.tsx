import styled from 'styled-components';
import Top from '../components/Top';
import Introduce from '../components/Introduce';
import Projects from '../components/ProjectSection/Projects';
import Career from '../components/CareerSection/Career';
import Skills from '../components/SkillSection/Skills';

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
