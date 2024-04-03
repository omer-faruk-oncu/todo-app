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
    <div className="container header w-50">
      <h1 className="text-center mt-5 p-3 text-danger">Todo App</h1>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter new todo..."
          aria-label="Enter new todo..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button variant="success" id="button-addon" onClick={addTodo}>
          Add Todo
        </Button>
      </InputGroup>
    </div>
  );
}

export default Header;
