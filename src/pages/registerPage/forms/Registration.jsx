import { useFormik } from "formik";
import { registrationValidation } from "../validation";
import { BiRightArrowAlt } from "react-icons/bi";
import { useRegistrationFormState } from "../registrationFormState";

var initialValues = {
	year: "",
	semester: "",
	program: "",
	level: "",
};
export const Registration = () => {
	const { setRegistration, nextTab } = useRegistrationFormState();
	const { errors, values, handleBlur, handleChange, handleSubmit, touched } =
		useFormik({
			initialValues,
			validationSchema: registrationValidation,
			onSubmit: (values) => {
				setRegistration(values);
				nextTab();
			},
		});
	return (
		<form className="registration-information" onSubmit={handleSubmit}>
			<h2>Registration</h2>
			<div className="registration-inputs">
				<div className="registration">
					<div className="selection-container">
						<label htmlFor="type">Year</label>
						<select
							name="year"
							id="year"
							value={values.year}
							onChange={handleChange}
							onBlur={handleBlur}
							className="selection"
						>
							<option value="" disabled>
								Select Year
							</option>
							<option value="1st">1st</option>
							<option value="2nd">2nd</option>
							<option value="3rd">3rd</option>
							<option value="4th">4th</option>
						</select>
						{errors.year && touched.year ? errors.year : ""}
					</div>
					<div className="selection-container">
						<label htmlFor="type">Semester</label>
						<select
							name="semester"
							id="semester"
							value={values.semester}
							onChange={handleChange}
							onBlur={handleBlur}
							className="selection"
						>
							<option value="" disabled>
								Select Semester
							</option>
							<option value="1st">1st</option>
							<option value="2nd">2nd</option>
						</select>
						{errors.semester && touched.semester
							? errors.semester
							: ""}
					</div>
				</div>
				<div className="registration">
					<div className="selection-container">
						<label htmlFor="type">Program</label>
						<select
							name="program"
							id="program"
							value={values.program}
							onChange={handleChange}
							onBlur={handleBlur}
							className="selection"
						>
							<option value="" disabled>
								Select Program
							</option>
							<option value="Software Engineering">
								Software Engineering
							</option>
							<option value="Computer Science and Engineering">
								Computer Science and Engineering
							</option>
						</select>
						{errors.program && touched.program
							? errors.program
							: ""}
					</div>
					<div className="selection-container">
						<label htmlFor="type">Level</label>
						<select
							placeholder="Select Level"
							name="level"
							id="level"
							value={values.level}
							onChange={handleChange}
							onBlur={handleBlur}
							className="selection"
						>
							<option value="" disabled>
								Select Level
							</option>
							<option value="BSC">Bachelor degree</option>
							<option value="MSC">Masters degree</option>
						</select>
						{errors.level && touched.level ? errors.level : ""}
					</div>
				</div>
			</div>

			<button className="submit-button">
				Continue
				<BiRightArrowAlt />
			</button>
		</form>
	);
};
