import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { Pages } from "../Router/Router";

import { setUser } from "../../Redux/reducers/user";

import { validateEmail } from "../../Utils";

import { InfoSwitcher, Input, Button, FormMessage } from "../../Components";

import style from "./authPage.module.sass";

const AuthPage: FC = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");
  const [nameSignUp, setNameSignUp] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [passwordConfirmSignUp, setPasswordConfirmSignUp] = useState("");

  const [messageType, setMessageType] = useState("");
  const [isShowMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");

  const [tabSelect, setTabSelect] = useState("signIn");

  const isDisabledSignIn = !emailSignIn || !passwordSignIn;
  // prettier-ignore
  const isDisabledSignUp = !nameSignUp || !emailSignUp || !passwordSignUp || !passwordConfirmSignUp;

  const signInHandler = () => {
    if (!validateEmail(emailSignIn)) {
      setMessageType("error");
      setMessageText("Enter the correct email!");
      setShowMessage(true);
    } else {
      signInWithEmailAndPassword(auth, emailSignIn, passwordSignIn)
        .then(({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              name: user.displayName,
              password: passwordSignIn,
            })
          );
          navigate(Pages.Books);
        })
        .catch(() => {
          setMessageType("error");
          setMessageText("User not found!");
          setShowMessage(true);
          // console.error;
        });
    }
  };
  const signUpHandler = () => {
    if (!validateEmail(emailSignUp)) {
      setMessageType("error");
      setMessageText("Enter the correct email!");
      setShowMessage(true);
    } else if (passwordSignUp.length <= 6) {
      setMessageType("error");
      setMessageText("The password has to be at least six characters long!");
      setShowMessage(true);
    } else if (passwordSignUp !== passwordConfirmSignUp) {
      setMessageType("error");
      setMessageText("Confirm your password!");
      setShowMessage(true);
    } else {
      createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp)
        .then((result) =>
          updateProfile(result.user, {
            displayName: nameSignUp,
          })
        )
        .catch(console.error);
      // console.log("Sign Up!");
      // console.log(user);
      dispatch(setUser({ email: emailSignUp, name: nameSignUp }));
      navigate(Pages.Books);
    }
  };

  useEffect(() => {
    setMessageType("");
    setMessageText("");
    setShowMessage(false);
  }, [tabSelect]);

  return (
    <div className="wrapper" style={{ height: "680px" }}>
      <div className={style.authWrapper}>
        <div className={style.tabsWrapper}>
          <InfoSwitcher
            options={[
              { text: "Sign in", value: "signIn" },
              { text: "Sign up", value: "signUp" },
            ]}
            changeHandler={(value: string) => setTabSelect(value)}
            type={"auth"}
          />
        </div>
        <div className={style.compWrapper}>
          {tabSelect === "signIn" ? (
            <div className={style.signInWrapper}>
              <p className={style.value}>Email</p>
              <div className={style.input}>
                <Input
                  type="text"
                  onChange={(val: string) => {
                    setEmailSignIn(val);
                  }}
                  placeholder="Your email"
                />
              </div>
              <p className={style.value}>Password</p>
              <div className={style.input}>
                <Input
                  type="password"
                  onChange={(val: string) => {
                    setPasswordSignIn(val);
                  }}
                  placeholder="Your password"
                />
              </div>
              <div className={style.link} onClick={() => navigate(Pages.Reset)}>
                Forgot password?
              </div>
              {isShowMessage && (
                <div style={{ marginBottom: "15px" }}>
                  <FormMessage
                    messageType={messageType}
                    messageText={messageText}
                    navLink={Pages.Login}
                  />
                </div>
              )}
              <Button
                text={"Sign in"}
                type={"black"}
                onClick={signInHandler}
                disabled={isDisabledSignIn}
              />
            </div>
          ) : (
            <div className={classNames(style.signUpWrapper)}>
              <div className={classNames(style.dividerRight)}></div>
              <div className={classNames(style.contentWrapper)}>
                <p className={style.value}>Name</p>
                <div className={style.input}>
                  <Input
                    type="text"
                    onChange={(val: string) => {
                      setNameSignUp(val);
                    }}
                    placeholder="Your name"
                  />
                </div>
                <p className={style.value}>Email</p>
                <div className={style.input}>
                  {" "}
                  <Input
                    type="text"
                    onChange={(val: string) => {
                      setEmailSignUp(val);
                    }}
                    placeholder="Your email"
                  />
                </div>
                <p className={style.value}>Password</p>
                <div className={style.input}>
                  <Input
                    type="password"
                    onChange={(val: string) => {
                      setPasswordSignUp(val);
                    }}
                    placeholder="Your password"
                  />
                </div>
                <p className={style.value}>Confirm password</p>
                <div className={style.input}>
                  <Input
                    type="password"
                    onChange={(val: string) => {
                      setPasswordConfirmSignUp(val);
                    }}
                    placeholder="Confirm your password"
                  />
                </div>
                {isShowMessage && (
                  <div style={{ marginTop: "15px" }}>
                    <FormMessage
                      messageType={messageType}
                      messageText={messageText}
                      navLink={Pages.Login}
                    />
                  </div>
                )}
                <div className={style.btn}>
                  <Button
                    text={"Sign up"}
                    type={"black"}
                    onClick={signUpHandler}
                    disabled={isDisabledSignUp}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
