import React from 'react'
import './buttonStyle.scss'
function Button({className,text, handler}) {
  return (
      <button type="submit"  className={["btn",className].join(" ")} onClick={handler} >{text}</button>
  )
}

export default Button
