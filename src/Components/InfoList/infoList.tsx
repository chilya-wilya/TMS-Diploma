import { FC } from "react";

import { InfoListProps } from "../../Types";

import style from "./infoList.module.sass";

const InfoList: FC<InfoListProps> = ({ authors, publisher, year, pages }) => {
  return (
    <div className={style.listWrapper}>
      <div className={style.row}>
        <p className={style.label}>Authors</p>
        <p className={style.value}>{authors}</p>
      </div>
      <div className={style.row}>
        <p className={style.label}>Publisher</p>
        <p className={style.value}>{`${publisher}, ${year}`}</p>
      </div>
      <div className={style.row}>
        <p className={style.label}>Language</p>
        <p className={style.value}>English</p>
      </div>
      <div className={style.row}>
        <p className={style.label}>Pages</p>
        <p className={style.value}>{pages}</p>
      </div>
      <div className={style.row}>
        <p className={style.label}>Format</p>
        <p className={style.value}>Paper book / ebook (PDF)</p>
      </div>
    </div>
  );
};

export default InfoList;
