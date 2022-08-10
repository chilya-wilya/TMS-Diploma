import { FC } from "react";
import classNames from "classnames";

import { PriceProps } from "../../Types";

import style from "./price.module.sass";

const BookPrice: FC<PriceProps> = ({ price, size }) => {
  return (
    <p className={classNames(style.price, { [style.big]: size === "big" })}>
      {`${price}`}
    </p>
  );
};

export default BookPrice;
