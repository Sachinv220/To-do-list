import React, { useEffect, useState } from "react";
import { verifyText, binarySearch, onSubmit } from "../utils/Function";
import { Center } from "@chakra-ui/react";
import Todo from "../components/Todo";
import Tasks from "../components/Tasks";

const TodoPage = () => {
  const [todo, setTodo] = useState([]);

  const deleteTask = id => {
    const list = todo.filter(task => task.id !== id);
    setTodo(list);
    if (list.length !== 0) {
      localStorage.list = JSON.stringify(list);
    } else {
      localStorage.list = "";
    }
  };

  const handleSubmit = text => {
    if (!verifyText(text)) {
      return;
    }

    const list = onSubmit(todo, text);
    setTodo(list);
  };

  useEffect(() => {
    if (localStorage.getItem("list")) {
      const todoList = JSON.parse(localStorage.list);
      setTodo(todoList);
    }
  }, []);

  const onCheck = id => {
    let newTodo = todo;
    const ind = binarySearch(newTodo, id);
    newTodo[ind].checked = !newTodo[ind].checked;
    localStorage.list = JSON.stringify(newTodo);
  };

  const changeTask = (id, text) => {
    if (!text) return;

    let newTodo = todo;
    const ind = binarySearch(newTodo, id);
    newTodo[ind].text = text;
    setTodo(newTodo);
    localStorage.list = JSON.stringify(newTodo);
  };

  return (
    <Center display="flex" flexDirection="column">
        <Todo onSubmit={handleSubmit} alert={Boolean(alert)} />
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
