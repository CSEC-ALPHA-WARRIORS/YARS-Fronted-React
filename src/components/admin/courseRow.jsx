import React from "react";
import "./adminStyle.scss";
import { Link } from "react-router-dom";
import Button from "../common/button/button";
import {  useMutation, useQueryClient } from "@tanstack/react-query";
import CoursesServes from "../../utilities/api/Course";
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
  const queryclient = useQueryClient();
  const del_course = useMutation({
    mutationFn: CoursesServes.deleteCourses,
    onSuccess: () => {
      queryclient.invalidateQueries(["Course"]);
    }
  });
  const handleClick = (event) => {
    del_course.mutate(delId);
  };
  const handleUpdate = (event) => {
     console.log("update")
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
          <Button
            text="Update"
            onClick={handleUpdate}
            className="blue-bg white small-small-btn"
          />
        </td>
      </tbody>
    </>
  );
}

export default CourseRow;
