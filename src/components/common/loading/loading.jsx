import { InfinitySpin } from "react-loader-spinner";

export const Loader = ({ color, width }) => {
	return <InfinitySpin color={color ?? "#023047"} width={width} />;
};
