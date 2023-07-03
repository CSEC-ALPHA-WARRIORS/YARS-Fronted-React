import React, { useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
import NavBar from "../../../components/common/navBar/navBar";
import Footer from "../../../components/common/footer/footer";
import InputField from "../../../components/common/inputField/inputField";
import "./manualPaymentStyle.scss";
import Button from "../../../components/common/button/button";
import defaultIcon from "../../../assets/images/icons8-reciept-96.png";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";

const validationSchema = yup.object({
  bank_name: yup.string("Enter your bank name").required("Bank name is required"),
  account_number: yup
    .string("Enter your account number")
    .required("Account number is required"),
});

function ManualPayment() {
  const [img, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(defaultIcon);
  const [imgUrl, setImgUrl] = useState("");

  const total_credit_hours = window.localStorage.getItem("total_credit_hours");
  const token = JSON.parse(window.localStorage.getItem("token"));
  const reg_id = window.localStorage.getItem("registration_id");

  const amount = total_credit_hours * 150;

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

  const { handleBlur, errors, touched, handleChange, values, handleSubmit } =
    useFormik({
      initialValues: {
        bank_name: "",
        account_number: "",
      },
      validationSchema,
      onSubmit: (values) => {
        // console.log(values, img);
        console.log(token);
        upload((url) => {
            const payment = {
                amount: amount,
                receipt_url: imgUrl,
                registration_id: reg_id,
                type: "manual"
            }

            const config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "http://localhost:8000/api/pay",
                headers: {
                    "x-auth-token": token,
                },
                body: payment
            }

            axios.request(config)
            .then(result => {
                console.log(result)
            }).catch(err => {
                console.log(err);
                alert(err.response.data.message);
            })
        })
      },
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
              setImgUrl(uploadedFileUrl);
              callback(uploadedFileUrl)
            }
          }).catch(error => {
            console.log(error);
            alert(error);
          })
        }else {
          alert("please upload profile picture!!")
        }
    }

  return (
    <>
      <NavBar />
      <div className="Manual-payment-container">
        <form onSubmit={handleSubmit}>
          <h1>Manual Payment</h1>
          <div className="inputfield-container">
            <InputField
              label="Bank Name"
              name="bank_name"
              value={values.bank_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.bank_name && touched.bank_name ? errors.bank_name : ""
              }
              placeholder="Enter a Bank you complete your Payment"
            />
            {}
            <InputField
              label="Account Number"
              name="account_number"
              value={values.account_number}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.account_number && touched.account_number ? errors.account_number : ""
              }
              placeholder="Enter your bank Account"
            />
          </div>
          <div className="upload-receipt-container">
            <label className="ppimage" htmlFor="profileImg">
              <img src={imagePreview} alt="" />
            </label>
            <label htmlFor="">Upload Receipt</label>
            <label className="upload-receipt" htmlFor="upload-receipt">
              <BiCloudUpload className="upload-icon" />
              <h2>Upload</h2>
            </label>
            <input type="file" id="upload-receipt" onChange={imageHandler} />
          </div>
          <Button
            text="FINISH REGISTRATION"
            className="white blue-bg small-btn"
          />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ManualPayment;
