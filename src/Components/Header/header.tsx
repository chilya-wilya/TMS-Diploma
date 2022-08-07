import React, { FC } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

import IconButton from "../IconButton";
import Input from "../Input";
import { ReactComponent as Logo } from "../../Assets/icons/logo.svg";

import style from "./header.module.sass";

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onChange = (val: string) => {
    console.log(val);
  };

  const navToHome = () => {
    navigate("/books");
  };
  const navToFav = () => {
    navigate("/favorites");
  };
  const navToSearch = () => {
    navigate("/search");
  };
  const navToAcc = () => {
    navigate("/account");
  };
  const navToCart = () => {
    navigate("/cart");
  };

  const isFavPage = location.pathname === "/favorites";
  const isAccPage = location.pathname === "/account";
  const isCartPage = location.pathname === "/cart";

  return (
    <div className="wrapper">
      <div className={style.headerWrapper}>
        <div className={style.logo} onClick={navToHome}>
          <Logo />
        </div>
        <div className={style.search}>
          <Input placeholder="Search" type="search" onChange={onChange} />
        </div>
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
      </div>
    </div>
  );
};

export default Header;
