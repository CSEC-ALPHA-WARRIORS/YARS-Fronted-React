import * as yup from "yup";
const alphabetRule = /^[a-zA-Z]+$/;
const ethiopianPhoneRegex = /^(\+251|251|0)?9[0-9]{8}$/;

export const personalInformationValidation = yup.object().shape({
	fname: yup
		.string()
		.max(15)
		.min(3)
		.required("First Name required")
		.matches(alphabetRule, { message: "First Name must be only alphabet" }),
	mname: yup
		.string()
		.max(15)
		.min(3)
		.required("Middle Name is required")
		.matches(alphabetRule, {
			message: "Middle Name must be only alphabet",
		}),
	lname: yup
		.string()
		.max(15)
		.min(3)
		.required("Last Name is required")
		.matches(alphabetRule, { message: "Last Name must be only alphabet" }),
	email: yup
		.string()
		.max(25)
		.email("Please enter valid email")
		.required("Email is required"),
	phonenumber: yup
		.string()
		.matches(ethiopianPhoneRegex, {
			message: "Please enter valid phone number",
		})
		.required("Phone number is required"),
	profile_picture_url: yup.string(),
	city: yup.string().max(15).required("City name is required"),
	woreda: yup.string().max(15).required("Woreda name is required"),
	kebele: yup.string().max(15).required("kebele is required"),
	house_no: yup.string().max(10).required("House number is required"),
});

export const educationalBackgroundValidation = yup.object().shape({
	school_name: yup.string().max(50).required("School name is required"),
	start_date: yup
		.date()
		.min(1900)
		.max(new Date().getFullYear(), "Date must be before the current year")
		.required("please enter your starting date"),
	end_date: yup
		.date()
		.min(yup.ref("start_date"), "End date must be after start date")
		.max(new Date().getFullYear(), "Date must be before the current year")
		.required("please enter your starting date"),
	gpa: yup.number().required("Your Grade is required"),
});

export const emergencyContactValidation = yup.object().shape({
	fname: yup
		.string()
		.max(15)
		.min(3)
		.required("First Name required")
		.matches(alphabetRule, { message: "First Name must be only alphabet" }),
	mname: yup
		.string()
		.max(15)
		.min(3)
		.required("Middle Name is required")
		.matches(alphabetRule, {
			message: "Middle Name must be only alphabet",
		}),
	lname: yup
		.string()
		.max(15)
		.min(3)
		.required("Last Name is required")
		.matches(alphabetRule, { message: "Last Name must be only alphabet" }),

	phonenumber: yup
		.string()
		.matches(ethiopianPhoneRegex, {
			message: "Please enter valid phone number",
		})
		.required("Phone number is required"),
	relationship: yup.string(),
});

export const registrationValidation = yup.object().shape({
	year: yup.string().required("Year is required"),
	semester: yup.string().required("Semester is Required"),
	program: yup.string().max(40).required("Program is required"),
	level: yup.string().required("Level is required"),
});

const RegistrationValidation = yup.object().shape({
	// profile_picture_url
	// registered_at
});

export const loginValidation = yup.object().shape({
	password: yup.string().min(6).required("Password is required"),
	confirm: yup
		.string()
		.min(6)
		.oneOf([yup.ref("password"), null], "Passwords must match")
		.required("Password is required"),
});
