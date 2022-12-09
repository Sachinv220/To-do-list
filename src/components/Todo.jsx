import {
  Input,
  Heading,
  Circle,
  InputGroup,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";

const Todo = ({ onSubmit }) => {
  const [task, setTask] = useState("");

  const addTask = () => {
    setTask("");
    onSubmit(task);
  };

  return (
    <Box mt={6} mb={2} rounded={16}>
      <Heading fontSize="5xl">To do</Heading>
      <InputGroup>
        <InputLeftElement children={<FaTasks />} />
        <Input
          rounded={10}
          width={300}
          placeholder="Add a task"
          value={task}
          onChange={e => setTask(e.target.value)}
          onKeyPress={e => e.key === "Enter" && addTask()}
          variant="filled"
        />
        <Circle cursor="pointer" onClick={addTask} size="27px" bg="blue.500" mt={2} ml={1}>
          <AiOutlineCheck />
        </Circle>
      </InputGroup>
    </Box>
  );
};

export default Todo;
