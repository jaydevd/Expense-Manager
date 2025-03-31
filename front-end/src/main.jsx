import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";



import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user" >
        {/* <Route path="/user/login" element={<UserLogIn />} /> */}
        {/* <Route path="/user/signup" element={<UserSignUp />} /> */}
        {/* <Route path="/user/home" element={<UserDashboard />} /> */}
      </Route>
      <Route path="/admin" >
        {/* <Route path="/admin/login" element={<AdminLogIn />} /> */}
        {/* <Route path="/admin/signup" element={<AdminSignUp />} /> */}
        {/* <Route path="/admin/home" element={<AdminDashboard />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);