import { Stack } from "expo-router"
import React from "react"
import RouteData from "@/routeData/route.json";


export default function PublicLayout(){
    return(
        <>
            <Stack screenOptions={{
                headerShown:false
            }}>
                {
                    RouteData.map((item,index)=>(
                        <Stack.Screen key={index} name={item.name} options={{
                            headerShown:item.headerShown
                        }} />
                    ))
                }
            </Stack>
        </>
    )
}