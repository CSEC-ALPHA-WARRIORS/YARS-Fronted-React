import axios from "axios";
import { DummyProfile } from "../../assets/images";
import { CLOUDINARY_UPLOAD_PRESET, CLOUD_NAME } from "../config/env";
import { baseUrl } from "./api.config";

const uploadImage = async (image) => {
	var bodyFormData = new FormData();
	bodyFormData.append("file", image ? image : DummyProfile);
	bodyFormData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
	var response = await axios
		.post(
			`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
			bodyFormData
		)
		.then((res) => res.data);

	return response.secure_url;
};

const register = async (data) => {
	const response = await axios
		.post(baseUrl + "/api/register", data)
		.then((res) => res.data);
	return response;
};

export default {
	uploadImage,
	register,
};
