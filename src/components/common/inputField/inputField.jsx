import React from 'react'
import './inputFieldStyle.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup';
function InputField({id,label, type, placeholder, error, value, onChange, onBlur, className }) {
    return (
        <div className="inputField">
            <label htmlFor="">{label}</label>
            <input id={id} className={['inpt', className].join(" ")} type={type} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
            <label htmlFor="" className='error'>{error?error:"  ."}</label>
        </div>
    )
}

export default InputField
