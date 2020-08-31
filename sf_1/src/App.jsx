import React from "react";
import TodoList from "./Todo/TodoList";
import fabolous from "./5f4d45b521371c70bd413e14.png";

function App() {
  let [todos, setTodos] = React.useState([
    { id: 1, title: "one more todos in the universe", completed: false },
    {
      id: 2,
      title: "but it better than hello f***ing world",
      completed: false,
    },
    { id: 3, title: "купить масло...", completed: true },
  ]);

  function onToggle(id) {
    setTodos(
      (todos = todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }))
    );
    console.log(todos);
  }

  return (
    <div className="container">
      <img className="fabolous" src={fabolous} alt="fabolous" />
      <TodoList todos={todos} onChange={onToggle} />
    </div>
  );
}

export default App;
