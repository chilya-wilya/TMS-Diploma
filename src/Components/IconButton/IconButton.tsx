import React, {FC} from "react"
import classNames from 'classnames'

import { ReactComponent as AddToFav } from '../../Assets/icons/addToFav.svg'
import { ReactComponent as Cancel } from '../../Assets/icons/Cancel.svg'
import { ReactComponent as ArrowToLeft } from '../../Assets/icons/ArrowToLeft.svg'
import { ReactComponent as ArrowToRight } from '../../Assets/icons/ArrowToRight.svg'
import { ReactComponent as Minus } from '../../Assets/icons/Minus.svg'
import { ReactComponent as Plus } from '../../Assets/icons/Plus.svg'
import { ReactComponent as FavPage } from '../../Assets/icons/favPage.svg'
import { ReactComponent as Cart } from '../../Assets/icons/Cart.svg'
import { ReactComponent as Account } from '../../Assets/icons/Account.svg'


import style from './iconButton.module.sass'

type IconButtonProps = {
  onClick: () => void;
  type: string;
  color?: 'black' | 'white';
}

const IconButton: FC<IconButtonProps> = ({onClick, type, color}) => {
  let buttonIcon 
  if (type === 'fav'){
    buttonIcon = <AddToFav/>
  } else if (type === 'cancel'){
    buttonIcon = <Cancel/>
  } else if (type === 'left'){
    buttonIcon = <ArrowToLeft/>
  } else if (type === 'right'){
    buttonIcon = <ArrowToRight/>
  } else if (type === 'minus'){
    buttonIcon = <Minus/>
  } else if (type === 'plus'){
    buttonIcon = <Plus/>
  } else if (type === 'cart'){
    buttonIcon = <Cart/>
  } else if (type === 'favpage'){
    buttonIcon = <FavPage/>
  } else if (type === 'account'){
    buttonIcon = <Account/>
  } 
  return <button className={classNames(style.iconButton, 
  {[style.black]: color === 'black'}, 
  {[style.white]: color === 'white'},  
  )} 
  onClick = {onClick}>{buttonIcon}</button>
}

export default IconButton