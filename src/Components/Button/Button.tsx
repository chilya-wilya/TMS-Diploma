import { FC } from "react";
import classNames from "classnames";

import { ButtonProps } from "../../Types";

import style from "./button.module.sass";

const Button: FC<ButtonProps> = ({ text, onClick, type, disabled, width }) => {
  return (
    <button
      className={classNames(
        style.button,
        { [style.black]: type === "black" },
        { [style.white]: type === "white" },
        { [style.disabled]: disabled }
      )}
      onClick={onClick}
      style={width ? { width } : { width: "100%" }}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
