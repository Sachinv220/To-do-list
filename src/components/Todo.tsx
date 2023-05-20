import {
  Input,
  Heading,
  Circle,
  InputGroup,
  InputLeftElement,
  Box,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaTasks, FaReact } from "react-icons/fa";
import { VscCheck  } from "react-icons/vsc";

interface Props {
  onSubmit : (text : string) => void;
}

const Todo : React.FC<Props> = ({ onSubmit }) => {
  const [task, setTask] = useState("");
  const prefersReducedMotion = usePrefersReducedMotion();

  const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  const addTask = () => {
    setTask("");
    onSubmit(task);
  };

  return (
    <Box mt={10} mb={2} rounded={16}>
      <Heading display="flex" gap={2} fontSize="5xl">
        <Box animation={animation}>
          <FaReact style={{ marginTop: "1px" }} />
        </Box>
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
          <VscCheck />
        </Circle>
      </InputGroup>
    </Box>
  );
};

export default Todo;
