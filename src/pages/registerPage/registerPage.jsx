import React from "react";
import NavBar from "../../components/common/navBar/navBar";
import "./registerStyle.scss";
import Footer from "../../components/common/footer/footer";
import { Step, Stepper } from "react-form-stepper";
import { PersonalInformation } from "./forms/PersonalInformation";
import { useRegistrationFormState } from "./registrationFormState";
import { EducationalBackground } from "./forms/EducationalBackground";
import { EmergencyContact } from "./forms/EmergencyContact";
import { Registration } from "./forms/Registration";
import { Authentication } from "./forms/Authentication";

const steps = [
	<PersonalInformation />,
	<EducationalBackground />,
	<EmergencyContact />,
	<Registration />,
	<Authentication />,
];

function RegisterPage() {
	const { activeTab } = useRegistrationFormState();

	return (
		<>
			<NavBar />
			<div className="register-page">
				<div className="register-description">
					<h1>Register</h1>
					<p>Fill the following forms</p>
				</div>
				<Stepper
					activeStep={activeTab}
					style={{
						fontFamily: "raleway",
					}}
					styleConfig={{
						activeBgColor: "#023047",
						completedBgColor: "#023037",
						labelFontSize: "16px",
					}}
				>
					<Step label="Personal Information"></Step>
					<Step label="Educational Background"></Step>
					<Step label="Emergency Contact"></Step>
					<Step label="Registration"></Step>
					<Step label="Authentication"></Step>
				</Stepper>
				<div className="step-container">{steps[activeTab]}</div>
			</div>
			<Footer />
		</>
	);
}
export default RegisterPage;
