import React, { useEffect, useState } from "react";
import AdminNavBar from "../../../components/admin/AdminNavBar";
import "./studentsStyle.scss";
import StudentRow from "../../../components/admin/studentRow";
import Footer from "../../../components/common/footer/footer";
import axios, { all } from "axios";
import {Loader} from "../../../components/common/loading/loading";
import StudentService from "../../../utilities/api/student";
import { useQuery } from "@tanstack/react-query";

function StudentList() {
  const [studentData, setStudentData] = useState([]);
  const {data, isLoading, error} = useQuery({
    queryKey: ["students"],
    queryFn: () => StudentService.getStudents(),
  })

  

  // getting token from local storage

  // let newId = 1;
  // const listAll = !isLoading && data.map((students) => {
  //   const newdata = { ...students, newId };
  //   newId++;
  //   return newdata;
  // });

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
              <th>Action</th>
            </tr>
          </thead>
{
  isLoading ? <div style={{textAlign:'center'}} className="loading"> <Loader/> </div>: 

       data.map((allStudents) => (
            <StudentRow
              key={allStudents.id}
              id={allStudents.id}
              fname={allStudents.fname}
              mname={allStudents.mname}
              lname={allStudents.lname}
              email={allStudents.email}
              phoneNumber={allStudents.phonenumber}
            />
          )) }
          {error && <p>Something went wrong</p>}
        </table>
      </div>
      <Footer />
    </>
  );
}

export default StudentList;
