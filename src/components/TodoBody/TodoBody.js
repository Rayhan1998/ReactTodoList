import React, { useState, useRef } from "react";
import { Box, Heading } from "@chakra-ui/react";
import TodoTabs from "../TodoTabs/TodoTabs";
import "./TodoBody.css";
import plus from "./plus.png";

export default function TodoBody({ todo, setTodo }) {
  const [inputText, setInputText] = useState("");
  const inputEl = useRef(null);

  const formSubmit = e => {
    e.preventDefault();
    console.log("sub");
    setTodo([...todo, { todo: inputEl.current.value, completed: false }]);
    inputEl.current.value = "";
  };

  return (
    <React.Fragment>
      <Box
        w="480px"
        bg="#10101d"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
      >
        <Heading as="h1" fontSize="20px" color="white">
          To do List
        </Heading>
        <form className="form" onSubmit={formSubmit}>
          <input
            className="todo-input"
            type="text"
            placeholder="add new task"
            ref={inputEl}
          />
          <button className="todo-button">
            <img src={plus} alt="plus-icon" />
          </button>
        </form>

        {todo.map(todo => {
          return <TodoTabs todo={todo.todo} />;
        })}
      </Box>
    </React.Fragment>
  );
}
