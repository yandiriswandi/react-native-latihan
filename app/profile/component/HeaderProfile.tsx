import { COLORS, SIZES } from "@/constants/theme";
import React from "react";
import { StatusBar, StyleSheet, Text, View, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Animated, { FadeInUp } from "react-native-reanimated";
import { useSegments } from 'expo-router';

const HeaderProfile = () => {
  const segment= useSegments()
  
  return (
    <View style={SIZES.isTablet && styles.container}>
      {/* <StatusBar barStyle="light-content" /> */}
      <View style={{ flex: 1 }}>
        <Animated.View
          style={styles.card}
          entering={FadeInUp.delay(200).duration(1000).springify()}
        >
          <Text style={styles.name}>Yandi</Text>
          <View style={styles.containerVerified}>
            <Text style={styles.hello}>Verified Account</Text>
            <Image source={require("../../../assets/images/verified.png")} />
          </View>
        </Animated.View>
        <Animated.View
          style={{ padding: 10 }}
          entering={FadeInUp.delay(200).duration(2000).springify()}
        >
          <View style={styles.cardOne}></View>
        </Animated.View>
        <Animated.View
          style={{ padding: 20 }}
          entering={FadeInUp.delay(200).duration(1000).springify()}
        >
          <View style={styles.cardTwo}></View>
        </Animated.View>
      </View>
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: SIZES.height * 0.17,
    width: SIZES.isTablet ? 500 : "100%",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 10,
    zIndex: 10,
  },
  hello: {
    fontFamily: "Poppins-Regular",
    fontSize: RFValue(12),
    color: "rgba(255,255,255, 0.5)",
  },
  name: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(14),
    color: "white",
  },
  containerVerified: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  notification: {
    position: "absolute",
    right: 0,
    margin: SIZES.isTablet ? 10 : 5,
  },
  cardOne: {
    backgroundColor: "rgba(239, 76, 45, 0.4)",
    height: 182,
    borderRadius: 10,
    marginTop: -180,
    zIndex: 5,
  },
  cardTwo: {
    backgroundColor: "rgba(239, 76, 45, 0.1)",
    height: 182,
    borderRadius: 10,
    marginTop: -200,
    zIndex: 1,
  },
});
