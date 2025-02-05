import { Tabs } from "expo-router"
import React from "react"
import AuthRoute from "@/routeData/auth_route.json";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function HomeLayout(){


    return(
        <>
            <Tabs>
                {
                    AuthRoute.map((item,index)=>(
                        <Tabs.Screen key={index} name={item.name} options={{
                            headerShown:item.headerShown,
                            headerTitle:item.headerTitle,
                            tabBarIcon:()=>{
                                if(item.name === "home")
                                {
                                    return <AntDesign name="home" size={24} color="black" />
                                }
                                if(item.name === "travel"){
                                    return <Ionicons name="bus-outline" size={24} color="black" />
                                }
                                if(item.name === "diary"){
                                    return <MaterialCommunityIcons name="book-open-page-variant-outline" size={24} color="black" />
                                }
                                if(item.name === "homework"){
                                    return <MaterialCommunityIcons name="pencil-box-multiple-outline" size={24} color="black" />
                                }
                                if(item.name === "profile"){
                                    return <AntDesign name="user" size={24} color="black" />
                                }
                            }
                        }} />
                    ))
                }
            </Tabs>
        </>
    )
}