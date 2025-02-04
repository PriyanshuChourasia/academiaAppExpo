import { AppColor } from "@/constants/Colors";
import { AppTextSize } from "@/constants/TextSize";
import { StyleSheet } from "react-native";


export const LoginStyle = StyleSheet.create({
    container:{
        flex:1,
    },
    loginLableContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        color:AppColor.light.themeText,
        fontWeight:"800",
        paddingTop:10
    },
    logoTextContainer:{
        paddingVertical:10,
        paddingHorizontal:10,
        alignItems:'center',
        gap:12,
        paddingTop:100
    },
    buttonStyle:{
        backgroundColor:AppColor.light.buttonColor,
        paddingVertical:7,
        marginTop:20
    },
    formContainer:{
        flex:1,
        marginTop:50
    },
    form:{
        paddingHorizontal:15,
        paddingVertical:30,
        borderRadius:6,
        backgroundColor:'white',
    },
    shadowProp:{
        shadowColor:'#171717',
        shadowOffset:{
            width:-2,
            height:4
        },
        shadowOpacity:0.2,
        shadowRadius:4,
        elevation:20
    },
    textInputStyle:{
        backgroundColor:"white",
        borderColor:'black',
        marginBottom:15
    },
    textInputStyleOnFocus:{
        borderColor:"black", 
    }
})