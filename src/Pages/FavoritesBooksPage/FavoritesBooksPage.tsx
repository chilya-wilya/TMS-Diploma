import React, { useEffect, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames";
import Slider from "react-slick";

import { ReactComponent as BackButton } from "../../Assets/icons/BackArrow.svg";
import { ReactComponent as BackArrow } from "../../Assets/icons/ArrowToLeft.svg";
import { ReactComponent as ForwardArrow } from "../../Assets/icons/ArrowToRight.svg";

import PageTitle from "../../Components/PageTitle";
import BookItem from "../../Components/BookItem";
import FavBookCard from "../../Components/FavBookCard";

import {
  FavoritesBooksSelector,
  getReleasedBooks,
  NewBooksSelectors,
} from "../../Redux/reducers/books";

import style from "./favoritesBooks.module.sass";

const FavoritesBooksPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newBooksList = useSelector(NewBooksSelectors.getReleasedBooks);
  const favBooks = useSelector(FavoritesBooksSelector.getFavBooks);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <ForwardArrow />,
    prevArrow: <BackArrow />,
  };

  return (
    <div className="wrapper">
      <div className={style.favWrapper}>
        <div className={style.back} onClick={() => navigate(-1)}>
          <BackButton />
        </div>
        <div className={style.title}>
          <PageTitle text="Favorites" size="big" />
        </div>
        <div className={style.favBooks}>
          {favBooks.map((book, id) => {
            return (
              <div className={style.favCard}>
                <FavBookCard
                  title={book.title}
                  authors={book.authors}
                  img={book.image}
                  price={book.price}
                  key={`${id}*${book.isbn13}`}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.popularBooks}>
        <div className={style.popularBooksTitle}>
          <PageTitle text="Popular Books" size="medium" />
        </div>
        <Slider {...settings}>
          {newBooksList.map((book, id) => {
            return (
              <BookItem
                title={book.title}
                subtitle={book.subtitle}
                isbn13={book.isbn13}
                price={book.price}
                img={book.image}
                url={book.url}
                key={`${id}${book.isbn13}`}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default FavoritesBooksPage;
