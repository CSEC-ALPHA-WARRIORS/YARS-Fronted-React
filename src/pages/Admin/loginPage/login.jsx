import React from "react";
import InputField from "../../../components/common/inputField/inputField";
import Button from "../../../components/common/button/button";
import "./loginStyle.scss";
import LoginImage from "../../../assets/images/loginImage.png";
import LoginValidation from "./validation";
import { useFormik } from "formik";
import NavBar from "../../../components/common/navBar/navBar";
import Footer from '../../../components/common/footer/footer'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const onSubmit = (e) => {
    
    axios.post("http://localhost:8000/api/admin/login", values).then(response => {
      console.log(response);
      
      // storing token in localstorage
      window.localStorage.setItem("admin_token", response.data.token);
      navigate("/admin/students-list");
    }).catch(err => {
      console.log(err);
    })
  }

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: LoginValidation,
      onSubmit,
    });


  return (
    <>
      <NavBar />
      <div className="login-container">
        <div className="left-side-container login">
          <img src={LoginImage} alt="" />
        </div>
        <div className="right-side-container login">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="login-input">
              {/* errors.mname && touched.mname */}
              <InputField
                type="text"
                label="Email"
                id="email"
                value={values.email}
                error={errors.email && touched.email ? errors.email : ""}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Email"
              />
              <InputField
                type="password"
                label="Password"
                id="password"
                error={
                  errors.password && touched.password ? errors.password : ""
                }
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Password"
              />
            </div>
              <Button text="Login" className="small-btn" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
