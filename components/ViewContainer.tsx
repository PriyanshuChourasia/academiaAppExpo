import { View, ViewProps } from "react-native";




export default function ViewContainer({style,...otherProps}:ViewProps){
    return <View style={[style]} {...otherProps} />
}