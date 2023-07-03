import React from "react";
import { Link } from "react-router-dom";
import "./adminStyle.scss";
function StudentRow({ id, fname, mname, lname, email, phoneNumber }) {
  return (
    <>
      <tbody>
        <td>{id}</td>
        <td>
          <Link className="stud-name" to="/admin/student-profile">
            {fname}
          </Link>
        </td>
        <td>{mname}</td>
        <td>{lname}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
      </tbody>
    </>
  );
}

export default StudentRow;
