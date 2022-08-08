import React, { FC, useState } from "react";

import Input from "../Input";
import Button from "../Button";
import PageTitle from "../PageTitle";
import ModalWindow from "../ModalWindow";

import style from "./subscribe.module.sass";

const Subscribe: FC = () => {
  const [email, setEmail] = useState("");
  const [isShowModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  // prettier-ignore
  const emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const onChange = (val: string) => {
    setEmail(val);
  };

  const modalClose = () => setShowModal(false);

  const onClick = () => {
    if (email.toLowerCase().match(emailReg)) {
      setModalMessage("You have subscribed on our latest news!");
      setShowModal(true);
    } else {
      setModalMessage("Enter the correct email!");
      setShowModal(true);
    }
  };

  return (
    <div className={style.subWrapper}>
      <div className={style.title}>
        <PageTitle size="medium" text="Subscribe to Newsletter" />
      </div>
      <p>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </p>
      <div className={style.form}>
        <div className={style.input}>
          <Input placeholder="Your email" type="common" onChange={onChange} />
        </div>
        <div className={style.button}>
          <Button text={"Subscribe"} type="black" onClick={onClick} />
        </div>
      </div>
      <ModalWindow
        isShown={isShowModal}
        modalText={modalMessage}
        modalClose={modalClose}
      />
    </div>
  );
};

export default Subscribe;
