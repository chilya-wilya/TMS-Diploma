import React, {FC} from "react"
import classnames from 'classnames'

import style from './pageTitle.module.sass'

type PageTitleProps = {
 text: string;
 size: string;
}

const PageTitle: FC<PageTitleProps> = ({ text, size }) => {
 return <h1 className={classnames(
  {[style.big]: size === 'big'}, 
  {[style.medium]: size === 'medium'}, 
  {[style.small]: size === 'small'}, 
  )}>{text}</h1>
}

export default PageTitle