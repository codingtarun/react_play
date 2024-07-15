import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
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
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          <span>
            <FontAwesomeIcon
              icon={task.isImportant ? faStarSolid : faStarRegular}
            />{" "}
            {task.task}
          </span>
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-secondary">
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button variant="outline-secondary">
              <FontAwesomeIcon icon={faEdit} />
            </Button>
          </ButtonGroup>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
