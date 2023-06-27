import React from "react";
import AdminNavBar from "../../../components/admin/AdminNavBar";
import Footer from "../../../components/common/footer/footer";
import './paymentListStyle.scss'
import PaymentRow from "../../../components/admin/paymenRow";
function PaymentList() {
  return (
    <>
      <AdminNavBar />
      <div className="payment-container">
        <h1>Courses</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>registration id</th>
              <th>amount</th>
              <th>type</th>
              <th>receipt url</th>
              <th>paid at</th>
              <th>status</th>
              <th>action</th>
            </tr>
          </thead>
          <PaymentRow />
          <PaymentRow />
          <PaymentRow />
          <PaymentRow />
          <PaymentRow />
          <PaymentRow />
          <PaymentRow />
          <PaymentRow />
        </table>
      </div>
      <Footer/>
    </>
  );
}

export default PaymentList;
