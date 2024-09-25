import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS, SIZES } from "@/constants/theme";
import { RFValue } from "react-native-responsive-fontsize";
import Notif from "../assets/svg/notif.svg";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const CardHome = () => {
  return (
    <View style={SIZES.isTablet && styles.container}>
      <View style={{ flex: 1 }}>
        <Animated.View
          style={styles.card}
          entering={FadeInUp.delay(200).duration(3000).springify()}
        >
          <Text style={styles.hello}>Hello,</Text>
          <Text style={styles.name}>Yandi</Text>
          <Notif style={styles.notification} />
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

export default CardHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: SIZES.isTablet ? 300 : 182,
    width: SIZES.isTablet ? 500 : "100%",
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 10,
    zIndex: 10,
  },
  hello: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(11),
    color: "white",
  },
  name: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(18),
    color: "white",
  },
  notification: {
    position: "absolute",
    right: 0,
    margin: SIZES.isTablet ? 10 : 5,
  },
  cardOne: {
    backgroundColor: "rgba(12, 41, 61, 0.4)",
    height: 182,
    borderRadius: 10,
    marginTop: -180,
    zIndex: 5,
  },
  cardTwo: {
    backgroundColor: "rgba(12, 41, 61, 0.1)",
    height: 182,
    borderRadius: 10,
    marginTop: -200,
    zIndex: 1,
  },
});
