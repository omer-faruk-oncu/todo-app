import { useState } from "react";
import Header from "./components/Header"
import TodoList from "./components/TodoList";
import "./index.css"



function App() {

  const initialTodos = () => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
    
  }
  const[todos, setTodos] = useState(initialTodos)
 

  return (
    <div className="App">
      <Header todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/> 
    </div>
  );
}

export default App;
