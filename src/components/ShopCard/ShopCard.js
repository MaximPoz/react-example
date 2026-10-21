import React from "react";
import style from "./ShopCard.module.css";
import { useNavigate } from "react-router-dom";
import Stars from "../Stars/Stars";



function ShopCard({ brand, title, stars, description, descriptionFull, imgCard, price, currency }) {
  const navigate = useNavigate()

  const addBtn = (event) => alert("добавить в корзину")
  const wishBtn = (event) => alert("добавить в лист ожидания")
  const wishlistIcon = (event) => alert("добавить в понравилось")
  const backBtn = (event) => navigate('/')


  return (
    <div className={style.container}>
      <div className={style.header}>
        <button onClick={backBtn} className={style.btnBack}> {"<"} BACK TO ALL PLANTS</button>
        <button onClick={wishlistIcon} className={style.wishlistIcon}>♡</button>
      </div>

      <div className={style.cardBody}>
        <div className={style.img}>
          <img src={imgCard} alt={title} className={style.logo} />
        </div>

        <div className={style.card}>
          <h2 className={style.cardH2}>{title} {brand}</h2>
          <p className={style.title}>{description}</p>
          <p className={style.price}>{currency}{price}</p>
          <Stars count={stars} />
          <p className={style.description}>{descriptionFull}</p>

          <div className={style.btnCards}>
            <button onClick={addBtn} className={style.btnCard}>ADD TO CART</button>
            <button onClick={wishBtn} className={style.btnCard}>WISHLIST</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;