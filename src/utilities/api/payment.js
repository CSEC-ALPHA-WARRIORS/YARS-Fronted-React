import axios from "axios";
import { baseUrl, withAdminTokenHeader } from "./api.config";

import { CLOUDINARY_UPLOAD_PRESET, CLOUD_NAME } from "../config/env";

const payWithChapa = async (amount) => {
	const token = window.localStorage.getItem("token");
	const reg_id = window.localStorage.getItem("registration_id");

	const data = {
		registration_id: reg_id,
		amount: amount,
		type: "chapa",
	};

	const response = await axios
		.post(
			baseUrl + "/api/pay",
			data,
			withAdminTokenHeader({
				Authorization: `Bearer ${token}`,
			})
		)
		.then((res) => res.data);
	window.localStorage.setItem("payment_id", response.pdata.id);
	window.location.replace(response.url);
	return response.url;
};

const payManually = async (amount, url) => {
	const token = window.localStorage.getItem("token");
	const reg_id = window.localStorage.getItem("registration_id");

	const data = {
		amount: amount,
		receipt_url: url,
		registration_id: reg_id,
		type: "manual",
	};

	return await axios
		.post(
			baseUrl + "/api/pay",
			data,
			withAdminTokenHeader({
				Authorization: `Bearer ${token}`,
			})
		)
		.then((result) => {
			return result.data;
		});
};

const uploadReceipt = async (receipt) => {
	var bodyFormData = new FormData();
	bodyFormData.append("file", receipt ? receipt : "");
	bodyFormData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

	const response = await axios
		.post(
			`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
			bodyFormData
		)
		.then((res) => res.data);
	return response.secure_url;
};

const getAllPayments = async () => {
	const admins = await axios
		.get(
			`${baseUrl}/api/payments`,
			withAdminTokenHeader()
		)
		.then((res) => res.data);
	return admins;
};

const verifyPayment = async (id) => {
 /*response =  await axios.put(`${baseUrl}/api/payment/verify/${id}`,	withAdminTokenHeader(
    
 ))

 return res.data;*/
}

const PaymentServices = {
	payWithChapa,
	payManually,
	uploadReceipt,
  getAllPayments,
  verifyPayment
};

export default PaymentServices;
