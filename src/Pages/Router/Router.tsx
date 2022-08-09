import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../../Components/HomePage";
import NewReleasesPage from "../NewReleasesPage";
import BookInfoPage from "../BookInfoPage";
import FavoritesBooksPage from "../FavoritesBooksPage";
import CartPage from "../CartPage";
import SearchPage from "../SearchPage";
import AccountPage from "../AccountPage";
import AuthPage from "../AuthPage";
import ResetPage from "../ResetPage";
import Page404 from "../404Page/404Page";

import MockComp from "../404Page/404Page";

export enum Pages { //импортить, чтобы использовать для редиректа на др страницах
  Home = "/",
  Books = "/books",
  SelectedBook = "/books/:isbn13",
  Favorites = "/favorites",
  Cart = "/cart",
  UserAccount = "/account",
  SearchPage = "/search",
  Login = "/login",
  Reset = "/reset",
  NotFoundPage = "*",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Pages.Home} element={<HomePage />}>
          <Route path={Pages.Books} element={<NewReleasesPage />} />
          <Route path={Pages.SelectedBook} element={<BookInfoPage />} />
          <Route path={Pages.Favorites} element={<FavoritesBooksPage />} />
          <Route path={Pages.Cart} element={<CartPage />} />
          <Route path={Pages.UserAccount} element={<AccountPage />} />
          <Route path={Pages.SearchPage} element={<SearchPage />} />
          <Route path={Pages.Login} element={<AuthPage />} />
          <Route path={Pages.Reset} element={<ResetPage />} />
        </Route>
        <Route path={Pages.NotFoundPage} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
