import React from 'react'
import './style.scss'
function Card({title,body,className}) {
    return (
        <div className={['card',className].join(" ")}>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default Card
