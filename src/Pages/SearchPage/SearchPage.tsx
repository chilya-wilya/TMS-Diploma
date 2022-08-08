import { FC } from "react";
import { useSelector } from "react-redux";

import BookItem from "../../Components/BookItem";
import PageTitle from "../../Components/PageTitle";
import Pagination from "../../Components/Pagination";

import {
  SearchedBooksSelector,
  SearchStringSelector,
} from "../../Redux/reducers/books";

import style from "./searchPage.module.sass";

const SearchPage: FC = () => {
  const searchedBooksList = useSelector(SearchedBooksSelector.getSearchedBooks);
  const searchString = useSelector(SearchStringSelector.getSearchString);
  const limit = searchedBooksList.books?.length;
  const totalCount = searchedBooksList.total;

  console.log(searchedBooksList);

  return (
    <div className="wrapper">
      <PageTitle text={`'${searchString}' Search results`} size="big" />
      <div className={style.searchCards}>
        {searchedBooksList.books && searchedBooksList.books.length > 0 ? (
          searchedBooksList.books.map((book: any, id: any) => {
            return (
              <BookItem
                title={book.title}
                subtitle={book.subtitle}
                isbn13={book.isbn13}
                price={book.price}
                image={book.image}
                url={book.url}
                key={`${id}*${book.isbn13}`}
              />
            );
          })
        ) : (
          <div className={style.noResMessage}>
            There's no book you're looking for.
          </div>
        )}
      </div>
      <Pagination totalCount={totalCount} limit={limit} />
    </div>
  );
};

export default SearchPage;
