import {
 BrowserRouter,
 Routes,
 Route,
} from 'react-router-dom'

import MockComp from "../404Page/404Page";

export enum Pages {  //имрортить, чтобы использовать для редиректа на др страницах
 Home = '/',
 Books = 'books',
 SelectedBook = 'books/:id',
 Favorites = 'favorites',
 Cart = 'cart',
 UserAccount = 'account',
 SearchPage = 'search',
 Login = 'login',
 Reset = 'reset',
 NotFoundPage = '*',
}

const Router = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path={Pages.Home} element={<MockComp/>} />
    <Route path={Pages.Books} element={<MockComp/>} />
    <Route path={Pages.SelectedBook} element={<MockComp/>} />
    <Route path={Pages.Favorites} element={<MockComp/>} />
    <Route path={Pages.Cart} element={<MockComp/>} />
    <Route path={Pages.UserAccount} element={<MockComp/>} />
    <Route path={Pages.SearchPage} element={<MockComp/>} />
    <Route path={Pages.Login} element={<MockComp/>} />
    <Route path={Pages.Reset} element={<MockComp/>} />
    <Route path={Pages.NotFoundPage} element={<MockComp/>} /> 
   </Routes>
  </BrowserRouter>
 )
}

export default Router