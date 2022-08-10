import React, { FC } from "react";
import classNames from "classnames";

import { InputProps } from "../../Types";

import style from "./input.module.sass";

const Input: FC<InputProps> = ({
  onChange,
  withIcon,
  placeholder,
  type,
  initialValue,
}) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <input
      className={classNames(style.input, {
        [style.searchInput]: withIcon,
      })}
      onChange={onInputChange}
      placeholder={placeholder}
      type={type}
      value={initialValue}
    />
  );
};

export default Input;
