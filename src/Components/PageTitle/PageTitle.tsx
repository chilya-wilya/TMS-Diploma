import { FC } from "react";
import classnames from "classnames";

import { PageTitleProps } from "../../Types";

import style from "./pageTitle.module.sass";

const PageTitle: FC<PageTitleProps> = ({ text, size }) => {
  return (
    <h1
      className={classnames(
        { [style.big]: size === "big" },
        { [style.medium]: size === "medium" },
        { [style.small]: size === "small" }
      )}
    >
      {text}
    </h1>
  );
};

export default PageTitle;
