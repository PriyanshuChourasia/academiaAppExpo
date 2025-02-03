const authToken:string = 'auth-token';
import AsyncStorage from "@react-native-async-storage/async-storage";



const storeToken = async(token:string) =>{
    try{
        await AsyncStorage.setItem(authToken,JSON.stringify(token));
    }catch(error){
        console.error(error);
    }
}



const getToken = async() =>{
    try{
       const value = await AsyncStorage.getItem(authToken);
       if(value !== null && undefined)
       {
            return JSON.parse(value);
       }
       else{
        return null;
       }
    }catch(error){
        console.error(error);
    }
}



const clearStorage = () =>{
    AsyncStorage.clear();
}


export  {getToken,storeToken,clearStorage};