import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Register from "./screens/Register";
import Home from "./screens/Home";
import Login from "./screens/Login";
import ShopCards from "./screens/ShopCards/ShopCards";



function App() {
  return (
    <div className="app-wrapper">
      <nav >
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="card">Каталог товаров</Link>

          </li>
          <li>
            <Link to="register">Реристрация</Link>
          </li>
          <li>
            <Link to="Login">Авторизация</Link>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/card" element={<ShopCards />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Мой магазин. Все права защищены.</p>
          <div className="footer-links">
            <a href="#about">О нас</a>
            <a href="#contacts">Контакты</a>
            <a href="#privacy">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div >
  );
}

export default App;
