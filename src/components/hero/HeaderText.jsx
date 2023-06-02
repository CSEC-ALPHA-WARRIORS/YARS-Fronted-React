import React from 'react'
import './style.scss'
import '../../assets/fonts/font.css'
const HeaderText = ({className,text}) => {
  return (
    <h1 className={["header-text",className].join(" ")}>
      {text}
    </h1>
  )
}

export default HeaderText
