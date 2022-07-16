import React, { useEffect, FC } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import classNames from 'classnames'

import { ReactComponent as BackButton } from '../../Assets/icons/BackArrow.svg'

import Subscribe from "../../Components/Subscribe"
import BookInfoCard from "../../Components/BookInfoCard";

import { getBookInfo, BookSelector } from "../../Redux/reducers/books";


import style from './bookInfoPage.module.sass'

const BookInfoPage: FC = () => {

 const { isbn13 } = useParams()
 const dispatch = useDispatch()
 const navigate = useNavigate()

 useEffect(() => {
  dispatch(getBookInfo(isbn13))
 }, [isbn13])

 const BookInfo = useSelector(BookSelector.getBookInfo)
 
 return (
  <div>
   <div className={classNames(style.bookWrapper, 'wrapper')}>
    <div className={style.back} onClick={() => navigate(-1)}><BackButton/></div>
    <BookInfoCard 
    title={BookInfo.title} 
    authors={BookInfo.authors} 
    publisher={BookInfo.publisher} 
    pages={BookInfo.pages} 
    year={BookInfo.year} 
    rating={BookInfo.rating} 
    desc={BookInfo.desc} 
    price={BookInfo.price} 
    img={BookInfo.image} 
    pdf={BookInfo.pdf} 
    isbn13={BookInfo.isbn13} 
    url={BookInfo.url}
    />
   </div>
   <div className = 'wrapper'>
    <Subscribe/>
   </div>
  </div>
 )
 
}

export default BookInfoPage