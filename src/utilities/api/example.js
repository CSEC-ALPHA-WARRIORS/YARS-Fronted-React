import axios from "axios";
import { baseUrl, withAdminTokenHeader } from "./api.config";

const getAllAdmins = async () => {
	const admins = await axios
		.get(
			`${baseUrl}`,
			withAdminTokenHeader({
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			})
		)
		.then((res) => res.data);
	return admins;
};

export default AdminService = { getAllAdmins };
