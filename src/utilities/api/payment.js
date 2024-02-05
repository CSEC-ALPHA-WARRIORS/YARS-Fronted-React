import axios from "axios";
import { baseUrl, withAdminTokenHeader } from "./api.config";

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

const PaymentServices = {
	payWithChapa,
};

export default PaymentServices;
