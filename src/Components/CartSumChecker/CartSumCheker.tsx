import React, { FC } from "react";
import classNames from "classnames";

import Button from "../Button";

import style from "./index.module.sass";

type CartSumCheckerProps = {
  price: number;
};

const CartSumChecker: FC<CartSumCheckerProps> = ({ price }) => {
  const bookPrice = price;
  const Vat = (bookPrice * 0.19).toFixed(2);
  const totalPrice = (+bookPrice + +Vat).toFixed(2);

  return (
    <div className={style.sumWrapper}>
      <div className={style.sumRow}>
        <p className={style.title}>Sum total</p>
        <p className={style.value}>{`$ ${bookPrice}`}</p>
      </div>
      <div className={style.sumRow}>
        <p className={style.title}>VAT</p>
        <p className={style.value}>{`$ ${Vat}`}</p>
      </div>
      <div className={style.sumRowBig}>
        <p className={style.titleBig}>Total</p>
        <p className={style.valueBig}>{`$ ${totalPrice}`}</p>
      </div>
      <div className={style.button}>
        <Button
          text={"check out"}
          type="black"
          onClick={() => console.log("HI!")}
        />
      </div>
    </div>
  );
};

export default CartSumChecker;
