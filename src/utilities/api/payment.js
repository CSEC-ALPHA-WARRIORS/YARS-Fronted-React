import axios from "axios";
import { baseUrl, withAdminTokenHeader } from "./api.config";

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
 response =  await axios.put(`${baseUrl}/api/payment/verify/${id}`,	withAdminTokenHeader(
    
))

return res.data;
}

const paymentService = {getAllPayments, verifyPayment}
export default paymentService;
