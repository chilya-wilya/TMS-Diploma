import React, { FC } from "react";
import classNames from "classnames";

import style from "./input.module.sass";

type InputProps = {
  onChange?: () => void;
  placeholder?: string;
  withIcon?: boolean;
  type?: string;
};

const Input: FC<any> = ({
  onChange,
  withIcon,
  placeholder,
  type,
  initialValue,
}) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value); //ошибка при типизировании пропсов
  };
  return (
    <input
      style={style}
      className={classNames(style.input, {
        [style.searchInput]: withIcon === true,
      })}
      onChange={onInputChange}
      placeholder={placeholder}
      type={type}
      value={initialValue}
    />
  );
};

export default Input;
