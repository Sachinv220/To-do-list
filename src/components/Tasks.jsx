import Task from "./Task";
import { Box, Text } from "@chakra-ui/react";

const Tasks = ({ todo, onDelete, onCheck, onRename }) => {
  const Todo = todo.length > 0;
  return (
    <Box>
      {Todo ? (
        <Box display="inline">
          <Text fontSize="3xl" fontWeight="bold">
            Tasks
          </Text>
        </Box>
      ) : (
        ""
      )}

      {Todo ? (
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
