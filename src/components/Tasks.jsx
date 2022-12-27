import Task from "./Task";
import { Box } from "@chakra-ui/react";
import { Droppable } from "react-beautiful-dnd";

const Tasks = ({ todo, onDelete, onCheck, onRename }) => {
  return (
    <Droppable droppableId="todos">
      {provided => (
        <Box ref={provided.innerRef} {...provided.droppableProps}>
          {todo.map((task, index) => (
            <Task
              key={task.id}
              onCheck={onCheck}
              task={task}
              onDelete={onDelete}
              onRename={onRename}
              index={index}
            />
          ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
};

export default Tasks;
