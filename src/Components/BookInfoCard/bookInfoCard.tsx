import React, { FC } from "react";

import { BookInfoCardProps } from "../../Types";

import PageTitle from "../PageTitle";
import StarRating from "../StarRating";
import BookPrice from "../BookPrice";
import InfoList from "../InfoList";
import Button from "../Button";
import IconButton from "../IconButton";

import style from "./bookInfoCard.module.sass";

const BookInfoCard: FC<BookInfoCardProps> = ({
  title,
  subtitle,
  authors,
  publisher,
  pages,
  year,
  rating,
  price,
  image,
  pdf,
  isbn13,
  url,
  addToFav,
  favIconType,
}) => {
  const onClick = () => {
    console.log("Add to cart");
  };

  let link: any;
  if (pdf) {
    link = Object.values(pdf)[0];
  }

  return (
    <div className="wrapper">
      <PageTitle text={title} size="big" />
      <div className={style.infoRow}>
        <div className={style.imageWrapper}>
          <img src={image} alt="book cover" />
        </div>
        <div className={style.fav}>
          <IconButton
            type={favIconType}
            color="black"
            onClick={() => addToFav()}
          />
        </div>
        <div className={style.info}>
          <div className={style.priceRating}>
            <BookPrice size="big" price={price} />
            <StarRating initialValue={+rating} />
          </div>
          <div className={style.list}>
            <InfoList
              authors={authors}
              publisher={publisher}
              year={year}
              pages={pages}
            />
          </div>
          <div className={style.button}>
            <Button text="add to cart" type="black" onClick={onClick} />
          </div>
          {pdf && (
            <div className={style.link}>
              <a href={link} target="_blank">
                Preview book
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookInfoCard;
