import React from "react";
import "./adminStyle.scss";
import { Link } from "react-router-dom";
import Button from "../common/button/button";
import {  useMutation, useQueryClient } from "@tanstack/react-query";
import CoursesServes from "../../utilities/api/Course";
import { useState } from "react";
function CourseRow({
  id,
  delId,
  title,
  code,
  year,
  semester,
  program,
  credit_hours,
  testfun
},) {
  const queryclient = useQueryClient();
  const del_course = useMutation({
    mutationFn: CoursesServes.deleteCourses,
    onSuccess: () => {
      queryclient.invalidateQueries(["Course"]);
    }
  });
  const Course = {
  id,
  delId,
  title,
  code,
  year,
  semester,
  program,
  credit_hours,
  testfun
  }
  Course.id = delId;
  const handleClick = (event,) => {
    del_course.mutate(delId);
  };
  const handleUpdate = (event) => {
    testfun(Course);
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
        <td className="credit-hour">{credit_hours}</td>
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
