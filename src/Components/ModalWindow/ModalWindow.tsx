import { FC } from "react";
import classNames from "classnames";

import { ModalProps, IconButtonTypes } from "../../Types";

import IconButton from "../IconButton";

import style from "./modalWindow.module.sass";

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
          <IconButton
            type={IconButtonTypes.Cancel}
            color="white"
            onClick={modalClose}
          />
        </span>
      </div>
    </div>
  );
};

export default ModalWindow;
