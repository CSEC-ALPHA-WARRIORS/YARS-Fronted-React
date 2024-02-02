export const baseUrl = "http://localhost:8000";

/**
 * @function withAdminTokenHeader
 * @description This function adds the admin token to the request headers.
 * @param {import('axios').AxiosRequestConfig}
 * */
export const withAdminTokenHeader = (config) => {
	const token = localStorage.getItem("admin_token");
	return {
		...config,
		headers: {
			Authorization: `Bearer ${token}`,
			...config?.headers,
		},
	};
};
