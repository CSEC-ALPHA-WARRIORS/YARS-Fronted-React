import React from "react";
import AdminNavBar from "../../../components/admin/AdminNavBar";
import "./studentsStyle.scss";
import StudentRow from "../../../components/admin/studentRow";
import Footer from "../../../components/common/footer/footer";
function StudentList() {
  return (
    <>
      <AdminNavBar />
      <div className="student-container">
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <StudentRow />
          <StudentRow />
          <StudentRow />
          <StudentRow />
          <StudentRow />
          <StudentRow />
          <StudentRow />
          <StudentRow />
        </table>
      </div>
      <Footer />
    </>
  );
}

export default StudentList;
