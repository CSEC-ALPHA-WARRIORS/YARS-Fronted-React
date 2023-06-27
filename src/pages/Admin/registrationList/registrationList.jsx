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
              <th>Year</th>
              <th>semester</th>
              <th>program</th>
              <th>level</th>
              <th>registered at</th>
              <th>status</th>
              <th>action</th>
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
