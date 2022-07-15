import React, {FC} from "react"
import classNames from "classnames"

import Input from "../Input"
import Button from "../Button"
import PageTitle from "../PageTitle"

import style from './subscribe.module.sass'

const Subscribe: FC = () => {

 const onClick = () => {
  console.log('Subscribe!');
 }

 const onChange = (val:string) => {
  console.log(val)
 }

 return (
  <div className='wrapper'>
   <div className={style.subWrapper}>
    <div className={style.title}><PageTitle size="medium" text="Subscribe to Newsletter"/></div>
    <p>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
    <div className={style.form}>
     <div className={style.input}><Input placeholder='Your email' type='common' onChange={onChange}/></div>
     <div className={style.button}><Button text={'Subscribe'} type='black' onClick={onClick}/></div>
   </div>
   </div>
  </div>

 )
}

export default Subscribe