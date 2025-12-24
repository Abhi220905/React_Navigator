import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskForm from "./pages/TaskForm";
import SingleView from "./pages/SingleView";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

const App = () => {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addTask" element={<TaskForm />} />
          <Route path="/updateTask/:id" element={<TaskForm />} />
          <Route path="/singleTask/:taskId" element={<SingleView />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
