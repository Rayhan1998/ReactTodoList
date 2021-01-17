import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export default function TodoTabs({ todos, id, deleteTodo }) {
  return (
    <Box
      w="90%"
      h="30px"
      bg="#191933"
      p="5px"
      m="10px auto"
      d="flex"
      justifyContent="space-between"
    >
      <Heading as="h2" fontSize="14px" color="white">
        {todos.todo}
      </Heading>

      <button style={{ color: "white" }} onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </Box>
  );
}
