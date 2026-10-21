import React from "react";

import style from "./Login.module.css";

function LoginForm() {
  return (
    <div>
      <div className={style.container}>
        <input className={style.login} type="text" />
        <input className={style.pass} type="text" />
        <button className={style.btn}>Войти</button>
      </div>
    </div>
  );
}

export default LoginForm;
