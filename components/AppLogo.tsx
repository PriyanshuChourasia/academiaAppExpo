import React from "react"
import { Image, StyleSheet, View } from "react-native";




const AppLogo = () =>{
    return(
            <View style={styles.container}>
                <Image source={require('../assets/appImages/appWhiteLogo.png')}  style={styles.imageContainer} resizeMode="cover" />
        </View>
    )
}


export default AppLogo;



const styles = StyleSheet.create({
    container:{
        width:120,
        height:120,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:60,
        overflow:'hidden',
        backgroundColor:'#382988',
        paddingHorizontal:15,
        paddingVertical:15
    },
    imageContainer:{
        width:80,
        height:80,
    }
})