import Axios, { InternalAxiosRequestConfig, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

const axios = Axios.create({
	baseURL: import.meta.env.VITE_BASE_API,
	headers: {
		'Content-Type': 'application/json; charset=utf-8',
	},
});

axios.interceptors.request.use(
	(config: InternalAxiosRequestConfig<AxiosRequestConfig>) => {
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);

axios.interceptors.response.use(
	(response: AxiosResponse) => {
		return response.data;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);

export default axios;
