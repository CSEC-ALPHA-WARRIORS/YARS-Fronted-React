import React from "react";
import { Link } from "react-router-dom";
import "./adminStyle.scss";
import Swal from 'sweetalert2'
import  removeStudent  from "../../utilities/api/student";
import { useQueryClient } from "@tanstack/react-query";
import StudentService from "../../utilities/api/student";


// or via CommonJS


function StudentRow({ id, fname, mname, lname, email, phoneNumber }) {
const client = useQueryClient()
  const deleteStudent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       StudentService.removeStudent(id);
client.invalidateQueries(['students'])
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    console.log(id)
  }
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
        <td><button onClick={()=>deleteStudent(id)} >Delete</button></td>
      </tbody>
    </>
  );
}

export default StudentRow;
