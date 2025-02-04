import { AuthContext } from "@/context/AuthContext/AuthContext";
import { clearStorage, getToken } from "@/services/AuthService";
import { Slot, useRouter, useSegments } from "expo-router";
import React, { useContext, useEffect } from "react";
import {PaperProvider} from "react-native-paper";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";

const InitialLayout =() =>{
  
  const {setIsAuthenticated} = useContext(AuthContext);
  const segments = useSegments();
  const router  = useRouter();


  useEffect(()=>{

    const isTabsGroup = segments[0] === '(auth)';

    const checkAuth = async() =>{
      const token = await getToken();

      if(token !== null && !isTabsGroup)
      {
        setIsAuthenticated(true);

        if(!isTabsGroup){
          router.replace('/(auth)/home');
        }
      }else if(token === null){
        clearStorage();
        router.replace('/(guest)/sign_in');
      }
    }

    checkAuth();

  },[]);



  return <Slot/>

}



export default function RootLayout(){

  const queryClient = new QueryClient();

  return(
    <>
      <PaperProvider>
        <QueryClientProvider client={queryClient}>
          <InitialLayout/>
        </QueryClientProvider>
      </PaperProvider>
    </>
  )

}