import React, {FC} from "react"
import classNames from "classnames"

import style from './footer.module.sass'

const Footer: FC = () => {
 return (
  <div className={classNames(style.footer, 'wrapper')}>
   <p>©2022 Bookstore</p>
   <p>All rights reserved</p>
  </div>
 )
}

export default Footer