import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import UserList from "./pages/UserList";

const App = () => {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={1000} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-list" element={<UserList />} />
      </Routes>
    </Router>
  );
};

export default App;
