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
import { SiAtom } from "react-icons/si";

const Todo = ({ onSubmit }) => {
  const [task, setTask] = useState("");

  const addTask = () => {
    setTask("");
    onSubmit(task);
  };

  return (
    <Box mt={6} mb={2} rounded={16}>
      <Heading display="flex" gap={2} fontSize="5xl">
        <SiAtom style={{ marginTop: "1px" }} />
        Tasks
      </Heading>
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
        <Circle
          cursor="pointer"
          onClick={addTask}
          size="27px"
          bg="blue.500"
          mt={1.5}
          ml={1.5}
        >
          <AiOutlineCheck />
        </Circle>
      </InputGroup>
    </Box>
  );
};

export default Todo;
