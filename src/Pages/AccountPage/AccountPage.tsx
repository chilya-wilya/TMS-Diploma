import { FC } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import PageTitle from "../../Components/PageTitle";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { ReactComponent as BackButton } from "../../Assets/icons/BackArrow.svg";

import styles from "./account.module.sass";

const AccountPage: FC = () => {
  const navigate = useNavigate();
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
            <Input type="text" onChange={() => {}} placeholder="Your name" />
          </div>
          <div className={styles.inputRow}>
            <p className={styles.value}>Email</p>
            <Input type="text" onChange={() => {}} placeholder="Your email" />
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
              />
            </div>
            <p className={styles.value}>New password</p>
            <Input
              type="password"
              onChange={() => {}}
              placeholder="New password"
            />
          </div>
          <div className={classNames(styles.passRow, styles.passRowSec)}>
            <p className={styles.value}>Confirm new password</p>
            <Input
              type="password"
              onChange={() => {}}
              placeholder="Confirm new password"
            />
          </div>
        </div>
      </div>
      <div className={classNames(styles.buttons)}>
        <Button text="Save changes" onClick={() => {}} type="black" />
        <Button text="Cancel" onClick={() => {}} type="white" />
      </div>
    </div>
  );
};

export default AccountPage;
