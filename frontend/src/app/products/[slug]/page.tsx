"use client";

import { useState } from "react";
import styles from "./IndividualProductPage.module.css";
import { getGame } from "@/libs/apis";

const IndividualProductPage = async (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const gameDetails = await getGame(slug);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setPrice(Number(((quantity - 1) * gameDetails.price).toFixed(2)));
    }
  };

  const handleIncrease = () => {
    if (quantity < gameDetails.quantity) {
      setQuantity(quantity + 1);
      setPrice(Number(((quantity + 1) * gameDetails.price).toFixed(2)));
    }
  };

  return (
    <div>
      <h1>Individual Product Page</h1>
      <div className={styles.content}>
        <button
          onClick={handleDecrease}
          className={`quantity === 0 && ${styles.disabledBtn}`}
          disabled={quantity === 0}
        >
          -
        </button>
        <input type='text' value={quantity} readOnly />
        <button
          onClick={handleIncrease}
          className={
            quantity === gameDetails.quantity ? styles.disabledBtn : ""
          }
          disabled={quantity === gameDetails.quantity}
        >
          +
        </button>
        <div>$ {price}</div>
        <button
          className={`${styles.btn} ${quantity === 0 && styles.disabledBtn}`}
          disabled={quantity === 0}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default IndividualProductPage;
