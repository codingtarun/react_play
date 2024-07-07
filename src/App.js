import Container from "react-bootstrap/Container";
import MainNav from "./component/MainNav";

import "./assets/css/App.css";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Container fluid></Container>
    </div>
  );
}

export default App;
