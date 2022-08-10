import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import LottieLoader from "react-lottie-loader";

import loader from "../../Assets/lottieAnimation.json";

import { BookItem, Pagination, PageTitle } from "../../Components";

import {
  SearchedBooksSelector,
  SearchStringSelector,
  SearchPageSelector,
  setSearchPage,
  SearchedBooksLoadingSelector,
} from "../../Redux/reducers/books";

import style from "./searchPage.module.sass";

const SearchPage: FC = () => {
  const dispatch = useDispatch();
  const booksLoading = useSelector(
    SearchedBooksLoadingSelector.getNewBooksLoading
  );
  const searchedBooksList = useSelector(SearchedBooksSelector.getSearchedBooks);
  const searchString = useSelector(SearchStringSelector.getSearchString);
  const limit = searchedBooksList.books?.length;
  const totalCount = searchedBooksList.total;
  const currentPage = useSelector(SearchPageSelector.getSearchPage);

  const onPagerClick = (page: number) => {
    dispatch(setSearchPage(page));
  };

  return (
    <div className="wrapper">
      {booksLoading && <LottieLoader animationData={loader} />}
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
      {totalCount && limit && (
        <Pagination
          page={currentPage + 1}
          count={Math.ceil(+totalCount / +limit)}
          onChange={(page) => onPagerClick(page)}
        />
      )}
    </div>
  );
};

export default SearchPage;
