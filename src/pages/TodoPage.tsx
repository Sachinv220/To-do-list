import React, { useCallback, useState } from "react";
import { verifyText, binarySearch, onSubmit } from "../utils/util";
import { Center } from "@chakra-ui/react";
import Todo from "../components/Todo";
import Tasks from "../components/Tasks";
import { TaskArray, TTask } from "../utils/types";

const TodoPage: React.FC = () => {
  const [todo, setTodo] = useState<TaskArray>(() => {
    const storedList = localStorage.getItem("list");
    return storedList ? JSON.parse(storedList) : [];
  });

  const deleteTask = useCallback((id: number) => {
    setTodo((prevTodo: TaskArray) => {
      const newList: TaskArray = prevTodo.filter((task: TTask) => task.id !== id);
      localStorage.setItem("list", JSON.stringify(newList));
      return newList;
    });
  }, []);

  const handleSubmit = useCallback((text: string) => {
    if (!verifyText(text)) {
      return;
    }

    setTodo((prevTodo: TaskArray) => {
      const newList: TaskArray = onSubmit(prevTodo, text);
      localStorage.setItem("list", JSON.stringify(newList));
      return newList;
    });
  }, []);

  const onCheck = useCallback((id: number) => {
    setTodo((prevTodo: TaskArray) => {
      const newList: TaskArray = [...prevTodo];
      const ind: number = binarySearch(newList, id);
      newList[ind].checked = !newList[ind].checked;
      localStorage.setItem("list", JSON.stringify(newList));
      return newList;
    });
  }, []);

  const changeTask = useCallback((id: number, text: string) => {
    if (!text) return;

    setTodo((prevTodo: TaskArray) => {
      const newList: TaskArray = [...prevTodo];
      const ind: number = binarySearch(newList, id);
      newList[ind].text = text;
      localStorage.setItem("list", JSON.stringify(newList));
      return newList;
    });
  }, []);

  return (
      <Center display="flex" flexDirection="column">
        <Todo onSubmit={handleSubmit} />
        <Tasks
            todo={todo}
            onDelete={deleteTask}
            onCheck={onCheck}
            onRename={changeTask}
        />
      </Center>
  );
};

export default TodoPage;
