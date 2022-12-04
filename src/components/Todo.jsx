import {
  Input,
  Text,
  Button,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaTasks } from "react-icons/fa";

const Todo = ({ onSubmit }) => {
  const [task, setTask] = useState("");
  const buttonColor = useColorModeValue("blue", "teal");

  const addTask = () => {
    setTask("");
    onSubmit(task);
  };

  return (
    <Box mt={6} mb={2} rounded={16}>
      <Text fontSize="5xl">To do</Text>
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
        <Button
          onClick={addTask}
          colorScheme={buttonColor}
          size="sm"
          ml={2}
          mt={1}
        >
          Add
        </Button>
      </InputGroup>
      <></>
    </Box>
  );
};

export default Todo;
