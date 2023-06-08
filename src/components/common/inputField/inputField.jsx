import React from 'react'
import './inputFieldStyle.scss'
function InputField({label,type,placeholder,error,value, onChange}) {
    return (
        <div className="inputField">
            <label htmlFor="">{label}</label>
            <input className='inpt' type={type} value={value} onChange={onChange} placeholder={placeholder}/>
            <label htmlFor="" className='error'>{error}</label>
        </div>
    )
}

export default InputField
