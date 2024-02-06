import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/button/button";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AdminService from "../../utilities/api/admin";
function AdminRow({ id, delId, fname, mname, lname, email, phoneNumber }) {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: AdminService.deleteAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(["admins"]);
    },
  });
  const handleClick = () => {
    deleteMutation.mutate(delId);
  };
  return (
    <>
      <tbody>
        <td>{id}</td>
        <td>
          <Link className="stud-name" to="/admin/admins-list">
            {fname}
          </Link>{" "}
        </td>
        <td>{mname}</td>
        <td>{lname}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
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

export default AdminRow;
