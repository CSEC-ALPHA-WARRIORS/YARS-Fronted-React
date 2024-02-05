import { useFormik } from "formik";
import { loginValidation } from "../validation";
import { FormikInput } from "../../../components/common/FormikInput/FormikInput";
import { useMutation } from "@tanstack/react-query";
import registration from "../../../utilities/api/registration";
import { useRegistrationFormState } from "../registrationFormState";
import { Loader } from "../../../components/common/loading/loading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

var initialValues = {
	password: "",
	confirm: "",
};

export const Authentication = () => {
	const {
		personal_info,
		address,
		emergency_contact,
		educational_background,
		registration: registrationInfo,
	} = useRegistrationFormState();
	const navigate = useNavigate();

	const registerMutation = useMutation({
		mutationKey: ["register"],
		mutationFn: (values) => registration.register(values),
		onSuccess: (data) => {
			var total_credit_hr = 0;
			data.courses.map((course) => {
				total_credit_hr = total_credit_hr + course.credit_hours;
			});

			window.localStorage.setItem(
				"courses",
				JSON.stringify(data.courses)
			);

			window.localStorage.setItem("token", JSON.stringify(data.token));

			window.localStorage.setItem(
				"student",
				JSON.stringify(data.student)
			);

			window.localStorage.setItem(
				"registration_id",
				JSON.stringify(data.registration.id)
			);

			window.localStorage.setItem("total_credit_hours", total_credit_hr);

			navigate("/payment");
		},
		onError: (error) => {
			console.log(error);
			if (error?.response?.data) {
				toast.error(error.response?.data.toString(), {
					position: "bottom-center",
				});
			}
		},
	});

	const formik = useFormik({
		initialValues,
		validationSchema: loginValidation,
		onSubmit: async (values) => {
			const data = {
				...personal_info,
				type: "Regular",
				password: values.password,
				address,
				educational_background,
				emergency_contact,
				registration: {
					...registrationInfo,
					registered_at: new Date(),
				},
			};
			await registerMutation.mutateAsync(data);
		},
	});

	return (
		<form className="login-information" onSubmit={formik.handleSubmit}>
			<h2>Login Information</h2>
			<div className="login-inputs">
				<FormikInput
					id={"password"}
					name={"password"}
					label="Password"
					type="password"
					placeholder="Enter Password"
					formik={formik}
				/>
				<FormikInput
					id={"confirm"}
					name={"confirm"}
					label="Confirm Password"
					type="password"
					placeholder="Enter Password"
					formik={formik}
				/>
			</div>
			<button
				className="submit-button"
				disabled={registerMutation.isPending}
			>
				{registerMutation.isPending && (
					<Loader width="10px" height="14px" />
				)}
				Complete Registration
			</button>
		</form>
	);
};
