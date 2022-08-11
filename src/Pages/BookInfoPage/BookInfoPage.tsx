import { useEffect, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import LottieLoader from "react-lottie-loader";
import Slider from "react-slick";

import { scrollToTop } from "../../Utils";
import { useAuth } from "../../hooks";
import { IconButtonTypes } from "../../Types";

import { ReactComponent as BackArrow } from "../../Assets/icons/ArrowToLeft.svg";
import { ReactComponent as ForwardArrow } from "../../Assets/icons/ArrowToRight.svg";

import loader from "../../Assets/lottieAnimation.json";

import {
  InfoSwitcher,
  Subscribe,
  BookInfoCard,
  PageTitle,
  ModalWindow,
  IconButton,
} from "../../Components";

import {
  getBookInfo,
  BookSelector,
  setBookToFav,
  removeBookFromFav,
  FavoritesBooksSelector,
  BookLoadingSelector,
} from "../../Redux/reducers/books";

import {
  getReleasedBooks,
  NewBooksSelectors,
} from "../../Redux/reducers/books";
import BookItem from "../../Components/BookItem";

import style from "./bookInfoPage.module.sass";

const BookInfoPage: FC = () => {
  const { isAuth } = useAuth();
  const bookLoading = useSelector(BookLoadingSelector.getNewBooksLoading);
  const [tabSelect, setTabSelect] = useState("description");

  const [isShowModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const modalClose = () => setShowModal(false);

  const { isbn13 } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBookInfo(isbn13));
    scrollToTop();
  }, [isbn13]);

  useEffect(() => {
    dispatch(getReleasedBooks());
  }, []);

  const newBooksList = useSelector(NewBooksSelectors.getReleasedBooks);
  const favBooks = useSelector(FavoritesBooksSelector.getFavBooks);
  const BookInfo = useSelector(BookSelector.getBookInfo);

  const isBookFav = !!favBooks.find((book) => book.isbn13 === BookInfo.isbn13);

  const addToFavHandler = () => {
    if (isAuth) {
      isBookFav
        ? dispatch(removeBookFromFav(BookInfo.isbn13))
        : dispatch(setBookToFav(BookInfo));
    } else {
      setModalMessage("You should sign in first!");
      setShowModal(true);
    }
  };

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
      {bookLoading ? (
        <LottieLoader animationData={loader} />
      ) : (
        <>
          <div className={style.bookWrapper}>
            <div className={style.back}>
              <IconButton
                type={IconButtonTypes.BackArrow}
                onClick={() => navigate(-1)}
              />
            </div>
            <BookInfoCard
              title={BookInfo.title}
              authors={BookInfo.authors}
              publisher={BookInfo.publisher}
              pages={BookInfo.pages}
              year={BookInfo.year}
              rating={BookInfo.rating}
              desc={BookInfo.desc}
              price={BookInfo.price}
              image={BookInfo.image}
              pdf={BookInfo.pdf}
              isbn13={BookInfo.isbn13}
              url={BookInfo.url}
              addToFav={addToFavHandler}
              favIconType={
                isBookFav ? IconButtonTypes.Fav : IconButtonTypes.AddToFav
              }
            />
          </div>
          <div className={style.switcher}>
            <InfoSwitcher
              options={[
                { text: "Description", value: "description" },
                { text: "Authors", value: "authors" },
                { text: "Reviews", value: "reviews" },
              ]}
              changeHandler={(value: string) => setTabSelect(value)}
              type="info"
            />
          </div>
          <div className={style.infoText}>
            {tabSelect === "description" ? (
              <p>{BookInfo.desc}</p>
            ) : tabSelect === "authors" ? (
              <p>{BookInfo.authors}</p>
            ) : (
              <p>There are no reviews yet. You can write the first one!</p>
            )}
          </div>
          <Subscribe />
          <div className={style.similarBooks}>
            <div className={style.similarBooksTitle}>
              <PageTitle text="Similar Books" size="medium" />
            </div>
            <Slider {...settings}>
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
            </Slider>
          </div>
        </>
      )}
      <ModalWindow
        isShown={isShowModal}
        modalText={modalMessage}
        modalClose={modalClose}
      />
    </div>
  );
};

export default BookInfoPage;
