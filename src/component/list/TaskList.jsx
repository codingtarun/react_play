import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStarSolid,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

export default function TaskList({ task }) {
  return (
    <>
      <ListGroup>
        <ListGroup.Item className="d-flex justify-content-between align-items-center border-0">
          <InputGroup>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control
              aria-label="Text input with checkbox"
              value={task.task}
              disabled={true}
            />
            <ButtonGroup aria-label="Basic example">
              <Button variant="outline-secondary" className="rounded-0">
                <FontAwesomeIcon
                  icon={task.isImportant ? faStarSolid : faStarRegular}
                />
              </Button>
              <Button variant="outline-secondary" className="rounded-0">
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              <Button variant="outline-secondary" className="rounded-0">
                <FontAwesomeIcon icon={faEdit} />
              </Button>
            </ButtonGroup>
          </InputGroup>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
