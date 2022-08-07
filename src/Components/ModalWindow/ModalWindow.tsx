import React, { FC } from "react";
import classNames from "classnames";

import IconButton from "../IconButton";

import style from "./modalWindow.module.sass";

type ModalProps = {
  modalText: string;
  isShown: boolean;
  modalClose: () => void;
};

const ModalWindow: FC<ModalProps> = ({ modalText, isShown, modalClose }) => {
  return (
    <div
      className={classNames(style.modal, {
        [style.modalShown]: isShown === true,
      })}
    >
      <div className={style.modalContent}>
        <p>{modalText}</p>
        <span className={style.close}>
          <IconButton type="cancel" color="white" onClick={modalClose} />
        </span>
      </div>
    </div>
  );
};

export default ModalWindow;
