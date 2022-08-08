import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import style from "./index.module.sass";

const Page404: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={style.errorContainer}>
      <p className={style.errorNumber}>404</p>
      <p className={style.errorTitle}>Not found</p>
      <p className={style.errorSubtitle} onClick={() => navigate(-1)}>
        There's no such page, try again!
      </p>
    </div>
  );
};

export default Page404;
