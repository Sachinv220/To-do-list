import React, { useEffect, useState } from "react";
import { verifyText, binarySearch, onSubmit } from "../utils/Function";
import { Flex } from "@chakra-ui/react";
import { DragDropContext } from "react-beautiful-dnd";
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

  const onDragEnd = result => {
    const { destination, source } = result;

    if (!destination) return;
    if (destination.index === source.index) return;

    let add;
    let active = todo;

    add = active[source.index];
    active.splice(source.index, 1);

    active.splice(destination.index, 0, add);

    setTodo(active);
    localStorage.list = JSON.stringify(active);
  };
  return (
    <Flex zIndex={-1} alignItems="center" justifyContent="center" mb={20}>
      <Flex display="inline">
        <Todo onSubmit={handleSubmit} alert={Boolean(alert)} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Tasks
            todo={todo}
            onDelete={deleteTask}
            onCheck={onCheck}
            onRename={changeTask}
          />
        </DragDropContext>
      </Flex>
    </Flex>
  );
};

export default TodoPage;
