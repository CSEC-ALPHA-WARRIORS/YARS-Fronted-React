import { DNA, Grid, InfinitySpin, TailSpin } from "react-loader-spinner";

export const Loader = ({ color, ...props }) => {
	return <TailSpin color={color ? color : "#023047"} {...props} />;
};
