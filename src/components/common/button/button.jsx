import React from 'react'
import './buttonStyle.scss'

function Button({className,text,onClick}) {
  return (
      <button type="submit" onClick={onClick} className={["btn",className].join(" ")} >{text}</button>
  )
}

export default Button
