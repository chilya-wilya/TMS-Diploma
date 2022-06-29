import React, {FC} from "react"
import classnames from 'classnames'

import style from './button.module.css'

type ButtonProps = {
 title: string;
 className?: string;
 onClick: () => void;
}

const Button: FC<ButtonProps> = ({ title, onClick }) => {
 return <button className={style.button} onClick = {onClick}>{title}</button>
}

export default Button