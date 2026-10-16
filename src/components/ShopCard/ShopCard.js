import React from "react";
import logo from './../../logo.svg';
import style from "./ShopCard.module.css";

function ShopCard() {
  return (
    <div className={style.container}>
      <div className={style.header}>header</div>
      <div className={style.cardBody}>
        <div className={style.img}>
          {/* Добавляем className={style.logo} к img */}
          <img src={logo} alt="logo" className={style.logo} />
        </div>
        <div className={style.card}>карточка товара</div>
      </div>
    </div>
  );
}

export default ShopCard;