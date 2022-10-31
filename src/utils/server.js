import axios from 'axios';
import { getToken } from './token';
export const baseUrl = 'http://127.0.0.1:5000/';

const server = axios.create({
    baseURL: baseUrl
});

// server.interceptors.request.use(
//   (config) => {
//     const jwtToken = getToken();
//     config.headers = {
//       AUTH_TOKEN: `${jwtToken}`,
//     };
//     return config;
//   },
//   (error) => {
//     console.log(error);
//   }
// );

export default server;
