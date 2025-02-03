import AppLogo from "@/components/AppLogo";
import { ThemedView } from "@/components/ThemedView";
import React from "react"
import { LoginStyle } from "./styles/LoginStyle";
import { Text, View } from "react-native";
import ViewContainer from "@/components/ViewContainer";
import { ThemedText } from "@/components/ThemedText";
import { AppName } from "@/constants/AppService";
import LoginForm from "./components/LoginForm";


const LoginScreen = () =>{
    return(
        <>
            <ThemedView style={LoginStyle.container}>
                <ViewContainer style={LoginStyle.logoTextContainer}>
                    <View style={LoginStyle.loginLableContainer}>
                        <AppLogo/>
                        <ThemedText type="title" style={LoginStyle.textStyle}>
                            {AppName}
                        </ThemedText>
                    </View>
                    <View style={LoginStyle.loginLableContainer}>
                        <ThemedText>
                            Login
                        </ThemedText>
                        <ThemedText>
                            Sign In to continue
                        </ThemedText>
                    </View>
                </ViewContainer>
                <LoginForm/>
            </ThemedView>
        </>
    )
}


export default LoginScreen;