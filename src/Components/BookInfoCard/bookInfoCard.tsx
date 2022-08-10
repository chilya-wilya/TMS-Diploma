import React, { FC, useState } from "react";

import { BookInfoCardProps } from "../../Types";

import PageTitle from "../PageTitle";
import StarRating from "../StarRating";
import BookPrice from "../BookPrice";
import InfoList from "../InfoList";
import Button from "../Button";
import IconButton from "../IconButton";
import ModalWindow from "../ModalWindow";

import { useAuth } from "../../hooks";

import {
  setBookToCart,
  BookSelector,
  CartBooksSelector,
} from "../../Redux/reducers/books";

import style from "./bookInfoCard.module.sass";
import { useDispatch, useSelector } from "react-redux";

const BookInfoCard: FC<BookInfoCardProps> = ({
  title,
  subtitle,
  authors,
  publisher,
  pages,
  year,
  rating,
  price,
  image,
  pdf,
  isbn13,
  url,
  addToFav,
  favIconType,
}) => {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();

  const currentBook = useSelector(BookSelector.getBookInfo);
  const CartList = useSelector(CartBooksSelector.getCartBooks);

  const isBookInCart = !!CartList.find(
    (book) => book.isbn13 === currentBook.isbn13
  );

  const [isShowModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const modalClose = () => setShowModal(false);

  const onAddToCart = () => {
    if (!isAuth) {
      setModalMessage("You should sign in first!");
      setShowModal(true);
    } else if (isBookInCart) {
      setModalMessage("Book is already in your cart!");
      setShowModal(true);
    } else {
      setModalMessage("Book added in your cart");
      setShowModal(true);
      dispatch(setBookToCart(currentBook));
    }
  };

  let link: any;
  if (pdf) {
    link = Object.values(pdf)[0];
  }

  return (
    <div className="wrapper">
      <PageTitle text={title} size="big" />
      <div className={style.infoRow}>
        <div className={style.imageWrapper}>
          <img src={image} alt="book cover" />
        </div>
        <div className={style.fav}>
          <IconButton type={favIconType} color="black" onClick={addToFav} />
        </div>
        <div className={style.info}>
          <div className={style.priceRating}>
            <BookPrice size="big" price={price} />
            <StarRating initialValue={+rating} />
          </div>
          <div className={style.list}>
            <InfoList
              authors={authors}
              publisher={publisher}
              year={year}
              pages={pages}
            />
          </div>
          <div className={style.button}>
            <Button text="add to cart" type="black" onClick={onAddToCart} />
          </div>
          {pdf && (
            <div className={style.link}>
              <a href={link} target="_blank">
                Preview book
              </a>
            </div>
          )}
        </div>
      </div>
      <ModalWindow
        isShown={isShowModal}
        modalText={modalMessage}
        modalClose={modalClose}
      />
    </div>
  );
};

export default BookInfoCard;
