import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Customise from "./pages/Customise";
import { Route, Routes } from "react-router-dom";
import Http404 from "./pages/Http404";
import TodoPage from "./pages/TodoPage";

function App() {
  useEffect(() => {
    if (localStorage.getItem("chakra-ui-color-mode") === "light") {
      localStorage.setItem("chakra-ui-color-mode", "dark");
    }
  }, []);

  return (
    <React.Fragment>
      <Sidebar />
      <Routes>
        <Route path="/to-do-list" element={<TodoPage />} />
        <Route path="/customise" element={<Customise />} />
        <Route path="*" element={<Http404 />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
