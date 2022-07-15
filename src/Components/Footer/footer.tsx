import classNames from "classnames"

import style from './footer.module.sass'

const Footer = () => {
 return (
  <div className={classNames(style.footer, 'wrapper')}>
   <p>©2022 Bookstore</p>
   <p>All rights reserved</p>
  </div>
 )
}

export default Footer