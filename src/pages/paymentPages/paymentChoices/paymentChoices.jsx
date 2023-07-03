import React from "react";
import NavBar from "../../../components/common/navBar/navBar";
import Footer from "../../../components/common/footer/footer";
import Button from "../../../components/common/button/button";
import axios from "axios";
import "./paymentChoiceStyle.scss";
import { Link } from "react-router-dom";

function PaymentChoices() {

  const courses = JSON.parse(window.localStorage.getItem("courses"));

  const total_credit_hours =
  window.localStorage.getItem("total_credit_hours");

  const amount = total_credit_hours * 150;

  const pay = () => {

    const token = window.localStorage.getItem("token");
    const reg_id = window.localStorage.getItem("registration_id");

    const data = {
      registration_id: reg_id,
      amount: amount,
      type: "chapa",
    };
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api/pay',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer ' + JSON.parse(token)
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      window.localStorage.setItem("payment_id", response.data.pdata.id);
      window.location.replace(response.data.url);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <NavBar />
      <div className="payment-choices-container">
        <h1>Payment</h1>
        <table className="courses">
          <tr>
            <th>Title</th>
            <th>Course code</th>
            <th>Credit hours</th>
          </tr>
          {courses.map((course) => {
            return (
              <tr>
                <td>{course.title}</td>
                <td>{course.code}</td>
                <td>{course.credit_hours}</td>
              </tr>
            );
          })}
        </table><br/>
        <span>Total credit hour: {total_credit_hours}</span>
        <span>Amount: {amount} birr</span><br/>
        <div className="payment-buttons">
          <Button
            className="white blue-bg"
            text="PAY WITH CHAPA"
            onClick={pay}
          />
          <Link to="/manual-payment">
            <Button className="white blue-bg" text="MANUAL PAYMENT" />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentChoices;
