import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListToDoComponent from "../list-todo/ListToDoComponent";
import LoginComponent from "../login/LoginComponent";

const ToDoApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LoginComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/todos" element={<ListToDoComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ToDoApp;
