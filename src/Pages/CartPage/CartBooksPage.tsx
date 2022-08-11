import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { IconButtonTypes } from "../../Types";

import {
  CartBookCard,
  CartSumChecker,
  PageTitle,
  IconButton,
} from "../../Components";

import { CartBooksSelector } from "../../Redux/reducers/books";

import style from "./cartBooks.module.sass";

const FavoritesBooksPage: FC = () => {
  const navigate = useNavigate();

  const cartList = useSelector(CartBooksSelector.getCartBooks);
  const [count, setCount] = useState(1);
  const getCount = (count: number) => {
    setCount(count);
  };

  let sum = 0;

  return (
    <div className="wrapper">
      <div className={style.cartWrapper}>
        <div className={style.back}>
          <IconButton
            type={IconButtonTypes.BackArrow}
            onClick={() => navigate(-1)}
          />
        </div>
        <div className={style.title}>
          <PageTitle text="Your cart" size="big" />
        </div>
        <div className={style.books}>
          {cartList.length > 0 ? (
            cartList.map((book, id) => {
              sum = sum + +book.price.substring(1) * count;
              return (
                <div className={style.cartBook}>
                  <CartBookCard
                    title={book.title}
                    authors={book.authors}
                    image={book.image}
                    price={book.price}
                    isbn13={book.isbn13}
                    key={`${id}*${book.isbn13}`}
                    getCount={getCount}
                  />
                </div>
              );
            })
          ) : (
            <div className={style.noBooksMessage}>Your cart is empty.</div>
          )}
        </div>
        <div className={style.sumCheck}>
          <CartSumChecker price={sum} />
        </div>
      </div>
    </div>
  );
};

export default FavoritesBooksPage;
