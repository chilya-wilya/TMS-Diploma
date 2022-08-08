import React, { FC, useState } from "react";
import classNames from "classnames";

import { PaginationPropsType } from "../../Types";

import style from "./pagination.module.sass";

const Pagination: FC<PaginationPropsType> = ({
  totalCount,
  limit,
  onClick,
}) => {
  let pagesCount;
  if (totalCount && limit) {
    pagesCount = Math.ceil(+totalCount / limit);
  }
  const [currentPage, setCurrentPage] = useState(1);

  return <div className={style.paginationWrapper}>{pagesCount}</div>;
};

export default Pagination;
