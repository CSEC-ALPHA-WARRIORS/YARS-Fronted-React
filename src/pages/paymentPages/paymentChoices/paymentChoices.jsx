import React from "react";
import NavBar from "../../../components/common/navBar/navBar";
import Footer from "../../../components/common/footer/footer";
import Button from "../../../components/common/button/button";
import axios from "axios";
import "./paymentChoiceStyle.scss";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import PaymentServices from "../../../utilities/api/payment";
import { Loader } from "../../../components/common/loading/loading";

function PaymentChoices() {
	const courses = JSON.parse(window.localStorage.getItem("courses"));
	const total_credit_hours =
		window.localStorage.getItem("total_credit_hours");
	const amount = total_credit_hours * 150;

	const payWithChapaMutation = useMutation({
		mutationKey: ["pay-with-chapa"],
		mutationFn: (amount) => PaymentServices.payWithChapa(amount),
		onSuccess: (data) => {
			window.location.href = data;
		},
	});

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
				</table>
				<br />
				<span>Total credit hour: {total_credit_hours}</span>
				<span>Amount: {amount} birr</span>
				<br />
				<div className="payment-buttons">
					<Button
						disabled={payWithChapaMutation.isPending}
						className="white blue-bg flex flex-row"
						text={
							payWithChapaMutation.isPending ? (
								<>
									<Loader
										width="30px"
										height="36px"
										color={"white"}
									/>
									Processing Payment
								</>
							) : (
								"PAY WITH CHAPA"
							)
						}
						onClick={() => payWithChapaMutation.mutate(amount)}
					/>
					<Link to="/manual-payment">
						<Button
							className="white blue-bg"
							text="MANUAL PAYMENT"
						/>
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default PaymentChoices;
