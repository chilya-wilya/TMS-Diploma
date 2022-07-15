import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../Components/Button";
import PageTitle from "../../Components/PageTitle";
import Input from "../../Components/Input";
import IconButton from "../../Components/IconButton";
import BookPrice from "../../Components/BookPrice";
import { getPosts, PostsSelectors } from "../../Redux/reducers/posts";
import Header from "../../Components/Header";
import Subscribe from "../../Components/Subscribe";
import Footer from "../../Components/Footer";

const MockComp = () => {
 const postsList = useSelector(PostsSelectors.getPosts)
 
 console.log('posts list', postsList);

 const dispatch = useDispatch()
 const onClick = () => {
  dispatch(getPosts())
 }

 return <div>
  <div style={{'width': '400px', 'margin': '25px 30px'}}><Button text={'GET POSTS'} onClick={onClick} type='black'/></div>
  <PageTitle text="Headline 1" size='big'/>
  <div style={{'width': '400px', 'margin': '25px 30px'}}><Input type='search' placeholder='Search...'/></div>
  <IconButton type='fav' onClick={onClick} color='black'/>
  <IconButton type='cancel' onClick={onClick} color='white'/>
  <IconButton type='minus' onClick={onClick}/>
  <IconButton type='plus' onClick={onClick}/>
  <IconButton type='left' onClick={onClick}/>
  <IconButton type='right' onClick={onClick}/>
  <BookPrice price="20.3"/>
  <BookPrice price="42.8" size="big"/>
  <Header/>
  <Subscribe/>
  <Footer/>
 </div>
}

export default MockComp