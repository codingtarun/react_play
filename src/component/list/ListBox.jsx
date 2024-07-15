import PrimaryHeading from "../typography/PrimaryHeading";
import Card from "react-bootstrap/Card";
import TaskList from "./TaskList";
import InputTask from "./InputTask";

const taskList = [
  {
    id: 1,
    task: "Complete React Tutorial",
    isImportant: true,
    isCompleted: false,
  },
  {
    id: 2,
    task: "Complete Java Script Tutorial",
    isImportant: true,
    isCompleted: false,
  },
  {
    id: 3,
    task: "Complete PHP Tutorial",
    isImportant: true,
    isCompleted: false,
  },
  {
    id: 4,
    task: "Complete Laravel Tutorial",
    isImportant: false,
    isCompleted: false,
  },
  {
    id: 5,
    task: "Complete Laravel + React Tutorial",
    isImportant: false,
    isCompleted: false,
  },
];

export default function ListBox() {
  return (
    <>
      <PrimaryHeading>Todo List</PrimaryHeading>
      <div className="d-flex justify-content-center mt-5 todoListBox">
        <div>
          <InputTask></InputTask>
          <Card style={{ width: "50rem" }}>
            <Card.Body>
              <Card.Title>Todo List</Card.Title>
              <Card.Text>
                {taskList.map((task) => (
                  <TaskList task={task} />
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
