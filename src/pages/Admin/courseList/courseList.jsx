import React from "react";
import Button from "../../../components/common/button/button";
import InputField from "../../../components/common/inputField/inputField";
import CourseRow from "../../../components/admin/courseRow";
import AdminNavBar from "../../../components/admin/AdminNavBar";
import './courseListStyle.scss'
import Footer from "../../../components/common/footer/footer";
function CourseList() {
  return (
    <>
      <AdminNavBar  />
      <div className="course-container">
        <h1>Courses</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Code</th>
              <th>Semester</th>
              <th>Year</th>
              <th>Program</th>
              <th>Credit Hour</th>
              <th>Action</th>
            </tr>
          </thead>
          <CourseRow />
          <CourseRow />
          <CourseRow />
          <CourseRow />
          <CourseRow />
          <CourseRow />
          <CourseRow />
          <CourseRow />
        </table>

        <div className="add-course-container">
          <h1>Add Course</h1>
          <div className="course-input-container">
            <div className="row">
              <InputField
                label="Title"
                placeholder="Enter Course Title "
                type="text"
              />
              <InputField
                label="Code"
                placeholder="Enter Course Code"
                type="text"
              />
            </div>
            <div className="row">
              <InputField
                label="Year"
                placeholder="Enter Course Year "
                type="text"
              />
              <InputField
                label="Semester"
                placeholder="Enter Course Semester "
                type="text"
              />
            </div>
            <div className="row">
              <InputField
                label="Program"
                placeholder="Enter Course Program"
                type="text"
              />{" "}
              <InputField
                label="Credit Hour"
                placeholder="Enter Course Credit Hour"
                type="text"
              />
            </div>
          </div>
          <Button className="small-btn blue-black-bg white" text="ADD COURSE" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CourseList;
