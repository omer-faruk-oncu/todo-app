import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Header({ todos, setTodos }) {
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input) return;

    const newTodo = {
      id: uuidv4(),
      text: input.trim(),
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setInput("");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mt-5 p-3 text-danger">Todo App</h1>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-10">
          <InputGroup className="input-grup mb-3 p-5">
            <Form.Control
              className="form-control"
              placeholder="Enter new todo..."
              aria-label="Enter new todo..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
              style={{ height: "50px" }}
            />
            <Button variant="danger" id="button-addon" onClick={addTodo}>
              Add Todo
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export default Header;
