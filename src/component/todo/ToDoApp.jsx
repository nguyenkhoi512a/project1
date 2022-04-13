import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterComponent from "../footer/FooterComponent";
import HeaderComponent from "../header/HeaderComponent";
import ListToDoComponent from "../list-todo/ListToDoComponent";
import LoginComponent from "../login/LoginComponent";
import PageNotFoundComponent from "../page-not-found/PageNotFoundComponent";
import WelcomeComponent from "../welcome/WelcomeComponent";

const ToDoApp = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:name" element={<WelcomeComponent />} />
          <Route path="/todos" element={<ListToDoComponent />} />
          <Route path ="/*"element={<PageNotFoundComponent/>}/>
        </Routes>
      </BrowserRouter>
      <div>
        {" "}
        <FooterComponent />
      </div>
    </div>
  );
};

export default ToDoApp;
