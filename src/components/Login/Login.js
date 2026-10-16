import React from "react";

import logo from './../../logo.svg'

import style from "./Login.module.css";

function LoginForm() {
  return (
    <div className={style.container}>
      <input className={style.login} type="text" />
      <input className={style.pass} type="text" />
      <button className={style.btn}>Авторизация</button>



      
      <div className={style.cont}>
        <div className={style.header}>header</div>
          <div className={style.left}>
            <img src={logo} alt="logo" />
          </div>
          <div className={style.right}>
            <div>name: Flawers</div>
            <div>underName: Good green plant</div>
            <div>price: 1000rub</div>
            <div>discription: Очень хотелось бы что нибудь написать, но лень</div>
          </div>
      </div>
    </div>

  );
}

export default LoginForm;
