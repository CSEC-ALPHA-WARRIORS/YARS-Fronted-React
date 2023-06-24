import React from "react";
import './adminStyle.scss'
import { Link } from "react-router-dom";
import Button from "../common/button/button";
function PaymentRow() {
  return (
    <>
      <tbody>
        <td>1</td>
        <td>
          <Link className="stud-name" to="/admin/admins-list">
            1
          </Link>{" "}
        </td>
        <td>200ETB</td>
        <td>Regular</td>
        <td>http://127.0.0.1:5173/admin/payment</td>
        <td>2:00PM</td>
        <td>Paid</td>
        <td>
          <Button text="Verify" className="small-small-btn green-bg white" />
        </td>
      </tbody>
    </>
  );
}

export default PaymentRow;
