import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import IsAdminAuthenticated from "./Middlewares/IsAdminAuthenticated";
import IsUserAuthenticated from "./Middlewares/IsUserAuthenticated";
import AdminDashboard from './Pages/Admin/Dashboard';
import AdminLogIn from './Pages/Admin/LogIn';
import AdminSignUp from './Pages/Admin/SignUp';
import UserDashboard from './Pages/User/Dashboard';
import UserLogIn from './Pages/User/LogIn';
import UserSignUp from './Pages/User/SignUp';
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user/login" element={<UserLogIn />} />
      <Route path="/user/signup" element={<UserSignUp />} />
      <Route path="/user" element={<IsUserAuthenticated />}>
        <Route path="/user/home" element={<UserDashboard />} />
      </Route>
      <Route path="/admin/login" element={<AdminLogIn />} />
      <Route path="/admin/signup" element={<AdminSignUp />} />
      <Route path="/admin" element={<IsAdminAuthenticated />}>
        <Route path="/admin/home" element={<AdminDashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);