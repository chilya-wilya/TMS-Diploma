import React, { FC } from "react";
import classNames from "classnames";

import style from "./button.module.sass";

type ButtonProps = {
  text: string;
  onClick: () => void;
  type: string;
  icon?: FC;
  disabled?: true | false;
};

const Button: FC<ButtonProps> = ({ text, onClick, type, disabled }) => {
  return (
    <button
      className={classNames(
        style.button,
        { [style.black]: type === "black" },
        { [style.white]: type === "white" },
        { [style.disabled]: disabled }
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
