import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function PizzaInfo({ data }) {
  return (
    <Col xs={6} sm={4} md={3}>
      <Card>
        <Card.Img variant="top" src="https://placehold.co/400x400" />
        <Card.Body>
          <Card.Title className="text-center">{data.title}</Card.Title>
          <Card.Text className="text-center">{data.ingredients}</Card.Text>
          {data.soldOut ? (
            <Button variant="primary">Add to Cart</Button>
          ) : (
            <Button variant="primary" disabled>
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}
