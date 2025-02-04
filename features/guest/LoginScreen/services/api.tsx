import axiosApi from "@/services/AxiosClient";
import { ILoginInterface, ILoginResponseInterface } from "../interface/LoginInterface";
import axios, { AxiosResponse } from "axios";


export async function postLogin(loginRequest:ILoginInterface):Promise<AxiosResponse<ILoginResponseInterface>>{
    try{
        const response = await axiosApi.post('/auth/login',loginRequest);
        return response;
    }catch(error:any){
        console.log("error:",error);
       throw new Error(error);
    }
}