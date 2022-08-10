import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { Pages } from "../Router/Router";

import { validateEmail } from "../../Utils";

import PageTitle from "../../Components/PageTitle";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { ReactComponent as BackButton } from "../../Assets/icons/BackArrow.svg";

import {
  userSelector,
  removeUser,
  changeName,
  changePassword,
  changeEmail,
} from "../../Redux/reducers/user";

import styles from "./account.module.sass";

const AccountPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [newName, setNewName] = useState("");
  const { name, email, password } = useSelector(userSelector.getUser);
  const logoutHandler = () => {
    dispatch(removeUser());
    navigate(Pages.Login);
  };
  const saveChangesHandler = () => {
    if (newPassword && newPassword !== newPasswordConfirm) {
      console.log("passwords error");
    } else if (newEmail && !validateEmail(newEmail)) {
      console.log("email error");
    } else {
      newName && dispatch(changeName(newName));
      newPassword && dispatch(changePassword(newPassword));
      newEmail && dispatch(changeEmail(newEmail));
    }
  };
  return (
    <div className="wrapper">
      <div className={styles.accountWrapper}>
        <div className={styles.back}>
          <BackButton onClick={() => navigate(-1)} />
        </div>
        <PageTitle text="Account" size="big" />
        <div className={styles.subtitle}>
          <PageTitle text="Profile" size="small" />
        </div>
        <div className={styles.profile}>
          <div className={styles.inputRow}>
            <p className={styles.value}>Name</p>
            <Input
              type="text"
              onChange={(val: string) => {
                setNewName(val);
              }}
              placeholder="Your name"
              initialValue={name}
            />
          </div>
          <div className={styles.inputRow}>
            <p className={styles.value}>Email</p>
            <Input
              type="email"
              onChange={(val: string) => {
                setNewEmail(val);
              }}
              placeholder="Your email"
              initialValue={email}
            />
          </div>
        </div>
        <div className={styles.subtitle}>
          <PageTitle text="Password" size="small" />
        </div>
        <div className={styles.password}>
          <div className={styles.passRow}>
            <p className={styles.value}>Password</p>
            <div className={styles.passInput}>
              <Input
                type="password"
                onChange={() => {}}
                placeholder="Your password"
                initialValue={password}
              />
            </div>
            <p className={styles.value}>New password</p>
            <Input
              type="password"
              onChange={(val: string) => {
                setNewPassword(val);
              }}
              placeholder="New password"
            />
          </div>
          <div className={classNames(styles.passRow, styles.passRowSec)}>
            <p className={styles.value}>Confirm new password</p>
            <Input
              type="password"
              onChange={(val: string) => {
                setNewPasswordConfirm(val);
              }}
              placeholder="Confirm new password"
            />
          </div>
        </div>
      </div>
      <div className={classNames(styles.buttons)}>
        <Button text="Save changes" onClick={saveChangesHandler} type="black" />
        <Button
          text="Cancel"
          onClick={() => {
            navigate(Pages.Books);
          }}
          type="white"
        />
        <Button text="Logout" onClick={logoutHandler} type="white" />
      </div>
    </div>
  );
};

export default AccountPage;
