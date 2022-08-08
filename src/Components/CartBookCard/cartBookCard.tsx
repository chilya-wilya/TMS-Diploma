import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { CartBookItemProps } from "../../Types";

import {
  CartBooksSelector,
  removeBookFromCart,
} from "../../Redux/reducers/books";

import { ReactComponent as Delete } from "../../Assets/icons/Cancel.svg";

import PageTitle from "../PageTitle";
import BookPrice from "../BookPrice";
import BookCounter from "../BookCounter";

import style from "./cartBookCard.module.sass";

const CartBookCard: FC<CartBookItemProps> = ({
  title,
  authors,
  image,
  price,
  isbn13,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartList = useSelector(CartBooksSelector.getCartBooks);
  const currentBook = cartList.find((book) => book.isbn13 === isbn13);

  const onDelete = () => {
    dispatch(removeBookFromCart(currentBook?.isbn13));
  };

  const [count, setCount] = useState(1);
  return (
    <div className={classNames(style.card, "wrapper")}>
      <div className={style.bookCover}>
        <img src={image} alt="book cover" />
      </div>
      <div className={style.bookInfo}>
        <div
          className={style.title}
          onClick={() => navigate(`/books/${isbn13}`)}
        >
          <PageTitle text={title} size="small" />
        </div>
        <div className={style.authors}>
          <p>{`by ${authors}`}</p>
        </div>
        <div className={style.counter}>
          <BookCounter
            count={count}
            onClickMinus={() => setCount(count - 1)}
            onClickPlus={() => setCount(count + 1)}
          />
        </div>
      </div>
      <div className={style.price}>
        <BookPrice price={price} />
      </div>
      <div className={style.delete}>
        <Delete onClick={onDelete} />
      </div>
    </div>
  );
};

export default CartBookCard;
