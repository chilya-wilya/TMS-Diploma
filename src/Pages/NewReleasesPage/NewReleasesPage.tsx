import React, { useEffect, FC } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from 'classnames'

import { getReleasedBooks, NewBooksSelectors } from "../../Redux/reducers/books";
import BookItem from "../../Components/BookItem"
import Subscribe from "../../Components/Subscribe"

import style from './newReleases.module.sass'
import PageTitle from "../../Components/PageTitle";


const NewReleasesPage: FC = () => {

 const newBooksList = useSelector(NewBooksSelectors.getReleasedBooks)
 const dispatch = useDispatch()

 useEffect(() => {
  dispatch(getReleasedBooks())
 }, [])

 return (
  <div>
   <div className = 'wrapper'>
    <PageTitle text="New Releases Books" size="big"/>
   </div>
   <div className={classNames(style.booksWrapper, 'wrapper')}>
    {newBooksList.map((book) => {
     return (
      <BookItem
      title = {book.title}
      subtitle = {book.subtitle}
      isbn13 = {book.isbn13}
      price = {book.price}
      img = {book.image}
      url = {book.url}
      />
     )
    })}
   </div>
   <div className = 'wrapper'>
    <Subscribe/>
   </div>
  </div>
 )
 
}

export default NewReleasesPage