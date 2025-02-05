import { ScreenContainer } from "@/components/ScreenContainer";
import ViewContainer from "@/components/ViewContainer";
import HomeScreen from "@/features/auth/Home/HomeScreen";
import React from "react"
import { Text, View } from "react-native";


const Home = () =>{
    return(
        <>
            <ViewContainer style={{flex:1}}>
                <HomeScreen/>
            </ViewContainer>
        </>
    )
}

export default Home;