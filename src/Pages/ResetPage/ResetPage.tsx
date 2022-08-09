import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import PageTitle from "../../Components/PageTitle";

import style from "./resetPage.module.sass";

const ResetPage: FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isShowMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");

  const onClick = () => {
    if (password && passwordConfirm && password === passwordConfirm) {
      setMessageType("OK");
      setMessageText("Your password has been changed!");
      setShowMessage(true);
    } else {
      setMessageType("error");
      setMessageText("Confirm your password!");
      setShowMessage(true);
    }
  };
  console.log(messageType);
  return (
    <div className="wrapper" style={{ height: "680px" }}>
      <div className={style.resetWrapper}>
        <div className={style.title}>
          <PageTitle text="New password" size="small" />
        </div>
        <p className={style.value}>Password</p>
        <div className={style.input}>
          <Input
            type="password"
            onChange={(val: string) => {
              setPassword(val);
            }}
            placeholder="Your password"
          />
        </div>
        <p className={style.value}>Confirm password</p>
        <div className={style.input}>
          <Input
            type="password"
            onChange={(val: string) => {
              setPasswordConfirm(val);
            }}
            placeholder="Confirm your password!"
          />
        </div>
        {isShowMessage && (
          <div
            className={classNames(style.msg, {
              [style.errorMsg]: messageType === "error",
              [style.okMsg]: messageType === "OK",
            })}
          >
            {messageText}
            {messageType === "OK" && (
              <div className={style.link} onClick={() => navigate("/login")}>
                Back to login
              </div>
            )}
          </div>
        )}
        <div className={style.btn}>
          <Button text={"Set password"} type={"black"} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default ResetPage;
