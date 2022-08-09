import { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import LottieLoader from "react-lottie-loader";

import { scrollToTop } from "../../Utils";

import {
  getReleasedBooks,
  NewBooksSelectors,
  NewBooksLoadingSelectors,
} from "../../Redux/reducers/books";
import BookItem from "../../Components/BookItem";
import Subscribe from "../../Components/Subscribe";
import loader from "../../Assets/lottieAnimation.json";

import style from "./newReleases.module.sass";
import PageTitle from "../../Components/PageTitle";

const NewReleasesPage: FC = () => {
  const newBooksList = useSelector(NewBooksSelectors.getReleasedBooks);
  const booksLoading = useSelector(NewBooksLoadingSelectors.getNewBooksLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReleasedBooks());
    scrollToTop();
  }, []);

  return (
    <div className="wrapper">
      {booksLoading ? (
        <LottieLoader animationData={loader} className={style.loader} />
      ) : (
        <>
          <PageTitle text="New Releases Books" size="big" />
          <div className={style.booksWrapper}>
            {newBooksList.map((book, id) => {
              return (
                <BookItem
                  title={book.title}
                  subtitle={book.subtitle}
                  isbn13={book.isbn13}
                  price={book.price}
                  image={book.image}
                  url={book.url}
                  key={`${id}${book.isbn13}`}
                />
              );
            })}
          </div>
          <Subscribe />
        </>
      )}
    </div>
  );
};

export default NewReleasesPage;
