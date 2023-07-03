import * as yup from "yup";
const alphabetRule = /^[a-zA-Z]+$/;
const ethiopianPhoneRegex = /^(\+251|251|0)?9[0-9]{8}$/;
const AddAdminValidation = yup.object().shape({
  fname: yup
    .string()
    .max(15)
    .min(3)
    .required("First Name required")
    .matches(alphabetRule, { message: "First Name must be only alphabet" }),
  mname: yup
    .string()
    .max(15)
    .min(3)
    .required("Middle Name is required")
    .matches(alphabetRule, { message: "Middle Name must be only alphabet" }),
  lname: yup
    .string()
    .max(15)
    .min(3)
    .required("Last Name is required")
    .matches(alphabetRule, { message: "Last Name must be only alphabet" }),
  email: yup
    .string()
    .max(25)
    .email("Please enter valid email")
    .required("Email is required"),
  phonenumber: yup
    .string()
    .matches(ethiopianPhoneRegex, {
      message: "Please enter valid phone number",
    })
    .required("Phone number is required"),
});

export default AddAdminValidation