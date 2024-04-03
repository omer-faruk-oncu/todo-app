import { BsTrash3 } from "react-icons/bs";

const TodoList = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    let filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  return (
    <div className=" container todo-list  mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <h2 className="text-center fs-1 text-danger ">Todos</h2>
          <ul>
            {todos?.length ? (
              todos.map(({ id, text }) => (
                <div
                  className="list d-flex justify-content-between align-items-center"
                  key={id}
                >
                  <li className="fs-3">{text}</li>
                  <BsTrash3
                    className="fs-3 text-danger"
                    onClick={() => deleteTodo(id)}
                  />
                </div>
              ))
            ) : (
              <p className="text-center mt-5 fs-3">No tasks yet!</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
