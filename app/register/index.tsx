import Header from "@/components/Header";
import HeaderStatuBar from "@/components/HeaderStatusBar";
import StyledTextInput from "@/components/StyledTextInput";
import { COLORS, SIZES } from "@/constants/theme";
import { Stack } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
    FadeInDown,
    FadeInUp
} from "react-native-reanimated";

const index = () => {
  const [visible, setVisible] = useState(false);
  const [visibleConfir, setVisibleConfir] = useState(false);

  return (
    <GestureHandlerRootView>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <HeaderStatuBar />
      <Header title="Isi Data Profil" />
      <ScrollView>
        <View style={styles.container}>
          <Animated.View
            style={{ marginBottom: 20 }}
            entering={FadeInUp.delay(200).duration(1000).springify()}
          >
            <StyledTextInput label="Nama Lengkap" type="text" />
          </Animated.View>
          <Animated.View
            style={{ marginBottom: 20 }}
            entering={FadeInUp.delay(200).duration(1000).springify()}
          >
            <StyledTextInput label="Nomor HandPhone" type="text" />
          </Animated.View>
          <Animated.View
            style={{ marginBottom: 20 }}
            entering={FadeInUp.delay(200).duration(1000).springify()}
          >
            <StyledTextInput label="Email" type="text" />
          </Animated.View>
          <Animated.View
            style={{ marginBottom: 20 }}
            entering={FadeInUp.delay(200).duration(1000).springify()}
          >
            <StyledTextInput label="Jenis Kelamin" type="text" />
          </Animated.View>
          <Animated.View
            style={{ marginBottom: 20 }}
            entering={FadeInDown.delay(200).duration(1000).springify()}
          >
            <StyledTextInput label="Tanggal Lahir" type="text" />
          </Animated.View>

          <Animated.View
            style={{ marginBottom: 20 }}
            entering={FadeInDown.delay(200).duration(1000).springify()}
          >
            <StyledTextInput
              label="Password Baru"
              type="password"
              visible={visible}
              setVisible={() => setVisible(!visible)}
            />
          </Animated.View>
          <Animated.View
            style={{ marginBottom: 20 }}
            entering={FadeInDown.delay(200).duration(1000).springify()}
          >
            <StyledTextInput
              label="Konfirmasi Password"
              type="password"
              visible={visibleConfir}
              setVisible={() => setVisibleConfir(!visibleConfir)}
            />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()}>
            <TouchableOpacity style={[styles.button, { marginTop: 10 }]}>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "white",
                  fontSize: 13,
                }}
              >
                Simpan
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    flex: 1,
    padding: 30,
  },
  textLogin: {
    fontFamily: "Poppins-SemiBold",
    fontSize: SIZES.h3,
  },
  textDescription: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.h6,
    color: COLORS.grey_100,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 0.5, // Ketebalan border
    borderColor: COLORS.grey_100, // Warna border
    borderRadius: 10, // Membuat sudut border melengkung
    borderStyle: "solid",
    padding: 12,
  },
  textInputDescription: {
    position: "absolute",
    top: 0,
    left: 10,
    marginTop: -15,
    backgroundColor: "#F9F9FB",
    padding: 4,
  },
  textTop: {
    color: COLORS.grey_100,
    fontFamily: "Poppins-Regular",
    fontSize: 11,
  },
  button: {
    backgroundColor: COLORS.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    borderRadius: 10,
  },
  buttonGoogle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderWidth: 0.5, // Ketebalan border
    borderColor: COLORS.grey_100, // Warna border
    borderRadius: 10, // Membuat sudut border melengkung
    height: 56,
    borderStyle: "solid",
  },
  bottomText: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginTop: 250,
  },
  bottomTextOne: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
  bottomTextTwo: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
});
