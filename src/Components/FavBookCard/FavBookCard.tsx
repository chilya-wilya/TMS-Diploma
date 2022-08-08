import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { FavBookItemProps } from "../../Types";

import {
  FavoritesBooksSelector,
  removeBookFromFav,
} from "../../Redux/reducers/books";

import { ReactComponent as Fav } from "../../Assets/icons/Fav.svg";

import PageTitle from "../PageTitle";
import StarRating from "../StarRating";
import BookPrice from "../BookPrice";

import style from "./favBookCard.module.sass";

const FavBookCard: FC<FavBookItemProps> = ({
  title,
  authors,
  image,
  price,
  isbn13,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favList = useSelector(FavoritesBooksSelector.getFavBooks);
  const currentBook = favList.find((book) => book.isbn13 === isbn13);

  const onDelete = () => {
    dispatch(removeBookFromFav(currentBook?.isbn13));
  };

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
        <div className={style.ratingPrice}>
          <BookPrice price={price} />
          <StarRating initialValue={4} />
        </div>
      </div>
      <div className={style.fav} onClick={onDelete}>
        <Fav />
      </div>
    </div>
  );
};

export default FavBookCard;
