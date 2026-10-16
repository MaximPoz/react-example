import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Register from "./screens/Register";
import Home from "./screens/Home";
import Login from "./screens/Login";
import ShopCard from "./components/ShopCard/ShopCard";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="Login">Авторизация</Link>
          </li>
          <li>
            <Link to="register">Реристрация</Link>
          </li>
          <li>
            <Link to="card">Карточка товара</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/card" element={<ShopCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
