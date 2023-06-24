import React from "react";
import './adminStyle.scss'
import { Link } from "react-router-dom";
import Button from "../common/button/button";
function CourseRow() {
  return (
    <>
      <tbody>
        <td>1</td>
        <td>
          <Link className="stud-name" to="/admin/admins-list">
            OOP
          </Link>{" "}
        </td>
        <td>SENG2201</td>
        <td>2nd</td>
        <td>2nd</td>
        <td>Software</td>
        <td className="credit-hour">4</td>
        <td>
          <Button text="Delete" className="small-small-btn" />
        </td>
      </tbody>
    </>
  );
}

export default CourseRow;
