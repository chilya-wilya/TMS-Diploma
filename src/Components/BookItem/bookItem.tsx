import React, {FC} from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames"

import PageTitle from "../PageTitle";
import StarRating from "../StarRating";
import BookPrice from "../BookPrice";

import style from './bookItem.module.sass'

type BookItemProps = {
 title: string;
 subtitle: string;
 img: string;
 price: string;
 isbn13?: string;
 url?: string;
}

const BookItem: FC<BookItemProps> = ({title, subtitle, img, price, isbn13}) => {
 const navigate = useNavigate();
 return (
  <div className={classNames(style.item, 'wrapper')}>
   <div className={style.bookCover}>
    <img src={img} alt="book cover" />
   </div>
   <div className={style.bookInfo}>
    <div className={style.title} onClick={() => navigate(`${isbn13}`)}>
     <PageTitle text={title} size='small'/>
    </div>
    <div className={style.subtitle}>
     <p>{subtitle}</p>
    </div>
    <div className={style.ratingPrice}>
     <BookPrice price={price}/>
     <StarRating initialValue={4}/>
    </div>
   </div>
  </div>
 )
}

export default BookItem