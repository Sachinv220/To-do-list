import React, { useState, useEffect } from "react";
import Customise from "./pages/Customise";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import Http404 from "./pages/Http404";
import TodoPage from "./pages/TodoPage";
const Sidebar = React.lazy(() => import("./components/Sidebar"));
const BottomBar = React.lazy(() => import("./components/BottomBar"));

function App() {
  const [todo, setTodo] = useState([]);
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)");

  useEffect(() => {
    if (localStorage.getItem("chakra-ui-color-mode") === "light") {
      localStorage.setItem("chakra-ui-color-mode", "dark");
    }
  }, []);

  return (
    <React.Fragment>
      <React.Suspense
        fallback={<div>wait a second loading</div>}
        children={isSmallerThan850 ? <BottomBar /> : <Sidebar />}
      />

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
