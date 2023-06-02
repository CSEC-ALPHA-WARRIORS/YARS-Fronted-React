import React from 'react'
import './inputFieldStyle.scss'
function InputField({label,type,placeholder}) {
    return (
        <div className="inputField">
            <label htmlFor="">{label}</label>
            <input className='inpt' type={type} placeholder={placeholder}/>
        </div>
    )
}

export default InputField
