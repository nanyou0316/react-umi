import React from 'react'
import { NavLink } from 'umi'
import './global.css'
import style from './index.css'

export default function IndexLayout(props:any) {
  if(props.location.pathname==='/city'||props.location.pathname.includes('/detail')){
    return <>{props.children}</>
  }
  return (
    <div>
      {props.children}
      <div className={style.indexBox}>
        <ul>
          <li>
            <NavLink activeClassName={style.active} to='/film'>电影</NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.active} to='/cinema'>影院</NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.active} to='/center'>我的</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
