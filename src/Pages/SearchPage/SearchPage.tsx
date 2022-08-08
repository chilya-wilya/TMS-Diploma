import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import BookItem from "../../Components/BookItem";

import { SearchedBooksSelector } from "../../Redux/reducers/books";

import style from "./searchPage.module.sass";

const SearchPage: FC = () => {
  const searchedBooksList = useSelector(SearchedBooksSelector.getSearchedBooks);

  return (
    <div className="wrapper">
      {searchedBooksList.length > 0 ? (
        searchedBooksList.map((book, id) => {
          return (
            <div className={style.favCard}>
              <BookItem
                title={book.title}
                subtitle={book.subtitle}
                isbn13={book.isbn13}
                price={book.price}
                img={book.image}
                url={book.url}
                key={`${id}${book.isbn13}`}
              />
            </div>
          );
        })
      ) : (
        <div className={style.noResMessage}>
          There's no book you're looking for.
        </div>
      )}
    </div>
  );
};

export default SearchPage;
