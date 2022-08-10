import { FC, useEffect, useState } from "react";
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

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import InfoSwitcher from "../../Components/InfoSwitcher";

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
  const [tabSelect, setTabSelect] = useState("signIn");

  const signInHandler = () => {
    if (validateEmail(emailSignIn) && passwordSignIn) {
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
        .catch(console.error);
      // console.log("Sign in!");
      // console.log(user);
    }
  };
  const signUpHandler = () => {
    if (
      emailSignUp &&
      validateEmail(emailSignUp) &&
      passwordSignUp &&
      passwordSignUp === passwordConfirmSignUp &&
      nameSignUp
    ) {
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
    } else {
      console.log("Enter the correct data!");
    }
  };

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
              <Button text={"Sign in"} type={"black"} onClick={signInHandler} />
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
                <div className={style.btn}>
                  <Button
                    text={"Sign up"}
                    type={"black"}
                    onClick={signUpHandler}
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
