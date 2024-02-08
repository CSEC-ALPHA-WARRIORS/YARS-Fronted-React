import axios from "axios";
import { baseUrl, withAdminTokenHeader } from "./api.config";
//get all course request handler
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


//delete request handler


const deleteCourses = async (id) => {
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
const addCourses = async (Course) => {
	console.log(Course);
	const delCoureses = await axios
		.post(
			`${baseUrl}`+'/course/add',Course,
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
const editCourses = async (Course) => {
	console.log(Course);
	const ediCoureses = await axios
		.put(
			`${baseUrl}`+'/course/edit/'+Course.id,Course,
			withAdminTokenHeader({
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
               
				},
			})
		)
		.then((res) => res.data);
	return ediCoureses;
};
const CoursesServes = { getAllCourses,deleteCourses,addCourses,editCourses };
export default CoursesServes;
