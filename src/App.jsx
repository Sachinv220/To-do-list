import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Customise from "./pages/Customise";
import { Route, Routes } from "react-router-dom";
import Http404 from "./pages/Http404";
import TodoPage from "./pages/TodoPage";

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <React.Fragment>
      <Sidebar />
      <Routes>
        <Route
          path="/to-do-list"
          element={<TodoPage todo={todo} setTodo={setTodo} />}
        />
        <Route path="/customise" element={<Customise setTodo={setTodo} />} />
        <Route path="*" element={<Http404 />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
