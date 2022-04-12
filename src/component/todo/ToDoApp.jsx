import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListToDoComponent from "../list-todo/ListToDoComponent";
import LoginComponent from "../login/LoginComponent";
import WelcomeComponent from "../welcome/WelcomeComponent";

const ToDoApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<LoginComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/welcome/:name" element={<WelcomeComponent />} />
        <Route path="/todos" element={<ListToDoComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ToDoApp;
