import React, {FC} from "react";
import classNames from "classnames";

import PageTitle from "../PageTitle";
import StarRating from "../StarRating";
import BookPrice from "../BookPrice";
import InfoList from "../InfoList";
import Button from "../Button";
import IconButton from "../IconButton";


import style from './bookInfoCard.module.sass'

type BookInfoCardProps = {
 title: string;
 subtitle?: string;
 authors: string;
 publisher: string;
 pages: string;
 year: string;
 rating: string;
 desc: string;
 price: string;
 img: string;
 pdf?: any;
 isbn13?: string;
 url?: string;
}

const BookInfoCard: FC<BookInfoCardProps> = ({title, subtitle, authors, publisher, pages, year, rating, price, img, pdf, isbn13, url}) => {

 const onClick = () => {
  console.log('Add to cart');
 }

 // let link: string | undefined 
 // if (pdf) {
 // link = Object.values(pdf)[0]
 // }
 // console.log(typeof(link));
 

 return (
  <div className = 'wrapper'>
   <div className = 'wrapper'>
    <PageTitle text={title} size="big"/>
   </div>
   <div className={style.infoRow}>
    <div className={style.imageWrapper}>
     <img src={img} alt="book cover" />
    </div>
    <div className={style.fav}>
     <IconButton type='fav' color='black' onClick={onClick}/>
    </div>
    <div className={style.info}>
     <div className={style.priceRating}>
      <BookPrice size="big" price={price}/>
      <StarRating initialValue={+rating}/>
     </div>
     <div className={style.list}>
      <InfoList authors={authors} publisher={publisher} year={year} pages={pages}/>
     </div>
     <div className={style.button}>
      <Button text='add to cart' type="black" onClick={onClick}/>
     </div>
     {pdf && 
     <div className={style.link}>
      <a href='#' target='_blank'>Preview book</a>
     </div>
     }
    </div>
   </div>
  </div>
 )
}

export default BookInfoCard