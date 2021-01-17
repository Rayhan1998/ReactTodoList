import React, { useState, useRef, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import TodoTabs from "../TodoTabs/TodoTabs";
import "./TodoBody.css";
import plus from "./plus.png";

export default function TodoBody({ todo, setTodo }) {
  const [inputText, setInputText] = useState("");
  const [todoId, setTodoId] = useState(0);

  const inputEl = useRef(null);

  const formSubmit = e => {
    e.preventDefault();
    console.log("sub");
    console.log(todo.length);

    if (inputEl.current.value.length > 0) {
      setTodo([
        ...todo,
        {
          todo: inputEl.current.value,
          completed: false,
          // id: todo[todo.length - 1].id + 1
          id: todoId
        }
      ]);
    }

    inputEl.current.value = "";
  };

  // deleted todo with specific id
  const deleteTodo = id => {
    setTodo(
      todo.filter(function(todos) {
        if (todos.id != id) {
          return todos;
        }
      })
    );
  };

  useEffect(() => {
    // updates todo id state
    if (todo.length > 0) {
      setTodoId(todo[todo.length - 1].id + 1);
    }
  });

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
          return (
            <TodoTabs
              deleteTodo={deleteTodo}
              key={todo.id}
              id={todo.id}
              setTodo={setTodo}
              todos={todo}
            />
          );
        })}
      </Box>
    </React.Fragment>
  );
}
