import { FC } from "react";
import classNames from "classnames";

import { IconButtonProps } from "../../Types";

import { ReactComponent as AddToFav } from "../../Assets/icons/addToFav.svg";
import { ReactComponent as Fav } from "../../Assets/icons/Fav.svg";
import { ReactComponent as Cancel } from "../../Assets/icons/Cancel.svg";
import { ReactComponent as ArrowToLeft } from "../../Assets/icons/ArrowToLeft.svg";
import { ReactComponent as ArrowToRight } from "../../Assets/icons/ArrowToRight.svg";
import { ReactComponent as Minus } from "../../Assets/icons/Minus.svg";
import { ReactComponent as Plus } from "../../Assets/icons/Plus.svg";
import { ReactComponent as FavPage } from "../../Assets/icons/favPage.svg";
import { ReactComponent as Cart } from "../../Assets/icons/Cart.svg";
import { ReactComponent as Account } from "../../Assets/icons/Account.svg";
import { ReactComponent as BackArrow } from "../../Assets/icons/BackArrow.svg";

import style from "./iconButton.module.sass";

const IconButton: FC<IconButtonProps> = ({ onClick, type, color }) => {
  let buttonIcon;
  if (type === "addFav") {
    buttonIcon = <AddToFav />;
  } else if (type === "fav") {
    buttonIcon = <Fav />;
  } else if (type === "cancel") {
    buttonIcon = <Cancel />;
  } else if (type === "left") {
    buttonIcon = <ArrowToLeft />;
  } else if (type === "right") {
    buttonIcon = <ArrowToRight />;
  } else if (type === "minus") {
    buttonIcon = <Minus />;
  } else if (type === "plus") {
    buttonIcon = <Plus />;
  } else if (type === "cart") {
    buttonIcon = <Cart />;
  } else if (type === "favpage") {
    buttonIcon = <FavPage />;
  } else if (type === "account") {
    buttonIcon = <Account />;
  } else if (type === "back") {
    buttonIcon = <BackArrow />;
  }
  return (
    <button
      className={classNames(style.iconButton, {
        [style.black]: color === "black",
        [style.white]: color === "white",
        [style.withDimension]: type !== "back",
      })}
      onClick={onClick}
    >
      {buttonIcon}
    </button>
  );
};

export default IconButton;
