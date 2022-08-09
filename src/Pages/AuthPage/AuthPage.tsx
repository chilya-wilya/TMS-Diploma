import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import InfoSwitcher from "../../Components/InfoSwitcher";

import style from "./authPage.module.sass";

const AuthPage: FC = () => {
  const navigate = useNavigate();
  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");
  const [nameSignUp, setNameSignUp] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [passwordConfirmSignUp, setPasswordConfirmSignUp] = useState("");
  const [tabSelect, setTabSelect] = useState("signIn");
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
                  onChange={() => {}}
                  placeholder="Your email"
                />
              </div>
              <p className={style.value}>Password</p>
              <div className={style.input}>
                <Input
                  type="password"
                  onChange={() => {}}
                  placeholder="Your password"
                />
              </div>
              <div className={style.link} onClick={() => navigate("/reset")}>
                Forgot password?
              </div>
              <Button text={"Sign in"} type={"black"} onClick={() => {}} />
            </div>
          ) : (
            <div className={classNames(style.signUpWrapper)}>
              <div className={classNames(style.dividerRight)}></div>
              <div className={classNames(style.contentWrapper)}>
                <p className={style.value}>Name</p>
                <div className={style.input}>
                  <Input
                    type="text"
                    onChange={() => {}}
                    placeholder="Your name"
                  />
                </div>

                <p className={style.value}>Email</p>
                <div className={style.input}>
                  {" "}
                  <Input
                    type="text"
                    onChange={() => {}}
                    placeholder="Your email"
                  />
                </div>

                <p className={style.value}>Password</p>
                <div className={style.input}>
                  <Input
                    type="password"
                    onChange={() => {}}
                    placeholder="Your password"
                  />
                </div>

                <p className={style.value}>Confirm password</p>
                <div className={style.input}>
                  <Input
                    type="password"
                    onChange={() => {}}
                    placeholder="Confirm your password"
                  />
                </div>
                <div className={style.btn}>
                  <Button text={"Sign up"} type={"black"} onClick={() => {}} />
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
