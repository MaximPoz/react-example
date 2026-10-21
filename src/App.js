import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Register from "./screens/Register";
import Home from "./screens/Home";
import Login from "./screens/Login";
import ShopCard from "./components/ShopCard/ShopCard";

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\\\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

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
        <Route path="/card" element={<ShopCard item={item}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
