import { Tabs } from "expo-router"
import React from "react"
import AuthRoute from "@/routeData/auth_route.json";


export default function HomeLayout(){


    return(
        <>
            <Tabs>
                {
                    AuthRoute.map((item,index)=>(
                        <Tabs.Screen key={index} name={item.name} options={{
                            headerShown:item.headerShown,
                            headerTitle:item.headerTitle
                        }} />
                    ))
                }
                <Tabs.Screen name="home" options={{
                    headerShown:true,
                    headerTitle:"Home"
                }} />
            </Tabs>
        </>
    )
}