import React from "react";
import { useState , useEffect } from "react";
import AdminNavBar from "../../../components/admin/AdminNavBar";
import Footer from "../../../components/common/footer/footer";
import "./paymentListStyle.scss";
import PaymentRow from "../../../components/admin/paymenRow";
import axios from "axios";
import { Loader } from "../../../components/common/loading/loading";
import getAllPayments from '../../../utilities/api/payment';
import paymentService from "../../../utilities/api/payment";
import  {useQuery} from "@tanstack/react-query";
function PaymentList() {
  const [paymentList, setPaymentList] = useState([]);

  const {data, isLoading, error} = useQuery({
    queryKey: ["payments"],
    queryFn: () => paymentService.getAllPayments(),
  })

 

  // useEffect(() => {
  //   getAllPayments().then((response) => {
  //     setPaymentList(response);
  //     console.log(response);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
    
    // axios
    //   .get("http://localhost:8000/api/payments")
    //   .then((response) => {
    //     setPaymentList(response.data);
    //     console.log(paymentList);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  // }, []);
  return (
    <>
      <AdminNavBar />
      <div className="payment-container">
        <h1>Payments</h1>
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
          {
           isLoading ? <Loader />:!error? data.map((payment,index)=>(
              <PaymentRow 
              id={index+1}
              registration_id={payment.registration_id}
              amount={payment.amount}
              type={payment.type}
              receipt_url={payment.type}
              created_at={payment.created_at}
              status={payment.status}
              
              />
            ))
          :

            <p>Something went wrong</p>   }
          
        </table>
      </div>
      <Footer />
    </>
  );
}

export default PaymentList;
