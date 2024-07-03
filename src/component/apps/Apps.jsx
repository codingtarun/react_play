import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function handleClick(btn){
    alert(`${btn} button clicked`);
}

export default function Apps(){
    return (
        <Row>
            <Col xs={6} sm={4} md={3} lg={2}>
                <Button variant="primary" onClick={handleClick}>Primary</Button>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
                <Button variant="secondary">Secondary</Button>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
               <Button variant="success">Success</Button>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
                <Button variant="warning">Warning</Button>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
                <Button variant="danger">Danger</Button>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
                <Button variant="info">Info</Button>
            </Col>
        </Row>
    );
}