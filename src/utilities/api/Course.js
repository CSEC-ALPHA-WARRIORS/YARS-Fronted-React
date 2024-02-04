import axios from "axios";
import { baseUrl, withAdminTokenHeader } from "./api.config";

const getAllCourses = async () => {
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
const deleteCourses = async (id) => {
	console.log("herer");
	const delCoureses = await axios
		.delete(
			`${baseUrl}`+'/course/remove/'+id,
			withAdminTokenHeader({
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
               
				},
			})
		)
		.then((res) => res.data);
	return delCoureses;
};

const CoursesServes = { getAllCourses,deleteCourses };
export default CoursesServes;
