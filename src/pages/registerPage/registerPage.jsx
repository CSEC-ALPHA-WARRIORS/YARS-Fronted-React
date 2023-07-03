import React, { useState } from "react";
import NavBar from "../../components/common/navBar/navBar";
import InputField from "../../components/common/inputField/inputField";
import uploadImage from "../../assets/images/pngwing.com.png";
import "./registerStyle.scss";
import Footer from "../../components/common/footer/footer";
import Button from "../../components/common/button/button";
import axios from "axios";
import { useFormik } from "formik";
import RegistrationValidation from "./validation";
import { useNavigate } from "react-router-dom";


function RegisterPage() {
  
  const [profile_picture_url, setProfile_picture_url] = useState("");
  const [img, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(uploadImage);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [userToken, setUserToken] = useState();

  const imageHandler = (event) => {
    const selectedImage = event.target.files ? event.target.files[0] : null;
    setImage(selectedImage);

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const onSubmit = () => {
    upload((uploadedFileUrl) => {
      const Student = {
        fname: values.fname,
        mname: values.mname,
        lname: values.lname,
        profile_picture_url: uploadedFileUrl,
        email: values.email,
        phonenumber: values.phonenumber,
        password: values.password,
        type: values.type,
        address: {
          city: values.city,
          woreda: values.woreda,
          kebele: values.kebele,
          house_no: values.house_no,
        },
        emergency_contact: {
          fname: values.efname,
          mname: values.emname,
          lname: values.elname,
          relationship: values.relationship,
          phonenumber: values.ephonenumber,
        },
        educational_background: {
          school_name: values.school,
          start_date: values.start_date,
          end_date: values.end_date,
          gpa: values.gpa,
        },

        registration: {
          year: values.year,
          semester: values.semester,
          program: values.program,
          level: values.level,
          registered_at: new Date(),
        },
      };

      axios
        .post("http://localhost:8000/api/register", Student)
        .then((response) => {
          console.log(
            response.data.student,
            response.data.token,
            response.data.courses,
            response.data.registration
          );

          var total_credit_hr = 0;
          response.data.courses.map((course) => {
            total_credit_hr = total_credit_hr + course.credit_hours;
          });

          window.localStorage.setItem(
            "courses",
            JSON.stringify(response.data.courses)
          );

          window.localStorage.setItem(
            "token",
            JSON.stringify(response.data.token)
          );
          window.localStorage.setItem(
            "student",
            JSON.stringify(response.data.student)
          );
          window.localStorage.setItem(
            "registration_id",
            JSON.stringify(response.data.registration.id)
          );
          window.localStorage.setItem("total_credit_hours", total_credit_hr);

          navigate("/payment");
        })
        .catch((error) => {
          alert(error.response.data);
        });
    });
  };
  const { handleBlur, errors, touched, handleChange, values, handleSubmit } =
    useFormik({
      initialValues: {
        // img: null,
        fname: "",
        mname: "",
        lname: "",
        // profile_picture_url: "",
        email: "",
        phonenumber: "",
        password: "",
        confirm: "",
        type: "Regular",
        // // Address
        city: "",
        woreda: "",
        kebele: "",
        house_no: "",
        // // emergency_contact
        efname: "",
        emname: "",
        elname: "",
        relationship: "Father",
        ephonenumber: "",
        // // educational_background
        school: "",
        start_date: "",
        end_date: "",
        gpa: "",
        // // registration
        year: "3rd",
        semester: "1st",
        program: "Software Engineering",
        level: "BSC",
        // registered_at: new Date(),
        // // image
        // img: null,
        // imagePreview: uploadImage,
      },
      validationSchema: RegistrationValidation,
      onSubmit,
    });

    const upload = (callback) => {
      const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
      const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
      
      if(img) {
        var bodyFormData = new FormData();
        bodyFormData.append("file", img ? img : uploadImage);
        bodyFormData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, bodyFormData).then(res => {
          if (res.data.secure_url !== undefined) {
            const uploadedFileUrl = res.data.secure_url;
            setProfile_picture_url(uploadedFileUrl);
            callback(uploadedFileUrl)
          }
        }).catch(error => {
          console.log(error);
          alert(error);
        })
      }else {
        alert("please upload profile picture!!")
      }
  
      // callback("/src/assets/images/pngwing.com.png");
    };

  return (
    <>
      <NavBar />
      <form action="" onSubmit={handleSubmit}>
        <div className="register-page">
          <div className="register-description">
            <h1>Register</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Egestas suspendisse
              parturient bibendum dui urna imperdiet sit pulvinar. Libero ut sit
              potenti pellentesque mattis id nunc adipiscing. Massa lacinia
              euismod nibh scelerisque dignissim. Massa tristique imperdiet
              lorem tincidunt ut. Et hac ornare dolor ac urna sodales netus
              proin quisque. Augue neque imperdiet urna posuere porttitor.
              Faucibus bibendum turpis dui quis tortor pellentesque id
              dignissim. Quis nibh.
            </p>
          </div>
          <div className="personal-information">
            <h2>Personal Information</h2>
            <div className="personal-information-inputs">
              <div className="img-uploader">
                <label className="ppimage" htmlFor="profileImg">
                  <img src={imagePreview} alt="" />
                </label>
                <h2>Upload Profile</h2>
                <input id="profileImg" type="file" onChange={imageHandler} />
              </div>
              <div className="information-inputs">
                <div className="fist-middle-name">
                  <InputField
                    label="First Name"
                    type="text"
                    value={values.fname}
                    error={errors.fname && touched.fname ? errors.fname : ""}
                    id="fname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your First Name"
                  />
                  <InputField
                    label="Middle Name"
                    type="text"
                    error={errors.mname && touched.mname ? errors.mname : ""}
                    value={values.mname}
                    id="mname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your Middle Name"
                  />
                </div>
                <div className="last-name">
                  <InputField
                    label="Last Name"
                    type="text"
                    error={errors.lname && touched.lname ? errors.lname : ""}
                    value={values.lname}
                    id="lname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your Last Name"
                  />
                  <InputField
                    label="Email"
                    type="email"
                    error={errors.email && touched.email ? errors.email : ""}
                    value={values.email}
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your Email Address"
                  />
                </div>
                <div className="type-phone">
                  <div className="selection-container">
                    <label htmlFor="type">Type</label>
                    <select
                      name="type"
                      id="type"
                      value={values.type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="selection"
                    >
                      <option value="Regular">Regular Student</option>
                      <option value="Extension">Extension Student</option>
                      <option value="Night">Night Student</option>
                    </select>
                  </div>
                  <InputField
                    label="Phone Number"
                    type="number"
                    error={
                      errors.phonenumber && touched.phonenumber
                        ? errors.phonenumber
                        : ""
                    }
                    value={values.phonenumber}
                    id="phonenumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your Phone Number"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="address-information">
            <h2>Address Information</h2>
            <div className="address-inputs">
              <div className="address">
                <InputField
                  label="City"
                  type="text"
                  error={errors.city && touched.city ? errors.city : ""}
                  value={values.city}
                  id="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your City"
                />
                <InputField
                  label="Woreda"
                  type="text"
                  error={errors.woreda && touched.woreda ? errors.woreda : ""}
                  value={values.woreda}
                  id="woreda"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your Woreda"
                />
              </div>
              <div className="address">
                <InputField
                  label="Kebele"
                  type="text"
                  error={errors.kebele && touched.kebele ? errors.kebele : ""}
                  value={values.kebele}
                  id="kebele"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your Kebele"
                />
                <InputField
                  label="House Number"
                  type="number"
                  error={
                    errors.house_no && touched.house_no ? errors.house_no : ""
                  }
                  value={values.house_no}
                  id="house_no"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your Kebele"
                />
              </div>
            </div>
          </div>
          <div className="registration-information">
            <h2>Registration Information</h2>
            <div className="registration-inputs">
              <div className="registration">
                <div className="selection-container">
                  <label htmlFor="type">Year</label>
                  <select
                    name="year"
                    id="year"
                    value={values.year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="selection"
                  >
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                  </select>
                  {errors.year && touched.year ? errors.year : ""}
                </div>
                <div className="selection-container">
                  <label htmlFor="type">Semester</label>
                  <select
                    name="semester"
                    id="semester"
                    value={values.semester}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="selection"
                  >
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                  </select>
                  {errors.semester && touched.semester ? errors.semester : ""}
                </div>
              </div>
              <div className="registration">
                <div className="selection-container">
                  <label htmlFor="type">Program</label>
                  <select
                    name="program"
                    id="program"
                    value={values.program}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="selection"
                  >
                    <option value="Software Engineering">
                      Software Engineering
                    </option>
                    <option value="Computer Science and Engineering">
                      Computer Science and Engineering
                    </option>
                  </select>
                  {errors.program && touched.program ? errors.program : ""}
                </div>
                <div className="selection-container">
                  <label htmlFor="type">Level</label>
                  <select
                    name="level"
                    id="level"
                    value={values.level}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="selection"
                  >
                    <option value="BSC">Bachelor degree</option>
                    <option value="MSC">Masters degree</option>
                  </select>
                  {errors.level && touched.level ? errors.level : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="educational-bg-information">
            <h2>Educational Background</h2>
            <div className="educational-bg-inputs">
              <div className="educational-bg">
                <InputField
                  label="School Name"
                  type="text"
                  error={errors.school && touched.school ? errors.school : ""}
                  value={values.school}
                  id="school"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your School Name"
                />
                <InputField
                  label="Grade"
                  type="text"
                  error={errors.gpa && touched.gpa ? errors.gpa : ""}
                  value={values.gpa}
                  id="gpa"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.gpa && touched.gpa ? "error" : ""}
                  placeholder="Enter Your Grade"
                />
              </div>
              <div className="educational-bg">
                <InputField
                  label="Start Date"
                  type="date"
                  error={
                    errors.start_date && touched.start_date
                      ? errors.start_date
                      : ""
                  }
                  value={values.start_date}
                  id="start_date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your Program"
                />
                <InputField
                  label="End Date"
                  type="date"
                  error={
                    errors.end_date && touched.end_date ? errors.end_date : ""
                  }
                  value={values.end_date}
                  id="end_date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your Education Level"
                />
              </div>
            </div>
          </div>
          <div className="emergency-information">
            <h2>Emergency Contact</h2>
            <div className="emergency-inputs">
              <div className="emergency">
                <InputField
                  label="First Name"
                  type="text"
                  error={errors.efname && touched.efname ? errors.efname : ""}
                  value={values.efname}
                  id="efname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter First Name"
                />
                <InputField
                  label="Middle Name"
                  type="text"
                  error={errors.emname && touched.emname ? errors.emname : ""}
                  value={values.emname}
                  id="emname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Middle Name"
                />
                <InputField
                  label="Last Name"
                  type="text"
                  error={errors.elname && touched.elname ? errors.elname : ""}
                  value={values.elname}
                  id="elname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="emergency">
                <div className="selection-container">
                  <label htmlFor="type">Relationship</label>
                  <select
                    name="relationship"
                    id="relationships"
                    value={values.relationship}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="selection"
                  >
                    <option value="Regular">Father</option>
                    <option value="Extension">Mother</option>
                    <option value="Night">Legal Guardian</option>
                  </select>
                </div>
                <InputField
                  label="Phone Number"
                  type="Number"
                  error={
                    errors.ephonenumber && touched.ephonenumber
                      ? errors.ephonenumber
                      : ""
                  }
                  value={values.ephonenumber}
                  id="ephonenumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
          </div>
          <div className="login-information">
            <h2>Login Information</h2>
            <div className="login-inputs">
              <InputField
                label="Password"
                type="password"
                error={
                  errors.password && touched.password ? errors.password : ""
                }
                value={values.password}
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Password"
              />
              <InputField
                label="Password"
                type="password"
                error={errors.school && touched.school ? errors.confirm : ""}
                value={values.confirm}
                id="confirm"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Confirm Your confirm"
              />
            </div>
          </div>
          <div className="button-container">
            <Button
              classNameo="handleSubmit"
              className="blue-bg white orange-hover"
              text="Continue to Payment"
            />
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
              }              
export default RegisterPage;
