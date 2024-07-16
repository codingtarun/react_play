import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";
export default function InputTask({ onAddNewTask }) {
  const [task, setTask] = useState("");
  const [days, setDays] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!task) return;
    const newTask = {
      id: Date.now(),
      task: task,
      isImportant: false,
      isCompleted: false,
    };
    console.log(newTask);
    onAddNewTask(newTask);
    setTask("");
    setDays(1);
  }
  return (
    <Form className="input-task" onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Add New Task"
          aria-label="Add New Task"
          aria-describedby="new-task"
          id="input-new-task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Form.Select
          aria-label="days to complete"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
        >
          <option className="days-to-complete">Days to Complete Task</option>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((day) => (
            <option value={day} key={day}>
              {day}
            </option>
          ))}
        </Form.Select>
        <Button type="submit" variant="outline-secondary" id="add-new-task">
          Add
        </Button>
      </InputGroup>
    </Form>
  );
}
