import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HeaderStatusBar from "./HeaderStatusBar";
import { Stack } from "expo-router";
interface Props {
  children: ReactNode; // Tipe untuk children yang dapat berupa elemen React apapun
  style?: any;
}
const Container: React.FC<Props> = ({ children, style }) => {
  return (
    <GestureHandlerRootView>
      <HeaderStatusBar />
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <View style={{ ...style,flex:1 }}>{children}</View>
    </GestureHandlerRootView>
  );
};

export default Container;

