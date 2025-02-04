import { useMutation } from "@tanstack/react-query"
import { postLogin } from "./api";
import { ILoginInterface } from "../interface/LoginInterface";




export const useUserAuthentication = () =>{
    return useMutation({
        mutationKey:["login_query"],
        mutationFn:(loginRequest:ILoginInterface)=>{
            return postLogin(loginRequest)
        },
        retry:false,
        onSuccess(data){
            console.log(data.data);
        },
        onError(error){
            console.log(error.message);
        }
    });
}