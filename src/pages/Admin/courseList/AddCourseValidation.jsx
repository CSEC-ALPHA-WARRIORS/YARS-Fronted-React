import * as yup from "yup";
const vaar = "";
const AddCourseValidation = yup.object().shape({
  title: yup.string().max(40).min(5).required("title is required"),
  code: yup.string().max(15).min(3).required("code is required"),
  year: yup.string().max(10).min(3).required("year is required"),
  semester: yup.string().max(15).required("Semester is Required"),
  program: yup.string().max(40).required("Program is required"),
  credit_hours: yup
    .number()
    .positive()
    .max(5)
    .required("credit hour is required"),
});

export default AddCourseValidation;
