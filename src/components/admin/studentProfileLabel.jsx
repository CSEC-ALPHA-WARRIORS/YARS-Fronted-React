import React from 'react'
import './adminStyle.scss'
function StudentProfileLabel({label,information}) {
    return (
        <div className='label-container'>
            <h1>{label}</h1>
            <h3>{information}</h3>
        </div>
    )
}

export default StudentProfileLabel
