import React, { useState } from "react";

import "./App.css";

import TodoBody from "./components/TodoBody/TodoBody";

function App() {
  const [todo, setTodo] = useState([]);
  console.log(todo);
  return (
    <div className="App">
      <TodoBody todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
