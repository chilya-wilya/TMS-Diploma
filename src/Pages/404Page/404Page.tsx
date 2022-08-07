import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../Components/Button";
import PageTitle from "../../Components/PageTitle";
import Input from "../../Components/Input";
import IconButton from "../../Components/IconButton";
import BookPrice from "../../Components/BookPrice";
import {
  getReleasedBooks,
  NewBooksSelectors,
} from "../../Redux/reducers/books";
import Header from "../../Components/Header";
import Subscribe from "../../Components/Subscribe";
import Footer from "../../Components/Footer";
import BookItem from "../../Components/BookItem";

const MockComp = () => {
  const newBooksList = useSelector(NewBooksSelectors.getReleasedBooks);

  const onClick = () => {
    console.log("new books list", newBooksList);
  };

  return (
    <div>
      <div style={{ width: "400px", margin: "25px 30px" }}>
        <Button text={"Get new books"} onClick={onClick} type="black" />
      </div>
      <PageTitle text="Headline 1" size="big" />
      <div style={{ width: "400px", margin: "25px 30px" }}>
        <Input type="search" placeholder="Search..." />
      </div>
      <IconButton type="addFav" onClick={onClick} color="black" />
      <IconButton type="fav" onClick={onClick} color="black" />
      <IconButton type="cancel" onClick={onClick} color="white" />
      <IconButton type="minus" onClick={onClick} />
      <IconButton type="plus" onClick={onClick} />
      <IconButton type="left" onClick={onClick} />
      <IconButton type="right" onClick={onClick} />
      <BookPrice price="$20.3" />
      <BookPrice price="$42.8" size="big" />
      <Header />
      <Subscribe />
      <Footer />
      <BookItem
        title="Practical MongoDB"
        subtitle="Architecting, Developing, and Administering MongoDB"
        isbn13="9781484206485"
        price="$32.04"
        img="https://itbook.store/img/books/9781484206485.png"
        url="https://itbook.store/books/9781484206485"
      />
    </div>
  );
};

export default MockComp;
