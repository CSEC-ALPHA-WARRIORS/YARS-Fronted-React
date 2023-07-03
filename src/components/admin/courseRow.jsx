import React from "react";
import "./adminStyle.scss";
import { Link } from "react-router-dom";
import Button from "../common/button/button";
import axios from "axios";
function CourseRow({
  id,
  delId,
  title,
  code,
  year,
  semester,
  program,
  creditHr,
}) {
  const handleClick = (event) => {
    axios
      .delete(`http://localhost:8000/api/course/remove/${delId}`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <tbody>
        <td>{id}</td>
        <td>
          <Link className="stud-name" to="/admin/admins-list">
            {title}
          </Link>{" "}
        </td>
        <td>{code}</td>
        <td>{year}</td>
        <td>{semester}</td>
        <td>{program}</td>
        <td className="credit-hour">{creditHr}</td>
        <td>
          <Button
            text="Delete"
            onClick={handleClick}
            className="small-small-btn"
          />
        </td>
      </tbody>
    </>
  );
}

export default CourseRow;
