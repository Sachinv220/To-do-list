import Task from "./Task";
import { Box, Text } from "@chakra-ui/react";

const Tasks = ({ todo, onDelete, onCheck, onRename }) => {
  return (
    <Box>
      {todo.length > 0 ? (
        todo.map(task => (
          <Task
            key={task.id}
            onCheck={onCheck}
            task={task}
            onDelete={onDelete}
            onRename={onRename}
          />
        ))
      ) : (
        <Text fontWeight="bold" textAlign="center" fontSize="3xl">
          No Tasks to show
        </Text>
      )}
    </Box>
  );
};

export default Tasks;
