import React from "react";
import './adminStyle.scss'
import { Link } from "react-router-dom";
import Button from "../common/button/button";
function PaymentRow({id,registration_id,amount,type,receipt_url,created_at,status}) {
  return (
    <>
      <tbody>
        <td>{id}</td>
        <td>
          <Link className="stud-name" to="/admin/admins-list">
            {registration_id}
          </Link>{" "}
        </td>
        <td>{amount}</td>
        <td>{type}</td>
        <td>{receipt_url}</td>
        <td>{created_at}</td>
        <td>{status}</td>
        <td>
          <Button text="Verify" className="small-small-btn green-bg white" />
        </td>
      </tbody>
    </>
  );
}

export default PaymentRow;
