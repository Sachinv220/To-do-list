import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import Tasks from "./components/Tasks";
import Sidebar from "./components/Sidebar";
import Customise from "./pages/Customise";
import { Route, Routes } from "react-router-dom";
import AlertBar from "./components/AlertBar";
import { onSubmit, verifyText, binarySearch } from "./Function";
import Http404 from "./pages/Http404";

function App() {
  const [todo, setTodo] = useState([]);
  const [err, setErr] = useState("");

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
      setErr("can't make an empty task");
      return;
    }
    if (err) setErr("");

    const list = onSubmit(todo, text);
    setTodo(list);
  };

  useEffect(() => {
    if (localStorage.getItem("list")) {
      const todoList = JSON.parse(localStorage.list);
      setTodo(todoList);
    }
  }, []);

  const clearAllTasks = () => {
    localStorage.list = "";
    setTodo([]);
  };

  const onCheck = id => {
    let newTodo = todo;
    const ind = binarySearch(newTodo, id);
    newTodo[ind].checked = !newTodo[ind].checked;
    localStorage.list = JSON.stringify(newTodo);
  };

  const changeTask = (id, text) => {
    if (!text) return;
    if (err) setErr("");

    let newTodo = todo;
    const ind = binarySearch(newTodo, id);
    newTodo[ind].text = text;
    setTodo(newTodo);
    localStorage.list = JSON.stringify(newTodo);
  };

  const MainApp = (
    <Flex zIndex={-1} alignItems="center" justifyContent="center" mb={20}>
      <Flex display="inline">
        <Todo onSubmit={handleSubmit} alert={Boolean(alert)} />
        <Tasks
          todo={todo}
          onDelete={deleteTask}
          onCheck={onCheck}
          onRename={changeTask}
        />
      </Flex>
    </Flex>
  );

  return (
    <React.Fragment>
      <Sidebar children={<AlertBar alert={err} />} />
      <Routes>
        <Route path="/to-do-list" element={MainApp} />
        <Route
          path="/customise"
          element={<Customise deleteEverything={clearAllTasks} />}
        />
        <Route path="*" element={<Http404 />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
