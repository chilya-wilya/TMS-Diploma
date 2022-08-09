import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ReactComponent as BackButton } from "../../Assets/icons/BackArrow.svg";

import PageTitle from "../../Components/PageTitle";
import CartBookCard from "../../Components/CartBookCard";
import CartSumChecker from "../../Components/CartSumChecker";

import { CartBooksSelector } from "../../Redux/reducers/books";

import style from "./cartBooks.module.sass";

const FavoritesBooksPage: FC = () => {
  const navigate = useNavigate();

  const cartList = useSelector(CartBooksSelector.getCartBooks);

  let sum = 0;

  return (
    <div className="wrapper">
      <div className={style.cartWrapper}>
        <div className={style.back} onClick={() => navigate(-1)}>
          <BackButton />
        </div>
        <div className={style.title}>
          <PageTitle text="Your cart" size="big" />
        </div>
        <div className={style.books}>
          {cartList.length > 0 ? (
            cartList.map((book, id) => {
              sum = sum + +book.price.substring(1);
              return (
                <div className={style.cartBook}>
                  <CartBookCard
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
