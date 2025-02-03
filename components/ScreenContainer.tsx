import { StyleSheet, View, ViewProps } from "react-native";







export function ScreenContainer({style,...otherProps}:ViewProps){
    return <View style={[styles.container,style]} {...otherProps} />
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:15,
        paddingVertical:15
    }
})