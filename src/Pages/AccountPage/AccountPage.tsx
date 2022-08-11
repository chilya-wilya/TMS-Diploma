import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import {
  getAuth,
  updateProfile,
  updatePassword,
  updateEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

import { IconButtonTypes } from "../../Types";

import { Pages } from "../Router/Router";

import { validateEmail } from "../../Utils";

import {
  PageTitle,
  Input,
  Button,
  FormMessage,
  IconButton,
} from "../../Components";

import {
  userSelector,
  removeUser,
  changeName,
  changePassword,
  changeEmail,
} from "../../Redux/reducers/user";

import styles from "./account.module.sass";

const AccountPage: FC = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user?.email;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [newName, setNewName] = useState("");

  const [messageType, setMessageType] = useState("");
  const [isShowMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");

  const { name, email, password } = useSelector(userSelector.getUser);
  const logoutHandler = () => {
    dispatch(removeUser());
    navigate(Pages.Login);
  };
  // @ts-ignore
  const credentials = EmailAuthProvider.credential(userEmail, password); //problems with userEmail typing
  const emailUpdate = () => {
    if (user) {
      reauthenticateWithCredential(user, credentials)
        .then(() => {
          updateEmail(user, newEmail);
        })
        .then(() => {
          dispatch(changeEmail(newEmail));
          console.log("email updated!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const nameUpdate = () => {
    if (user) {
      updateProfile(user, {
        displayName: newName,
      })
        .then(() => {
          dispatch(changeName(newName));
          console.log("name updated!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const passUpdate = () => {
    if (user) {
      reauthenticateWithCredential(user, credentials)
        .then(() => {
          updatePassword(user, newPassword);
        })
        .then(() => {
          dispatch(changePassword(newPassword));
          console.log("pass updated!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const isDisabled = !newName && !newEmail && !newPassword;

  const saveChangesHandler = () => {
    if (newEmail && !validateEmail(newEmail)) {
      setMessageType("error");
      setMessageText("Enter the valid email!");
      setShowMessage(true);
    } else if (newPassword && newPassword.length <= 6) {
      setMessageType("error");
      setMessageText("The password has to be at least six characters long!");
      setShowMessage(true);
    } else if (newPassword && newPassword !== newPasswordConfirm) {
      setMessageType("error");
      setMessageText("Enter the valid password");
      setShowMessage(true);
    } else {
      !!newName && nameUpdate();
      !!newPassword && passUpdate();
      !!newEmail && emailUpdate();
      setMessageType("OK");
      setMessageText("Your personal information has been changed!");
      setShowMessage(true);
    }
  };
  return (
    <div className="wrapper">
      <div className={styles.accountWrapper}>
        <div className={styles.back}>
          <IconButton
            type={IconButtonTypes.BackArrow}
            onClick={() => navigate(-1)}
          />
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
              initialValue={!!newName ? newName : name}
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
              initialValue={!!newEmail ? newEmail : email}
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
        {isShowMessage && (
          <div style={{ marginTop: "30px" }}>
            <FormMessage
              messageType={messageType}
              messageText={messageText}
              navLink={Pages.Login}
            />
          </div>
        )}
      </div>
      <div className={classNames(styles.buttons)}>
        <Button
          text="Save changes"
          onClick={saveChangesHandler}
          type="black"
          disabled={isDisabled}
        />
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
