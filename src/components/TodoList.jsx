import { BsTrash3 } from "react-icons/bs";

const TodoList = ({ todos, setTodos }) => {

    const deleteTodo = (id)  =>{
        let filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
        localStorage.setItem("todos", JSON.stringify(filteredTodos));
    };

  return (
    <div className="todo-list container w-50">
      <h2 className="text-center m-5">Todos</h2>
      <ul>
        {todos?.length ? (
          todos.map(({id,text}) => 
          <div className="list d-flex justify-content-between" key={id}>
              <li className="text-primary fs-3" >{text}</li>
              <BsTrash3 className="fs-3 text-danger" onClick={()=>deleteTodo(id)}/>
          </div>
          )
        ) : (
          <p>No tasks yet!</p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
