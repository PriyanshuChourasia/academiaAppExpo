import { StyleSheet, View, ViewProps } from "react-native";





export function ContainerCenterView({style,...otherProps}:ViewProps){
    return <View style={[styles.container, style]} {...otherProps} />
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})