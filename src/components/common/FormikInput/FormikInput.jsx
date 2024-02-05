import InputField from "../inputField/inputField";

export const FormikInput = ({
	formik,
	id,
	name,
	label,
	placeholder,
	...props
}) => {
	return (
		<InputField
			id={id}
			name={name}
			label={label}
			value={formik.values[name]}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			error={formik.touched[name] && formik.errors[name]}
			placeholder={placeholder}
			{...props}
		/>
	);
};
