import { ContainerCenterView } from "@/components/ContainerCenterView";
import React from "react"
import { ActivityIndicator, Text, View } from "react-native";
const App = () =>{
    return(
        <>
        <ContainerCenterView>
            <ActivityIndicator size={'large'} color={'blue'}/>
        </ContainerCenterView>
        </>
    )
}


export default App;