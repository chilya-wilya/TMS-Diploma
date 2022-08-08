import React, { FC } from "react";

import classNames from "classnames";

import { PagerPropsType } from "../../Types";

import { ReactComponent as ArrowNext } from "../../Assets/icons/ArrowToRight.svg";
import { ReactComponent as ArrowPrev } from "../../Assets/icons/ArrowToLeft.svg";

import style from "./Pager.module.sass";

const Pager: FC<PagerPropsType> = ({
  page,
  count = 1,
  onChange,
  pageNeighbours = 1,
}) => {
  const ELLIPSIS = "...";

  const range = (from: number, to: number, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }
    return range;
  };

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (count > totalBlocks) {
      const startPage: number = Math.max(2, page - pageNeighbours);
      const endPage: number = Math.min(count - 1, page + pageNeighbours);
      let pages: any[] = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = count - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [ELLIPSIS, ...extraPages, ...pages];
          break;
        }
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, ELLIPSIS];
          break;
        }
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [ELLIPSIS, ...pages, ELLIPSIS];
          break;
        }
      }
      return [1, ...pages, count];
    }
    return range(1, count);
  };

  const changeHandler = (value: number) => {
    if (value > count || value < 1) return;
    onChange(value - 1);
  };

  return (
    <div className={style.pager}>
      <p
        className={classNames(style.pagerItem, style.arrow)}
        onClick={() => changeHandler(page - 1)}
      >
        <ArrowPrev />
      </p>
      {fetchPageNumbers().map((el, i) => {
        if (el === ELLIPSIS)
          return (
            <p
              key={el + i}
              className={classNames(style.pagerItem, style.ellipsis)}
            >
              {el}
            </p>
          );
        return (
          <p
            key={el}
            className={classNames(style.pagerItem, page === el && style.active)}
            onClick={() => changeHandler(el)}
          >
            {el}
          </p>
        );
      })}
      <p
        className={classNames(style.pagerItem, style.arrow)}
        onClick={() => changeHandler(page + 1)}
      >
        <ArrowNext />
      </p>
    </div>
  );
};

export default Pager;
