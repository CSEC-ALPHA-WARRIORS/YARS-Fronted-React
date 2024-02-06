import React, { useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
import NavBar from "../../../components/common/navBar/navBar";
import Footer from "../../../components/common/footer/footer";
import InputField from "../../../components/common/inputField/inputField";
import "./manualPaymentStyle.scss";
import Button from "../../../components/common/button/button";
import defaultIcon from "../../../assets/images/icons8-reciept-96.png";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import PaymentServices from "../../../utilities/api/payment";
import { Loader } from "../../../components/common/loading/loading";
import toast from "react-hot-toast";

const validationSchema = yup.object({
	bank_name: yup
		.string("Enter your bank name")
		.required("Bank name is required"),
	account_number: yup
		.string("Enter your account number")
		.required("Account number is required"),
});

function ManualPayment() {
	const [img, setImage] = useState(null);
	const [imagePreview, setImagePreview] = useState(defaultIcon);
	const [imgUrl, setImgUrl] = useState("");
	const navigate = useNavigate();

	const total_credit_hours =
		window.localStorage.getItem("total_credit_hours");

	const amount = total_credit_hours * 150;

	const imageHandler = (event) => {
		const selectedImage = event.target.files ? event.target.files[0] : null;
		setImage(selectedImage);

		if (selectedImage) {
			const reader = new FileReader();
			reader.onload = () => {
				setImagePreview(reader.result);
			};
			reader.readAsDataURL(selectedImage);
		}
	};

	const { handleBlur, errors, touched, handleChange, values, handleSubmit } =
		useFormik({
			initialValues: {
				bank_name: "",
				account_number: "",
			},
			validationSchema,
			onSubmit: async (values) => {
				let url;
				await uploadMutation.mutateAsync(null, {
					onSuccess: (data) => {
						console.log({ data });
						url = data;
					},
					onError: (error) => {
						if (error?.response?.data) {
							toast.error(error?.response?.data?.message);
						} else {
							toast.error("Unable to Process Payment");
						}
					},
				});
				console.log({ url });

				await paymentMutation.mutateAsync(url);
			},
		});

	const uploadMutation = useMutation({
		mutationKey: ["upload-receipt"],
		mutationFn: () => PaymentServices.uploadReceipt(img),
	});

	const paymentMutation = useMutation({
		mutationKey: ["pay-manual"],
		mutationFn: (url) => PaymentServices.payManually(amount, url),
		onSuccess: (data) => {
			navigate("/payment-successful");
		},
	});

	return (
		<>
			<NavBar />
			<div className="Manual-payment-container">
				<form onSubmit={handleSubmit}>
					<h1>Manual Payment</h1>
					<div className="inputfield-container">
						<InputField
							label="Bank Name"
							name="bank_name"
							value={values.bank_name}
							onChange={handleChange}
							onBlur={handleBlur}
							error={
								errors.bank_name && touched.bank_name
									? errors.bank_name
									: ""
							}
							placeholder="Enter a Bank you complete your Payment"
						/>
						{}
						<InputField
							label="Account Number"
							name="account_number"
							value={values.account_number}
							onChange={handleChange}
							onBlur={handleBlur}
							error={
								errors.account_number && touched.account_number
									? errors.account_number
									: ""
							}
							placeholder="Enter your bank Account"
						/>
					</div>
					<div className="upload-receipt-container">
						<label className="ppimage" htmlFor="profileImg">
							<img
								className="receipt-review"
								src={imagePreview}
								alt=""
							/>
						</label>
						<label htmlFor="">Upload Receipt</label>
						<label
							className="upload-receipt"
							htmlFor="upload-receipt"
						>
							<BiCloudUpload className="upload-icon" />
							<h2>Upload</h2>
						</label>
						<input
							type="file"
							id="upload-receipt"
							onChange={imageHandler}
						/>
					</div>
					<Button
						text={
							uploadMutation.isPending ? (
								<>
									<Loader color={"white"} w="10px" h="14px" />
									Uploading Receipt..
								</>
							) : paymentMutation.isPending ? (
								<>
									<Loader color={"white"} w="10px" h="10px" />
									Saving Data..
								</>
							) : (
								"FINISH REGISTRATION"
							)
						}
						className="white blue-bg small-btn flex flex-row items-center justify-center"
					/>
				</form>
			</div>
			<Footer />
		</>
	);
}

export default ManualPayment;
