import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
 BrowserRouter,
 Routes,
 Route,
} from 'react-router-dom'
import Button from "../../Components/Button";
import { getPosts, PostsSelectors } from "../../Redux/reducers/posts";

const MockComp = () => {
 const postsList = useSelector(PostsSelectors.getPosts)
 
 console.log('posts list', postsList);

 const dispatch = useDispatch()
 const onClick = () => {
  dispatch(getPosts())
 }

 return <div>
  <Button title={'GET POSTS'} onClick={onClick}/>
 </div>
}

export enum Pages {  //имрортить, чтобы использовать для редиректа на др страницах
 Home = '/',
 Books = 'books',
 SelectedBook = 'books/:uid',
}

const Router = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path={Pages.Home} element={(<MockComp/>)} />
    <Route path={Pages.Books} element={<MockComp/>} />
    <Route path={Pages.SelectedBook} element={<MockComp/>} />
    <Route path='favorites' element={<MockComp/>} />
    <Route path='cart' element={<MockComp/>} />
    <Route path='account' element={<MockComp/>} />
    <Route path='search' element={<MockComp/>} />
    <Route path='login' element={<MockComp/>} />
    <Route path='reset' element={<MockComp/>} />
    <Route path='*' element={<MockComp/>} /> 
   </Routes>
  </BrowserRouter>
 )
}

export default Router