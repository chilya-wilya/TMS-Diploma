import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';

import style from './infoSwitcher.module.sass'

type TabSwitcherProps = {
 options: { text: string, value: string }[],
 changeHandler: Function,
}

const TabSwitcher: FC<TabSwitcherProps> = ({
 options,
 changeHandler,
 }) => {

 const [current, setCurrent] = useState('')

 useEffect(() => {
  setCurrent(options[0].value)
 }, [])

 const clickHandler = (val: any) => {
  setCurrent(val)
  changeHandler(val)
 }

 return (
  <div className={style.tabSwitcher}>
   {options.map(elem =>
   <div
    key={elem.value}
    className={classNames(
     style.tab, 
     {[style.active]: current === elem.value},
    )}
    onClick={() => clickHandler(elem.value)}
    >
     {elem.text}
    </div>
    )}
  </div>
 )
}

export default TabSwitcher