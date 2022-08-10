import { FC } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { FormMessageProps } from "../../Types";

import style from "./formMessage.module.sass";

const FormMessage: FC<FormMessageProps> = ({
  messageText,
  messageType,
  navLink,
  linkText,
  width,
}) => {
  const navigate = useNavigate();
  return (
    <div
      style={width ?? { width: "100%" }}
      className={classNames(style.msg, {
        [style.errorMsg]: messageType === "error",
        [style.okMsg]: messageType === "OK",
      })}
    >
      {messageText}
      {messageType === "OK" && navLink && (
        <div className={style.link} onClick={() => navigate(navLink)}>
          {linkText}
        </div>
      )}
    </div>
  );
};

export default FormMessage;
