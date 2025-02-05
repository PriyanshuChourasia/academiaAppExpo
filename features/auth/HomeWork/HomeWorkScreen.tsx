import { ThemedText } from "@/components/ThemedText";
import ViewContainer from "@/components/ViewContainer";
import React from "react";
import { Dimensions } from "react-native";
import  Svg,{Circle} from "react-native-svg";

const WIDTH = Dimensions.get('screen').width;

const HomeWorkScreen = () =>{
    return(
        <ViewContainer>
            <Svg height={'50%'} width={'50%'}>
            <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
          {/* <Svg.Path
            d="M-17.5 378.5C31.5 32.5 302.5 463 375 89C447.5 -285 375 644 375 644H0C0 644 -66.5 724.5 -17.5 378.5Z" // put your path here
            fill="blue"
            stroke="blue"
          />   */}
        </Svg>
        </ViewContainer>
    )
}



export default HomeWorkScreen;