import React, { useEffect } from "react";
import NavBar from "../../../components/common/navBar/navBar";
import Footer from "../../../components/common/footer/footer";
import Button from "../../../components/common/button/button";
import "./paymentSuccessculStyle.scss";
import axios from "axios";

function PaymentSuccessful() {
  useEffect(() => {
    function verify() {
      const params = new URLSearchParams(window.location.search);
      let status = params.get('status');

      const token = window.localStorage.getItem("token");
      const payment_id = window.localStorage.getItem("payment_id");

      if (status && payment_id) {
        let config = {
          method: "put",
          maxBodyLength: Infinity,
          url: `http://localhost:8000/api/verify/${payment_id}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + JSON.parse(token),
          }
        };

        axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    verify();
  }, []);
  return (
    <>
      <NavBar />
      <div className="payment-successful-container">
        <h1>Your Registration Application is Under Review</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Egestas suspendisse parturient
          bibendum dui urna imperdiet sit pulvinar. Libero ut sit potenti
          pellentesque mattis id nunc adipiscing. Massa lacinia euismod nibh
          scelerisque dignissim. Massa tristique imperdiet lorem tincidunt ut.
          Et hac ornare dolor ac urna sodales netus proin quisque. Augue neque
          imperdiet urna posuere porttitor. Faucibus bibendum turpis dui quis
          tortor pellentesque id dignissim. Quis nibh.
        </p>
        <div className="Successful-buttons">
          <Button className="white blue-bg" text="THANKS FOR CHOOSING US" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentSuccessful;
