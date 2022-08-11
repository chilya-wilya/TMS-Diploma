import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { Pages } from "../../Pages/Router/Router";

import Button from "../Button";
import IconButton from "../IconButton";
import Input from "../Input";
import { ReactComponent as Logo } from "../../Assets/icons/logo.svg";

import { useAuth } from "../../hooks";

import {
  getSearchedBooks,
  setSearchString,
  SearchPageSelector,
  setSearchPage,
} from "../../Redux/reducers/books";

import style from "./header.module.sass";

const Header: FC = () => {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const searchPage = useSelector(SearchPageSelector.getSearchPage);

  const navToHome = () => {
    navigate(Pages.Books);
  };
  const navToFav = () => {
    navigate(Pages.Favorites);
  };
  const navToAcc = () => {
    navigate(Pages.UserAccount);
  };
  const navToCart = () => {
    navigate(Pages.Cart);
  };

  const [searchStr, setSearchStr] = useState("");

  const onChange = (val: string) => {
    if (val.length > 0) {
      navigate(Pages.SearchPage);
      setSearchStr(val);
      dispatch(setSearchString(val));
      dispatch(getSearchedBooks([val, searchPage]));
    } else {
      navToHome();
    }
  };

  useEffect(() => {
    if (location.pathname !== Pages.SearchPage) setSearchStr("");
  }, [location.pathname]);

  useEffect(() => {
    dispatch(setSearchPage(1));
  }, [searchStr]);

  useEffect(() => {
    dispatch(getSearchedBooks([searchStr, searchPage]));
  }, [searchStr, searchPage]);

  const isFavPage = location.pathname === Pages.Favorites;
  const isAccPage = location.pathname === Pages.UserAccount;
  const isCartPage = location.pathname === Pages.Cart;

  return (
    <div className="wrapper">
      <div className={style.headerWrapper}>
        <div className={style.logo} onClick={navToHome}>
          <Logo />
        </div>
        <div className={style.search}>
          <Input
            placeholder="Search"
            withIcon
            onChange={onChange}
            type="search"
            autocomplete="off"
            initialValue={searchStr}
          />
        </div>
        {isAuth ? (
          <div className={style.navLinks}>
            <div
              className={classNames(style.link, {
                [style.linkActive]: isFavPage === true,
              })}
            >
              <IconButton onClick={navToFav} type="favpage" />
            </div>
            <div
              className={classNames(style.link, {
                [style.linkActive]: isCartPage === true,
              })}
            >
              <IconButton onClick={navToCart} type="cart" />
            </div>
            <div
              className={classNames(style.link, {
                [style.linkActive]: isAccPage === true,
              })}
            >
              <IconButton onClick={navToAcc} type="account" />
            </div>
          </div>
        ) : (
          <Button
            text={"Sign in"}
            onClick={() => {
              navigate(Pages.Login);
            }}
            type="black"
            width={"200px"}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
