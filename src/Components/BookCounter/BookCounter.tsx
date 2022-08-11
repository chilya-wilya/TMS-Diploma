import { FC } from "react";

import { BookCounterProps } from "../../Types";

import { ReactComponent as Plus } from "../../Assets/icons/Plus.svg";
import { ReactComponent as Minus } from "../../Assets/icons/Minus.svg";

import style from "./index.module.sass";

const BookCounter: FC<BookCounterProps> = ({
  count,
  onClickMinus,
  onClickPlus,
}) => {
  return (
    <div className={style.counterWrapper}>
      <Minus style={{ cursor: "pointer" }} onClick={onClickMinus} />
      <p className={style.count}>{count}</p>
      <Plus style={{ cursor: "pointer" }} onClick={onClickPlus} />
    </div>
  );
};

export default BookCounter;
