import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import {
  getReleasedBooks,
  NewBooksSelectors,
} from "../../Redux/reducers/books";
import BookItem from "../../Components/BookItem";
import Subscribe from "../../Components/Subscribe";

import style from "./newReleases.module.sass";
import PageTitle from "../../Components/PageTitle";

const NewReleasesPage: FC = () => {
  const newBooksList = useSelector(NewBooksSelectors.getReleasedBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReleasedBooks());
  }, []);

  return (
    <div className="wrapper">
      <PageTitle text="New Releases Books" size="big" />
      <div className={style.booksWrapper}>
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
      </div>
      <Subscribe />
    </div>
  );
};

export default NewReleasesPage;
