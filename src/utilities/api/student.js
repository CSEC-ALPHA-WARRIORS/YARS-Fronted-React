import axios from "axios";
import { baseUrl, withAdminTokenHeader } from "./api.config";


const getStudents = async () => {
    return await axios.get(`${baseUrl}/api/students`, withAdminTokenHeader()).then((res)=>res.data);
}

const removeStudent = async (id) => {   
    return await axios.delete(`${baseUrl}/api/student/remove/${id}`, withAdminTokenHeader()) ;
  }
const  StudentService = {getStudents, removeStudent}

export default StudentService;