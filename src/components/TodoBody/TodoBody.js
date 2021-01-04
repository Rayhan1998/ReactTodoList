import React from "react";
import { Box, Heading } from "@chakra-ui/react";
// import TodoTabs from "../TodoTabs";
import "./TodoBody.css";
import plus from "./plus.png";

export default function TodoBody({ todo, setTodo }) {
  console.log(todo);
  return (
    <React.Fragment>
      <Box
        h="200px"
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
        <form className="form">
          <input
            className="todo-input"
            type="text"
            placeholder="add new task"
          />
          <buttom className="todo-button">
            <img src={plus} alt="plus-icon" />
          </buttom>
        </form>
      </Box>
    </React.Fragment>
  );
}
