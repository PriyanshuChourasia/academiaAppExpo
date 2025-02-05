import ViewContainer from "@/components/ViewContainer";
import React from "react";
import { Dimensions, Text } from "react-native";
import Svg, { Circle, Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const HomeScreen = () => {
  return (
    <ViewContainer style={{flex:1}}>
      <Svg
        height={399}
        width={Dimensions.get("screen").width}
        viewBox="24 0 369 370"
      >
        <Defs>
            <LinearGradient id="waveGradient" x1={"0"} y1={"0"} x2={"1"} y2={"0"}>
                <Stop offset="0%" stopColor="#0554F2" stopOpacity="1" />
                <Stop offset="55%" stopColor="#031240" stopOpacity="1" />
                <Stop offset="100%" stopColor="#031240" stopOpacity="1" />
            </LinearGradient>
        </Defs>
          <Path
            fill={"url(#waveGradient)"}
            d="M0.000278893 0H402V95.5C402 95.5 341.798 70.0653 301.5 68C207.029 63.1582 212 159.103 119 140C26.0001 120.897 5.65381e-05 193 5.65381e-05 193L0.000278893 0Z"
          />
      </Svg>
    </ViewContainer>
  );
};

export default HomeScreen;
