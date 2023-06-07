import React, { useState } from 'react'
import NavBar from '../../components/common/navBar/navBar'
import InputField from '../../components/common/inputField/inputField'
import uploadImage from '../../assets/images/camera.png'
import './registerStyle.scss'
import Footer from '../../components/common/footer/footer'
import Button from '../../components/common/button/button'
import { Link } from 'react-router-dom'
import axios from 'axios'

function RegisterPage() {


  const [fname, setFname] = useState();
  const [mname, setMname] = useState();
  const [lname, setLname] = useState();
  const [profile_picture_url, setProfile_picture_url] = useState("img.png");
  const [email, setEmail] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [password, setPassword] = useState();
  const [type, setType] = useState("Regular");

  // Address
  const [city, setCity] = useState();
  const [woreda, setWoreda] = useState();
  const [kebele, setKebele] = useState();
  const [house_no, setHouse_no] = useState();
  // emergency_contact
  const [efname, setEfname] = useState();
  const [emname, setEmname] = useState();
  const [elname, setElname] = useState();
  const [relationship, setRelationship] = useState("Father");
  const [ephonenumber, setEphonenumber] = useState();
  // educational_background
  const [school, setSchool] = useState();
  const [start_date, setStart_date] = useState();
  const [end_date, setEnd_date] = useState();
  const [gpa, setGpa] = useState();
  // registration
  const [year, setYear] = useState();
  const [semester, setSemester] = useState();
  const [program, setProgram] = useState();
  const [level, setLevel] = useState();
  const [registered_at, setRegistered_at] = useState();

  // All set all data in json
  // const [student, setStudent] = useState()
  const Student = {
    fname: fname,
    mname: mname,
    lname: lname,
    profile_picture_url: profile_picture_url,
    email: email,
    phonenumber: phonenumber,
    password: password,
    type: type,
    address: {
      city: city,
      woreda: woreda,
      kebele: kebele,
      house_no: house_no,
    },
    emergency_contact: {
      fname: efname,
      mname: emname,
      lname: elname,
      relationship: relationship,
      phonenumber: ephonenumber,
    },
    educational_background: {
      school_name: school,
      start_date: start_date,
      end_date: end_date,
      gpa: gpa
    },
    
    registration: {
      year: year,
      semester: semester,
      program: program,
      level: level,
      registered_at: new Date(),
    }
  }

  const handleRegistration = () => {
    // setStudent(Student)
    axios.post('http://localhost:8000/api/register', Student)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // console.log(student)
    console.log("capital", Student)
    // });
    console.log("clicked")


  };

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
                <InputField label="First Name" type="text" value={fname} onChange={e => setFname(e.target.value)} placeholder="Enter your First Name" />
                <InputField label="Middle Name" type="text" value={mname} onChange={e => setMname(e.target.value)} placeholder="Enter your Middle Name" />
              </div>
              <div className="last-name">
                <InputField label="Last Name" type="text" value={lname} onChange={e => setLname(e.target.value)} placeholder="Enter your Last Name" />
                <InputField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your Email Address" />
              </div>
              <div className="type-phone">
                <div className="selection-container">
                  <label htmlFor="type">Type</label>
                  <select name="type" id="type" value={type} onChange={e => setType(e.target.value)} className='selection'>
                    <option value="Regular">Regular Student</option>
                    <option value="Extension">Extension Student</option>
                    <option value="Night">Night Student</option>
                  </select>
                </div>
                <InputField label="Phone Number" type="number" value={phonenumber} onChange={e => setPhonenumber(e.target.value)} placeholder="Enter your Phone Number" />
              </div>
            </div>
          </div>
        </div>
        <div className="address-information">
          <h2>Address Information</h2>
          <div className="address-inputs">
            <div className='address'>
              <InputField label="City" type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Enter Your City" />
              <InputField label="Woreda" type="text" value={woreda} onChange={e => setWoreda(e.target.value)} placeholder="Enter Your Woreda" />
            </div>
            <div className='address'>
              <InputField label="Kebele" type="text" value={kebele} onChange={e => setKebele(e.target.value)} placeholder="Enter Your Kebele" />
              <InputField label="House Number" type="number" value={house_no} onChange={e => setHouse_no(e.target.value)} placeholder="Enter Your Kebele" />
            </div>
          </div>
        </div>
        <div className="registration-information">
          <h2>Registration Information</h2>
          <div className="registration-inputs">
            <div className="registration">
              <InputField label="Year" type="text" value={year} onChange={e => setYear(e.target.value)} placeholder="Enter Your Year" />
              <InputField label="Semester" type="text" value={semester} onChange={e => setSemester(e.target.value)} placeholder="Enter Your Semester" />
            </div>
            <div className="registration">
              <InputField label="Program" type="text" value={program} onChange={e => setProgram(e.target.value)} placeholder="Enter Your Program" />
              <InputField label="Education Level" type="text" value={level} onChange={e => setLevel(e.target.value)} placeholder="Enter Your Education Level" />
            </div>
          </div>
        </div>
        <div className="educational-bg-information">
          <h2>Educational Background</h2>
          <div className="educational-bg-inputs">
            <div className="educational-bg">
              <InputField label="School Name" type="text" value={school} onChange={e => setSchool(e.target.value)} placeholder="Enter Your School Name" />
              <InputField label="Grade" value={gpa} onChange={e => setGpa(e.target.value)} type="text" placeholder="Enter Your Grade" />
            </div>
            <div className="educational-bg">
              <InputField label="Start Date" type="date" value={start_date} onChange={e => setStart_date(e.target.value)} placeholder="Enter Your Program" />
              <InputField label="End Date" type="date" value={end_date} onChange={e => setEnd_date(e.target.value)} placeholder="Enter Your Education Level" />
            </div>
          </div>
        </div>
        <div className="emergency-information">
          <h2>Emergency Contact</h2>
          <div className="emergency-inputs">
            <div className="emergency">
              <InputField label="First Name" type="text" value={efname} onChange={e => setEfname(e.target.value)} placeholder="Enter First Name" />
              <InputField label="Middle Name" type="text" value={emname} onChange={e => setEmname(e.target.value)} placeholder="Enter Middle Name" />
              <InputField label="Last Name" type="text" value={elname} onChange={e => setElname(e.target.value)} placeholder="Enter your Last Name" />
            </div>
            <div className="emergency">
              <div className="selection-container">
                <label htmlFor="type">Relationship</label>
                <select name="type" id="type" value={relationship} onChange={e => setRelationship(e.target.value)} className='selection'>
                  <option value="Regular">Father</option>
                  <option value="Extension">Mother</option>
                  <option value="Night">Legal Guardian</option>
                </select>
              </div>
              <InputField label="Phone Number" type="Number" value={ephonenumber} onChange={e => setEphonenumber(e.target.value)} placeholder="Enter Phone Number" />
            </div>
          </div>
        </div>
        <div className="login-information">
          <h2>Login Information</h2>
          <div className="login-inputs">
            <InputField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password" />
            <InputField label="Password" type="password" placeholder="Confirm Your Password" />
          </div>
        </div>
        <div className="button-container">
          <Link to="/payment"> <Button className="blue-bg white orange-hover" onClick={handleRegistration} text="Continue to Payment" /></Link>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default RegisterPage
