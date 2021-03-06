import React, {FC} from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames"

import IconButton from "../IconButton";
import Input from "../Input";
import { ReactComponent as Logo } from '../../Assets/icons/logo.svg'

import style from './header.module.sass'

const Header: FC = () => {

 const onClick = () => {
  console.log('Redirect!');
 }

 const onChange = (val:string) => {
  console.log(val)
 }
 
 return (
  <div className='wrapper'>
   <div className={style.headerWrapper}>
    <div className={style.logo}><Logo/></div>
    <div className={style.search}>
     <Input placeholder='Search' type='search' onChange={onChange}/>
    </div>
    <div className={style.navLinks}>
     <IconButton onClick={onClick} type='favpage'/>
     <IconButton onClick={onClick} type='cart'/>
     <IconButton onClick={onClick} type='account'/>
    </div>
   </div>
  </div>
 )
}

export default Header