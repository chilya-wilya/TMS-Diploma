import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CartSumCheckerProps } from "../../Types";

import {
  removeAllBooksFromCart,
  CartBooksSelector,
} from "../../Redux/reducers/books";

import Button from "../Button";
import ModalWindow from "../ModalWindow";

import style from "./index.module.sass";

const CartSumChecker: FC<CartSumCheckerProps> = ({ price }) => {
  const dispatch = useDispatch();

  const cartList = useSelector(CartBooksSelector.getCartBooks);

  const [isShowModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const modalClose = () => setShowModal(false);

  const bookPrice = +price.toFixed(2);
  const Vat = +(bookPrice * 0.19).toFixed(2);
  const totalPrice = (bookPrice + Vat).toFixed(2);

  const onClick = () => {
    if (cartList.length === 0) {
      setModalMessage("There are no books in your cart!");
      setShowModal(true);
    } else {
      setModalMessage(
        "Our menagers will call you back as soon as possible, thank you for your order!"
      );
      setShowModal(true);
      dispatch(removeAllBooksFromCart());
    }
  };

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
        <Button text={"check out"} type="black" onClick={onClick} />
      </div>
      <ModalWindow
        isShown={isShowModal}
        modalText={modalMessage}
        modalClose={modalClose}
      />
    </div>
  );
};

export default CartSumChecker;
