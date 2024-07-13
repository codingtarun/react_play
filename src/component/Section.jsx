import Container from "react-bootstrap/Container";
export default function Section({ children }) {
  return <Container className="section py-3">{children}</Container>;
}
