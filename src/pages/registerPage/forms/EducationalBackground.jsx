import { useFormik } from "formik";
import { educationalBackgroundValidation } from "../validation";
import { FormikInput } from "../../../components/common/FormikInput/FormikInput";
import { useRegistrationFormState } from "../registrationFormState";
import { BiRightArrowAlt } from "react-icons/bi";

var initialValues = {
	school_name: "",
	gpa: 0,
	start_date: null,
	end_data: null,
};

export const EducationalBackground = () => {
	const { setEducationalBackground, nextTab } = useRegistrationFormState();
	const formik = useFormik({
		validationSchema: educationalBackgroundValidation,
		initialValues,
		onSubmit: (values) => {
			console.log(values);
			setEducationalBackground(values);
			nextTab();
		},
	});

	return (
		<form
			onSubmit={(e) => formik.handleSubmit(e)}
			className="educational-bg-information"
		>
			<h2>Educational Background</h2>
			<div className="educational-bg-inputs">
				<div className="educational-bg">
					<FormikInput
						name={"school_name"}
						id="school_name"
						label={"School"}
						placeholder={"Enter the name of your school"}
						formik={formik}
					/>
					<FormikInput
						name="gpa"
						type="number"
						id="gpa"
						label="Grade"
						placeholder={"Enter your grade"}
						formik={formik}
					/>
				</div>
				<div className="educational-bg">
					<FormikInput
						name={"start_date"}
						id="start_date"
						label={"Start Date"}
						placeholder={"Enter the Date you started"}
						formik={formik}
						type="date"
					/>
					<FormikInput
						name="end_date"
						type="date"
						id="end_date"
						label="End Date"
						placeholder={"Enter the date you ended"}
						formik={formik}
					/>
				</div>
			</div>
			<button className="submit-button">
				Continue
				<BiRightArrowAlt />
			</button>
		</form>
	);
};
