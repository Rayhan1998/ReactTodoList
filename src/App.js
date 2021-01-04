import React, { useState } from "react";

import "./App.css";

import TodoBody from "./components/TodoBody/TodoBody";

function App() {
  const [todo, setTodo] = useState([{ todo: "run", completed: true }]);
  console.log(todo);
  return (
    <div className="App">
      <TodoBody todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
