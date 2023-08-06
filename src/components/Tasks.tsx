/** @format */

import React, { memo } from "react";
import Task from "./Task";
import { Box, Text } from "@chakra-ui/react";
import { TaskArray } from "../utils/types";

interface Props {
  todo: TaskArray;
  onDelete: (id: number) => void;
  onCheck: (id: number) => void;
  onRename: (id: number, text: string) => void;
}

const Tasks: React.FC<Props> = ({ todo, onDelete, onCheck, onRename }) => {
  return (
    <Box>
      {todo.length > 0 ? (
        todo.map((task) => (
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

export default memo(Tasks);
