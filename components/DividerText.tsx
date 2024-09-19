import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@/constants/theme";
interface initialProps {
  text: string;
  colorText: string;
  color: string;
  fontFamily:string;
  fontSizes:number;
}
const DividerText = (props: initialProps) => {
  const { text, colorText, color,fontFamily,fontSizes } = props;
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ flex: 1, height: 1, backgroundColor: color }} />
      <View>
        <Text
          style={{
            width: 50,
            textAlign: "center",
            color: colorText,
            fontFamily: fontFamily,
            fontSize: fontSizes,
          }}
        >
          {text}
        </Text>
      </View>
      <View style={{ flex: 1, height: 1, backgroundColor: color }} />
    </View>
  );
};

export default DividerText;

const styles = StyleSheet.create({});
