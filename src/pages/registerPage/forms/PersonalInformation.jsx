import { useState } from "react";
import { useFormik } from "formik";
import { personalInformationValidation } from "../validation";
import { FormikInput } from "../../../components/common/FormikInput/FormikInput";
import { DummyProfile } from "../../../assets/images";
import { useMutation } from "@tanstack/react-query";
import registration from "../../../utilities/api/registration";
import { useRegistrationFormState } from "../registrationFormState";
import { BiArrowToLeft, BiLeftArrow, BiRightArrowAlt } from "react-icons/bi";
import { Loader } from "../../../components/common/loading/loading";

const personalInformationInitialValues = {
	fname: "",
	mname: "",
	lname: "",
	email: "",
	phonenumber: "",
	city: "",
	woreda: "",
	kebele: "",
	house_no: "",
};

export const PersonalInformation = () => {
	const { setPersonalInfo, setAddress, nextTab } = useRegistrationFormState();
	const [profilePicture, setProfilePicture] = useState(null);
	const [profile_picture_url, setProfilePictureUrl] = useState(undefined);
	const formik = useFormik({
		initialValues: personalInformationInitialValues,
		validationSchema: personalInformationValidation,
		onSubmit: async (values) => {
			let pp;
			await uploadImageMutation.mutateAsync(null, {
				onSuccess: (data) => {
					pp = data;
					setProfilePictureUrl(data);
				},
			});
			const { city, kebele, house_no, woreda, ...personalInfo } = values;
			setAddress({
				city,
				kebele,
				house_no,
				woreda,
			});
			setPersonalInfo({ ...personalInfo, profile_picture_url: pp });
			nextTab();
		},
	});

	const uploadImageMutation = useMutation({
		mutationKey: ["upload-profile-picture"],
		mutationFn: () => registration.uploadImage(profilePicture),
	});

	const imageHandler = (event) => {
		const selectedImage = event.target.files ? event.target.files[0] : null;
		setProfilePicture(selectedImage);
	};

	return (
		<form
			onSubmit={(e) => formik.handleSubmit(e)}
			className="personal-information"
		>
			<div className="personal-information-inputs">
				<div className="img-uploader">
					<label className="ppimage" htmlFor="profileImg">
						<img
							src={
								profilePicture
									? URL.createObjectURL(profilePicture)
									: DummyProfile
							}
							alt=""
						/>
					</label>
					<h2>Upload Profile</h2>
					<input
						id="profileImg"
						type="file"
						onChange={imageHandler}
					/>
				</div>
				<div className="information-inputs">
					<h2 className="subtitle">Personal Information</h2>
					<div className="row-container">
						<FormikInput
							label="First Name"
							type="text"
							id="fname"
							name="fname"
							placeholder="Enter your First Name"
							formik={formik}
						/>
						<FormikInput
							label="Middle Name"
							type="text"
							id="mname"
							name="mname"
							placeholder="Enter your Middle Name"
							formik={formik}
						/>
						<FormikInput
							label="Last Name"
							type="text"
							id="lname"
							name="lname"
							placeholder="Enter your Last Name"
							formik={formik}
						/>
					</div>
					<div className="row-container">
						<FormikInput
							label={"Email"}
							type={"email"}
							id={"email"}
							name={"email"}
							placeholder={"Enter your Email Address"}
							formik={formik}
						/>
						<FormikInput
							label={"Phone Number"}
							type={"text"}
							id={"phonenumber"}
							name={"phonenumber"}
							placeholder={"Enter your Phone Number"}
							formik={formik}
						/>
					</div>
					<h2 className="subtitle">Address Information</h2>
					<div className="row-container">
						<FormikInput
							label={"City"}
							type={"text"}
							id={"city"}
							name={"city"}
							placeholder={"Enter your City"}
							formik={formik}
						/>
						<FormikInput
							label={"Woreda"}
							type={"text"}
							id={"woreda"}
							name={"woreda"}
							placeholder={"Enter your Woreda"}
							formik={formik}
						/>
						<FormikInput
							label={"Kebele"}
							type={"text"}
							id={"kebele"}
							name={"kebele"}
							placeholder={"Enter your Kebele"}
							formik={formik}
						/>
						<FormikInput
							label={"House Number"}
							type={"text"}
							id={"house_no"}
							name={"house_no"}
							placeholder={"Enter your House Number"}
							formik={formik}
						/>
					</div>
				</div>
			</div>
			<button
				className="submit-button"
				disabled={uploadImageMutation.isPending}
			>
				{!uploadImageMutation.isPending ? (
					<>
						Continue
						<BiRightArrowAlt />
					</>
				) : (
					<>
						<Loader width="20px" height={"20px"} />
						Uploading Image
					</>
				)}
			</button>
			<div className="row-container"></div>
		</form>
	);
};
