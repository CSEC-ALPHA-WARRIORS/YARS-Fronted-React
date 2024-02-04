import axios from "axios";
import { baseUrl, withAdminTokenHeader } from "./api.config";

const getAllCourses = async () => {
	console.log("herer")
	const Coureses = await axios
		.get(
			`${baseUrl}`+'/courses',
			withAdminTokenHeader({
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
               
				},
			})
		)
		.then((res) => res.data);
	return Coureses;
};

export default getAllCourses;
