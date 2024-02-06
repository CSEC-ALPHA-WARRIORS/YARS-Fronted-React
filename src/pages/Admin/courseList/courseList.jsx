import Button from "../../../components/common/button/button";
import InputField from "../../../components/common/inputField/inputField";
import CourseRow from "../../../components/admin/courseRow";
import AdminNavBar from "../../../components/admin/AdminNavBar";
import "./courseListStyle.scss";
import Footer from "../../../components/common/footer/footer";
import { useFormik } from "formik";
import AddCourseValidation from "./AddCourseValidation";
import CoursesServes from "../../../utilities/api/Course";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


function CourseList() {
  const [btn, setbtn] = useState("ADD COURSE");
  const [flag, setflag] = useState(true);
  let cor = {
        title: "",
        code: "",
        year: "",
        semester: "",
        program: "",
        credit_hours: "",
  }
  let updatehandlerFun = (Cours) => {
    setbtn("EDIT COURSE");
    setValues(Cours);
    setflag(false);
    
  }
  const Courses = useQuery({
    queryFn: () => CoursesServes.getAllCourses(),
    queryKey: ["Course"],
    
  });
  

  const queryclient = useQueryClient();
  const addcoures = useMutation({
    mutationFn: CoursesServes.addCourses,
    onSuccess: () => {
      queryclient.invalidateQueries(["Course"]);
    },
  });
   const editcoures = useMutation({
    mutationFn: CoursesServes.editCourses,
    onSuccess: () => {
      queryclient.invalidateQueries(["Course"]);
    }
  });
  const onSubmit = (event) => {
    const Course = {
      title: values.title,
      code: values.code,
      year: values.year,
      semester: values.semester,
      program: values.program,
      credit_hours: values.credit_hours,
      id: values.id
    };
    if (!flag) {
      console.log(Course);
      setflag(true);
      setbtn("ADD COURSE");
      editcoures.mutate(Course);
      if (addcoures.error) {
    toast.error(addcoures.error.message);
  }
      setValues(cor);
      
    } else {
      addcoures.mutate(Course);
      
      if (addcoures.error) {
    toast.error(addcoures.error.message);
  }
      setValues(cor);
    }
    
    
   
  };
  const { handleBlur, values, errors, handleChange, touched, handleSubmit, setValues } =
    useFormik({
      initialValues: cor,
      validationSchema: AddCourseValidation,
      onSubmit,
    });
  
  

  return (
    <>
      
      <AdminNavBar />
      
      <div className="course-container">
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
        <h1>{btn}</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Code</th>
              <th>Year</th>
              <th>Semester</th>
              <th>Program</th>
              <th>Credit Hour</th>
              <th>Action</th>
            </tr>
          </thead>
          {Courses.data?.map((courses, index) => (
            <CourseRow
              key={index + 1}
              delId={courses.id}
              title={courses.title}
              code={courses.code}
              year={courses.year}
              semester={courses.semester}
              program={courses.program}
              credit_hours={courses.credit_hours}
              updatehandlerFun={updatehandlerFun}
            />
          ))}
        </table>

        <form action="" onSubmit={handleSubmit}>
          <div className="add-course-container">
            <h1>{btn}</h1>
            <div className="course-input-container">
              <div className="row">
                <InputField
                  label="Title"
                  placeholder="Enter Course Title "
                  type="text"
                  id="title"
                  value={values.title}
                  error={errors.title && touched.title ? errors.title : ""}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <InputField
                  label="Code"
                  placeholder="Enter Course Code"
                  type="text"
                  id="code"
                  value={values.code}
                  error={errors.code && touched.code ? errors.code : ""}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="row">
                <InputField
                  label="Year"
                  placeholder="Enter Course Year "
                  type="text"
                  id="year"
                  value={values.year}
                  error={errors.year && touched.year ? errors.year : ""}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <InputField
                  label="Semester"
                  placeholder="Enter Course Semester "
                  type="text"
                  id="semester"
                  value={values.semester}
                  error={
                    errors.semester && touched.semester ? errors.semester : ""
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="row">
                <InputField
                  label="Program"
                  placeholder="Enter Course Program"
                  type="text"
                  id="program"
                  value={values.program}
                  error={
                    errors.program && touched.program ? errors.program : ""
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <InputField
                  label="Credit Hour"
                  placeholder="Enter Course Credit Hour"
                  type="text"
                  id="credit_hours"
                  value={values.credit_hours}
                  error={
                    errors.credit_hours && touched.credit_hours
                      ? errors.credit_hours
                      : ""
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button
              className="small-btn blue-black-bg white"
              text={btn}
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default CourseList;
