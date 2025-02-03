import { ScreenContainer } from "@/components/ScreenContainer";
import LoginScreen from "@/features/guest/LoginScreen/LoginScreen";
import React from "react"
import { Text, View } from "react-native";

const SignInScreen = () =>{
    return(
        <>
            <ScreenContainer>
                <LoginScreen/>
            </ScreenContainer>
        </>
    )
}

export default SignInScreen;