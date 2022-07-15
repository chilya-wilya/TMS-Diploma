import React, {FC} from "react"
import classNames from 'classnames'

import style from './price.module.sass'

type PriceProps = {
  price: string;
  size?: string;
}

const BookPrice: FC<PriceProps> = ({ price, size }) => {
  return <p className={classNames(style.price, 
  {[style.big]: size === 'big'}, 
  )}>
    {`$${price}`}
  </p>
}

export default BookPrice