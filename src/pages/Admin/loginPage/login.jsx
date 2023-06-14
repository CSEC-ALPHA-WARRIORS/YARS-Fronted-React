import React from 'react'
import InputField from '../../../components/common/inputField/inputField'
import Button from '../../../components/common/button/button'
import './loginStyle.scss'
import LoginImage from '../../../assets/images/loginImage.png'
import LoginValidation from './validation'
import { useFormik } from 'formik'

const onSubmit = () => {
    // console.log("submit clicked")
}
function Login() {
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginValidation,
        onSubmit,
    })


    return (
        <div className='login-container'>
            <div className="left-side-container login">
                <img src={LoginImage} alt="" />
            </div>
            <div className="right-side-container login">
                <form action="">
                    <h1>Login</h1>
                    <div className="login-input">
                        {/* errors.mname && touched.mname */}
                        <InputField type="text" label='Email' id="email" value={values.email} error={errors.email && touched.email ? errors.email : ""} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Email" />
                        <InputField type="password" label='Password' id="password" error={errors.password && touched.password ? errors.password : ""} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Password" />
                    </div>
                    <Button text="Login" className="small-btn" />
                </form>
            </div>
        </div>
    )
}

export default Login
