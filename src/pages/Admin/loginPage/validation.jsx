import * as yup from 'yup'
const LoginValidation = yup.object().shape({
    email: yup
        .string()
        .email("Please enter valid email")
        .required("email is required"),
    password: yup
        .string()
        .min(6, "please enter minimum 6 characters")
        .required("password is required")
})

export default LoginValidation;