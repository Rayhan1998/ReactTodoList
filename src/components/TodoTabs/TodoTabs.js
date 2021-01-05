import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export default function TodoTabs({ todo }) {
  console.log(todo);
  return (
    <Box w="90%" h="30px" bg="#191933" p="5px" m="10px auto">
      <Heading as="h2" fontSize="14px" color="white">
        {todo}
      </Heading>
    </Box>
  );
}
