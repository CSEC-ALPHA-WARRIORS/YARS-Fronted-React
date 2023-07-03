import React from "react";
import "./adminStyle.scss";
import { Link } from "react-router-dom";
import Button from "../common/button/button";
function RegistrationRow({
  id,
  newId,
  year,
  semester,
  program,
  level,
  registered_at,
  status,
}) {
  return (
    <>
      <tbody>
        <td>{newId}</td>
        <td>
          <Link className="stud-name" to="/admin/admins-list">
            {id}
          </Link>{" "}
        </td>
        <td>{year}</td>
        <td>{semester}</td>
        <td>{program}</td>
        <td>{level}</td>
        <td>{registered_at}</td>
        <td>{status}</td>
        <td>
          <Button text="Verify" className="small-small-btn green-bg white" />
        </td>
      </tbody>
    </>
  );
}

export default RegistrationRow;
