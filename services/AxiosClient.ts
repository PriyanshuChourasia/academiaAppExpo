import axios from "axios";
import { getToken } from "./AuthService";
const baseURL = 'https://academia-api.healnearn.com/api';


const axiosApi = axios.create({
    baseURL: baseURL,
    timeout:3000
});



axiosApi.interceptors.request.use(async (config)=>{
    const token = await getToken();
    if(token){
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
},(error)=>{
    return Promise.reject(error);
});





axiosApi.interceptors.response.use(function(response){
    if(response.data){
        return response;
    }
    else return Promise.reject(new Error("No data in response"));
},function(error){
    if(axios.isAxiosError(error) && error.response && error.response.data){
        const {status} = error.response;
        const {message,code,name,errors} = error.response.data;
        if(status > 400 && status < 500){
            throw new Error(message,code);
        }

        throw new Error(name,errors);
    }
    return Promise.reject(error);
});

export default axiosApi;