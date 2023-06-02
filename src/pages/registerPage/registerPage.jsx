import React from 'react'
import NavBar from '../../components/common/navBar/navBar'
import InputField from '../../components/common/inputField/inputField'
import uploadImage from '../../assets/images/camera.png'
import './registerStyle.scss'
import Footer from '../../components/common/footer/footer'
import Button from '../../components/common/button/button'

function RegisterPage() {
  return (
    <>
      <NavBar />
      <div className='register-page'>
        <div className="register-description">
          <h1>Register</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Egestas suspendisse parturient bibendum dui urna imperdiet sit pulvinar. Libero ut sit potenti pellentesque mattis id nunc adipiscing. Massa lacinia euismod nibh scelerisque dignissim. Massa tristique imperdiet lorem tincidunt ut. Et hac ornare dolor ac urna sodales netus proin quisque. Augue neque imperdiet urna posuere porttitor. Faucibus bibendum turpis dui quis tortor pellentesque id dignissim. Quis nibh.</p>
        </div>
        <div className="personal-information">
          <h2>Personal Information</h2>
          <div className="personal-information-inputs">
            <div className="img-uploader">
              <img src={uploadImage} alt="" />
            </div>
            <div className="information-inputs">
              <div className="fist-middle-name">
                <InputField label="First Name" type="text" placeholder="Enter your First Name" />
                <InputField label="Middle Name" type="text" placeholder="Enter your Middle Name" />
              </div>
              <div className="last-name">
                <InputField label="Last Name" type="text" placeholder="Enter your Last Name" />
              </div>
              <div className="email-phone">
                <InputField label="Email" type="email" placeholder="Enter your Email Address" />
                <InputField label="Phone Number" type="number" placeholder="Enter your Phone Number" />
              </div>
            </div>
          </div>
        </div>
        <div className="address-information">
          <h2>Address Information</h2>
          <div className="address-inputs">
            <InputField label="City" type="text" placeholder="Enter Your City" />
            <InputField label="Woreda" type="text" placeholder="Enter Your Woreda" />
            <InputField label="Kebele" type="text" placeholder="Enter Your Kebele" />
          </div>
        </div>
        <div className="registration-information">
          <h2>Registration Information</h2>
          <div className="registration-inputs">
            <InputField label="Year" type="text" placeholder="Enter Your Year" />
            <InputField label="Semester" type="text" placeholder="Enter Your Semester" />
            <InputField label="Program" type="text" placeholder="Enter Your Program" />
          </div>
        </div>
        <div className="login-information">
          <h2>Login Information</h2>
          <div className="login-inputs">
            <InputField label="Password" type="password" placeholder="Enter Password" />
            <InputField label="Password" type="password" placeholder="Confirm Your Password" />
          </div>
        </div>
        <div className="button-container">
          <Button className="blue-bg white orange-hover" text="Continue to Payment" />
        </div>

      </div>
      <Footer />
    </>
  )
}

export default RegisterPage
