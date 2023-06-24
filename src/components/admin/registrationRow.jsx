import React from "react";
import './adminStyle.scss'
import { Link } from "react-router-dom";
import Button from "../common/button/button";
function RegistrationRow() {
  return (
    <>
      <tbody>
        <td>1</td>
        <td>
          <Link className="stud-name" to="/admin/admins-list">
            1
          </Link>{" "}
        </td>
        <td>2nd</td>
        <td>2nd</td>
        <td>Software</td>
        <td>Degree</td>
        <td>8:10AM</td>
        <td>Pending</td>
        <td>
          <Button text="Verify" className="small-small-btn green-bg white" />
        </td>
      </tbody>
    </>
  );
}

export default RegistrationRow;
