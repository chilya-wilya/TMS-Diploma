import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../../Components/HomePage";
import NewReleasesPage from "../NewReleasesPage";
import BookInfoPage from "../BookInfoPage";
import FavoritesBooksPage from "../FavoritesBooksPage";

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
          <Route path={Pages.Cart} element={<MockComp />} />
          <Route path={Pages.UserAccount} element={<MockComp />} />
          <Route path={Pages.SearchPage} element={<MockComp />} />
          <Route path={Pages.Login} element={<MockComp />} />
          <Route path={Pages.Reset} element={<MockComp />} />
        </Route>
        <Route path={Pages.NotFoundPage} element={<MockComp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
