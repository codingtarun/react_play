import Container from 'react-bootstrap/Container';
import Section from './component/Section';
import MainNav from './component/MainNav';
import Slider from './component/Slider';
import PrimaryHeading from './component/headings/PrimaryHeading';
import TaglineHeading from './component/headings/TaglineHeading';
import Apps from './component/apps/Apps';

import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <MainNav/>
      
      <Container fluid>
        <Slider/>
        <Container>
          <Section>
            <PrimaryHeading title="Apps"/>
            <TaglineHeading title="Enjoy our Apps"/>
            <Apps></Apps>
          </Section>
        </Container>
      </Container>
    </div>
  );
}

export default App;
