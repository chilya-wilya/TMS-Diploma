import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import style from "./index.module.sass";

const Page404: FC = () => {
  const navigate = useNavigate();
  const navToHome = () => {
    navigate("/books");
  };
  return (
    <div className={style.errorContainer}>
      <p className={style.errorNumber}>404</p>
      <p className={style.errorTitle}>Not found</p>
      <p className={style.errorSubtitle} onClick={navToHome}>
        There's no such page, try again!
      </p>
    </div>
  );
};

export default Page404;
