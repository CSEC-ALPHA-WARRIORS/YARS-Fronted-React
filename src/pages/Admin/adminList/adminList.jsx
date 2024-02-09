import React, { useEffect, useState } from "react";
import AdminNavBar from "../../../components/admin/AdminNavBar";
import AdminRow from "../../../components/admin/adminRow";
import "./adminListStyle.scss";
import InputField from "../../../components/common/inputField/inputField";
import Footer from "../../../components/common/footer/footer";
import Button from "../../../components/common/button/button";
import axios from "axios";
import { useFormik } from "formik";
import AddAdminValidation from "./AddAdminValidation";
import AdminService from "../../../utilities/api/admin";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
function AdminList() {
  const [adminList, setAdminList] = useState([]);
  const [error, setError] = useState(null);
  const [x, setX] = useState(1);
  let y = 0;
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/admins")
  //     .then((response) => {
  //       setAdminList(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const allAdmins = useQuery({
    queryFn: () => AdminService.getAllAdmins(),
    queryKey: ["admins"],
  });
  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: AdminService.addAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(["admins"]);
    },
  });
  const onSubmit = (event) => {
    const Admin = {
      fname: values.fname,
      mname: values.mname,
      lname: values.lname,
      email: values.email,
      phonenumber: values.phonenumber,
      role: values.role,
    };
    addMutation.mutate(Admin);
  };
  const { handleBlur, errors, touched, handleChange, values, handleSubmit } =
    useFormik({
      initialValues: {
        fname: "",
        mname: "",
        lname: "",
        email: "",
        phonenumber: "",
        role: "registrar_head",
      },
      validationSchema: AddAdminValidation,
      onSubmit,
    });
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
          {allAdmins.data?.map((admins, index) => (
            <AdminRow
              key={admins.id}
              id={index + 1}
              delId={admins.id}
              fname={admins.fname}
              mname={admins.mname}
              lname={admins.lname}
              email={admins.email}
              phoneNumber={admins.phonenumber}
            />
          ))}
        </table>
        <form className="form" action="" onSubmit={handleSubmit}>
          <div className="add-admin-container">
            <h1>Add Admin</h1>
            <div className="admin-input-container">
              <div className="row">
                <InputField
                  label="First Name"
                  placeholder="Enter First Name "
                  type="text"
                  value={values.fname}
                  error={errors.fname && touched.fname ? errors.fname : ""}
                  id="fname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <InputField
                  label="Middle Name"
                  placeholder="Enter Middle Name "
                  type="text"
                  value={values.mname}
                  error={errors.mname && touched.mname ? errors.mname : ""}
                  id="mname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="row">
                <InputField
                  label="Last Name"
                  placeholder="Enter Last Name "
                  type="text"
                  value={values.lname}
                  error={errors.lname && touched.lname ? errors.lname : ""}
                  id="lname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <InputField
                  label="Email"
                  placeholder="Enter Email "
                  type="text"
                  value={values.email}
                  error={errors.email && touched.email ? errors.email : ""}
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="row">
                <InputField
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                  type="text"
                  value={values.phonenumber}
                  error={
                    errors.phonenumber && touched.phonenumber
                      ? errors.phonenumber
                      : ""
                  }
                  id="phonenumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="selection-container">
                  <label htmlFor="type">Type</label>
                  <select
                    name="type"
                    id="type"
                    value={values.role}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="selection"
                  >
                    <option value="registrar_head">Registrar Head</option>
                    <option value="registrar_employee">
                      Registrar Employee
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <Button className="small-btn blue-black-bg white" text="REGISTER" />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AdminList;
