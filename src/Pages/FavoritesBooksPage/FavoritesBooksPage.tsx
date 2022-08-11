import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import { ReactComponent as BackArrow } from "../../Assets/icons/ArrowToLeft.svg";
import { ReactComponent as ForwardArrow } from "../../Assets/icons/ArrowToRight.svg";

import { FavBookCard, BookItem, PageTitle, IconButton } from "../../Components";

import { IconButtonTypes } from "../../Types";

import {
  FavoritesBooksSelector,
  NewBooksSelectors,
} from "../../Redux/reducers/books";

import style from "./favoritesBooks.module.sass";

const FavoritesBooksPage: FC = () => {
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
        <div className={style.back}>
          <IconButton
            type={IconButtonTypes.BackArrow}
            onClick={() => navigate(-1)}
          />
        </div>
        <div className={style.title}>
          <PageTitle text="Favorites" size="big" />
        </div>
        <div className={style.favBooks}>
          {favBooks.length > 0 ? (
            favBooks.map((book, id) => {
              return (
                <div className={style.favCard}>
                  <FavBookCard
                    title={book.title}
                    authors={book.authors}
                    image={book.image}
                    price={book.price}
                    isbn13={book.isbn13}
                    key={`${id}*${book.isbn13}`}
                  />
                </div>
              );
            })
          ) : (
            <div className={style.noFavsMessage}>
              You have no favorites books yet.
            </div>
          )}
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
                image={book.image}
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
