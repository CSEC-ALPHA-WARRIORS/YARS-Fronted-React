import axios from "axios";
import { baseUrl, withAdminTokenHeader } from "./api.config";

const getAllAdmins = async () => {
  const admins = await axios
    .get(
      `${baseUrl}` + "/admins",
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
const deleteAdmin = async (id) => {
  console.log("chek");
  const admins = await axios
    .delete(
      `${baseUrl}` + `/admin/remove/` + id,
      withAdminTokenHeader({
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
    )
    .then((res) => {
      res.data;
    });

  return admins;
};
const addAdmin = async (data) => {
  console.log("chek");
  const admins = await axios
    .post(
      `${baseUrl}` + `/admin/add`,
      data,
      withAdminTokenHeader({
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
    )
    .then((res) => {
      res.data;
    });

  return admins;
};
const AdminService = { getAllAdmins, deleteAdmin, addAdmin };
export default AdminService;
