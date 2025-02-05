const authToken:string = 'auth-token';
import AsyncStorage from "@react-native-async-storage/async-storage";



const storeToken = async(token:string) =>{
    try{
        console.log("token store",token);
        await AsyncStorage.setItem(authToken,token);
    }catch(error){
        console.error(error);
    }
}



const getToken = async() =>{
    try{
       const value = await AsyncStorage.getItem(authToken);
       console.log("token value:",value);
       if(value !== null)
       {
            return value;
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