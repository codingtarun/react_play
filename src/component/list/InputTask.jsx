import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
export default function InputTask() {
  return (
    <Form>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Add New Task"
          aria-label="Add New Task"
          aria-describedby="new-task"
          id="input-new-task"
        />
        <Button variant="outline-secondary" id="add-new-task">
          Add
        </Button>
      </InputGroup>
    </Form>
  );
}
