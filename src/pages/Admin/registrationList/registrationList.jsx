import React from "react";
import AdminNavBar from "../../../components/admin/AdminNavBar";
import RegistrationRow from "../../../components/admin/registrationRow";
import Footer from "../../../components/common/footer/footer";
import './registrationListStyle.scss'
function RegistrationList() {
  return (
    <>
      <AdminNavBar />
      <div className="registration-container">
        <h1>Courses</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>student id</th>
              <th>YEAR</th>
              <th>SEMESTER</th>
              <th>PROGRAM</th>
              <th>LEVEL</th>
              <th>REGISTERED AT</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <RegistrationRow />
          <RegistrationRow />
          <RegistrationRow />
          <RegistrationRow />
          <RegistrationRow />
          <RegistrationRow />
          <RegistrationRow />
          <RegistrationRow />
        </table>
      </div>
      <Footer/>
    </>
  );
}

export default RegistrationList;
