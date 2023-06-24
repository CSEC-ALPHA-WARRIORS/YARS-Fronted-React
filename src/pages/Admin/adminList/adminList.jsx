import React from "react";
import AdminNavBar from "../../../components/admin/AdminNavBar";
import AdminRow from "../../../components/admin/adminRow";
import "./adminListStyle.scss";
import InputField from "../../../components/common/inputField/inputField";
import Footer from "../../../components/common/footer/footer";
import Button from "../../../components/common/button/button";
function AdminList() {
  return (
    <>
      <AdminNavBar />
      <div className="admin-container">
        <h1>Admins</h1>
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
          <AdminRow />
          <AdminRow />
          <AdminRow />
          <AdminRow />
          <AdminRow />
          <AdminRow />
          <AdminRow />
          <AdminRow />
        </table>

        <div className="add-admin-container">
          <h1>Add Admin</h1>
          <div className="admin-input-container">
            <div className="row">
              <InputField
                label="First Name"
                placeholder="Enter First Name "
                type="text"
              />
              <InputField
                label="Middle Name"
                placeholder="Enter Middle Name "
                type="text"
              />
            </div>
            <div className="row">
              <InputField
                label="Last Name"
                placeholder="Enter Last Name "
                type="text"
              />
              <InputField
                label="Email"
                placeholder="Enter Email "
                type="text"
              />
            </div>
            <div className="row">
              <InputField
                label="Phone Number"
                placeholder="Enter Phone Number"
                type="text"
              />
              <div className="selection-container">
                <label htmlFor="type">Type</label>
                <select
                  name="type"
                  id="type"
                  // value={values.relationship}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  className="selection"
                >
                  <option value="Registrar Employee">Registrar Employee</option>
                  <option value="Extension">Mother</option>
                  <option value="Night">Legal Guardian</option>
                </select>
              </div>
            </div>
          </div>
          <Button  className="small-btn blue-black-bg white" text="REGISTER"/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AdminList;
