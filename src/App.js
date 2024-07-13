import Container from "react-bootstrap/Container";
import MainNav from "./component/MainNav";
import Section from "./component/Section";
import PizzaCard from "./component/pizza/PizzaCard";
import "./data.js";
import "./assets/css/App.css";
import ListBox from "./component/list/ListBox.jsx";
import StepBox from "./component/step/StepBox.jsx";

function App() {
  return (
    <div>
      <MainNav />
      <Container fluid className="m-0 p-0">
        <Section>
          <PizzaCard></PizzaCard>
        </Section>
        <Section>
          <StepBox></StepBox>
        </Section>
        <Section>
          <ListBox></ListBox>
        </Section>
      </Container>
    </div>
  );
}

export default App;
