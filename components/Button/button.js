import React from 'react'
import btnStyle from './button.module.scss'

export default function Button({ children, ...props }) {
  return <button className={btnStyle.btn} {...props}>{children}</button>;
}
