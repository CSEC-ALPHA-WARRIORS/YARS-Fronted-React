import { Formik, useFormik } from "formik";
import { FormikInput } from "../../../components/common/FormikInput/FormikInput";
import { emergencyContactValidation } from "../validation";
import { BiRightArrowAlt } from "react-icons/bi";
import { useRegistrationFormState } from "../registrationFormState";

const initialValues = {
	fname: "",
	mname: "",
	lname: "",
	phonenumber: "",
	relationship: "",
};

export const EmergencyContact = () => {
	const { setEmergencyContact, nextTab } = useRegistrationFormState();
	const formik = useFormik({
		initialValues,
		validationSchema: emergencyContactValidation,
		onSubmit: (values) => {
			setEmergencyContact(values);
			nextTab();
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className="emergency-information">
			<h2>Emergency Contact Information</h2>
			<div className="emergency-inputs">
				<div className="emergency">
					<FormikInput
						formik={formik}
						name="fname"
						id="fname"
						label="First Name"
						placeholder={"Enter First Name"}
					/>
					<FormikInput
						formik={formik}
						name="mname"
						id="mname"
						label="Middle Name"
						placeholder={"Enter Middle Name"}
					/>
					<FormikInput
						formik={formik}
						name="lname"
						id="lname"
						label="Last Name"
						placeholder={"Enter Last Name"}
					/>
				</div>
				<div className="emergency">
					<div className="selection-container">
						<label htmlFor="relationship">Relationship</label>
						<select
							value={formik.values["relationship"]}
							onChange={formik.handleChange}
							name="relationship"
							id="relationship"
							className="selection"
						>
							<option value="Father">Father</option>
							<option value="Mother">Mother</option>
							<option value="Legal Guardian">
								Legal Guardian
							</option>
						</select>
						{formik.errors.erelationship ? (
							<p className="error-message">
								{formik.errors.relationship}
							</p>
						) : null}
					</div>
					<FormikInput
						name={"phonenumber"}
						id={"phonenumber"}
						formik={formik}
						label={"Phone Number"}
						placeholder={"Enter Phone Number"}
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
