import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import {
  getAuth,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

import { changePassword } from "../../Redux/reducers/user";

import { Pages } from "../Router/Router";

import { Input, Button, PageTitle, FormMessage } from "../../Components";

import style from "./resetPage.module.sass";

const ResetPage: FC = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user?.email;

  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isShowMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");

  // @ts-ignore
  const credentials = EmailAuthProvider.credential(userEmail, password);

  const passReset = () => {
    if (user) {
      reauthenticateWithCredential(user, credentials)
        .then(() => {
          updatePassword(user, password);
        })
        .then(() => {
          dispatch(changePassword(password));
          console.log("pass updated!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const isDisabled = !password || !passwordConfirm;

  const onClick = () => {
    if (password && password.length >= 6 && password === passwordConfirm) {
      setMessageType("OK");
      setMessageText("Your password has been changed!");
      setShowMessage(true);
      passReset();
    } else if (password.length < 6) {
      setMessageType("error");
      setMessageText("The password has to be at least six characters long");
      setShowMessage(true);
    } else {
      setMessageType("error");
      setMessageText("Confirm your password!");
      setShowMessage(true);
    }
  };

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
          <FormMessage
            messageType={messageType}
            messageText={messageText}
            navLink={Pages.Login}
            linkText={"Back to login"}
          />
        )}
        <div className={style.btn}>
          <Button
            text={"Set password"}
            type={"black"}
            onClick={onClick}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPage;
