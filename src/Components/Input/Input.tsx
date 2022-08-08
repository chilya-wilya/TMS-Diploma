import React, { FC } from "react";
import classNames from "classnames";

import style from "./input.module.sass";

type InputProps = {
  onChange?: () => void;
  placeholder?: string;
  type?: "search" | "common";
};

const Input: FC<any> = ({ onChange, type, placeholder }) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value); //ошибка при типизировании пропсов
  };
  return (
    <input
      type={type}
      className={classNames(
        style.input,
        { [style.searchInput]: type === "search" },
        { [style.commonInput]: type === "common" }
      )}
      onChange={onInputChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
