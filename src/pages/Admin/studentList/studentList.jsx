import React, { useEffect, useState } from "react";
import AdminNavBar from "../../../components/admin/AdminNavBar";
import "./studentsStyle.scss";
import StudentRow from "../../../components/admin/studentRow";
import Footer from "../../../components/common/footer/footer";
import axios, { all } from "axios";
function StudentList() {
  const [studentData, setStudentData] = useState([]);

  // getting token from local storage
  const token = window.localStorage.getItem("admin_token");


  useEffect(() => {

    // setting header values for axios
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api/students',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer ' + token
      },
    };

    axios
      .request(config)
      .then((response) => {
        setStudentData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let newId = 1;
  const listAll = studentData.map((students) => {
    const newdata = { ...students, newId };
    newId++;
    return newdata;
  });

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

          {listAll.map((allStudents) => (
            <StudentRow
              key={allStudents.newId}
              id={allStudents.newId}
              fname={allStudents.fname}
              mname={allStudents.mname}
              lname={allStudents.lname}
              email={allStudents.email}
              phoneNumber={allStudents.phonenumber}
            />
          ))}
        </table>
      </div>
      <Footer />
    </>
  );
}

export default StudentList;
