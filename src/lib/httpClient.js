import axios from "axios";
import { API_HOST } from "constants/globals";

const httpClient = axios.create({
    baseURL: `${API_HOST}/api`,
});

httpClient.interceptors.request.use((config) => {
    const accessToken = '';
    if (accessToken) {
        config.headers['x-authorization'] = accessToken
    }
    return config
});

httpClient.interceptors.response.use(

    (response) => response,

    (error) => {
        if (error.response && error.response.status === 401) {
           // unauthorized request
        }
        if (error.response && error.response.data && error.response.status !== 401) {
            // other errors
        }
        return Promise.reject(error)
    }
);

export default httpClient;