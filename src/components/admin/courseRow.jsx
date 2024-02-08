import React from "react";
import "./adminStyle.scss";
import { Link } from "react-router-dom";
import Button from "../common/button/button";
import {  useMutation, useQueryClient } from "@tanstack/react-query";
import CoursesServes from "../../utilities/api/Course";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
function CourseRow({
  id,
  delId,
  title,
  code,
  year,
  semester,
  program,
  credit_hours,
  updatehandlerFun
},) {
  
  const queryclient = useQueryClient();

  //delete handler mutation

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
  updatehandlerFun
  }
  Course.id = delId;
  const handleClick = (event) => {
    del_course.mutate(delId);
    if (del_course.error) {
      toast.error(del_course.error.message);
    }
  };
  const handleUpdate = (event) => {
    updatehandlerFun(Course);
  };
 
  return (
    <>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
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
