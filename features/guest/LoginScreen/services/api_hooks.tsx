import { useMutation } from "@tanstack/react-query"
import { postLogin } from "./api";
import { ILoginInterface } from "../interface/LoginInterface";
import { useRouter } from "expo-router";
import { storeToken } from "@/services/AuthService";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext/AuthContext";




export const useUserAuthentication = () =>{

    const router = useRouter();
    const {setIsAuthenticated} = useContext(AuthContext);


    return useMutation({
        mutationKey:["login_query"],
        mutationFn:(loginRequest:ILoginInterface)=>{
            return postLogin(loginRequest)
        },
        retry:false,
        async onSuccess(data){
            if(data.data.token){
               await storeToken(data.data.token);
               setIsAuthenticated(true);
               router.replace('/(auth)/home');
            }
        },
        onError(error){
            console.log(error.message);
        }
    });
}