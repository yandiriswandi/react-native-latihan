import DividerText from "@/components/DividerText";
import HeaderStatuBar from "@/components/HeaderStatusBar";
import StyledTextInput from "@/components/StyledTextInput";
import { COLORS, SIZES } from "@/constants/theme";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  SlideInLeft,
  SlideInRight,
} from "react-native-reanimated";
import Google from "../../assets/images/google.svg";
import {RFValue} from 'react-native-responsive-fontsize';
import Svg, { Path } from 'react-native-svg';

const index = () => {
  const [visible, setVisible] = useState(false);
  const router: any = useRouter();

  const handleNavigate = () => {
    router.push({
      pathname: "register",
      params: {
        name: "Yandi",
        age: 25,
        data: [{ sandi: "hallo", dimana: "haiiii" }],
      },
    });
  };
  return (
    <GestureHandlerRootView>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <HeaderStatuBar />
      <View style={styles.container}>
        <Animated.Text
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={[styles.textLogin, { marginBottom: 10, marginTop: 20 }]}
        >
          Login Akun
        </Animated.Text>
        <Animated.Text
          style={[styles.textDescription, { textAlign: "justify" }]}
          entering={FadeInUp.delay(200).duration(1000).springify()}
        >
          Selamat datang kembali di aplikasi E POS Silahkan masuk menggunakan
          akun pengguna yang sudah Anda miliki dan selamat menikmati hari ini
        </Animated.Text>
        <Animated.View
          style={{ marginBottom: 20 }}
          entering={FadeInUp.delay(200).duration(1000).springify()}
        >
          <StyledTextInput label="Nomor Telephone / Email" type="text" />
        </Animated.View>
        <Animated.View
          style={{ marginBottom: 10 }}
          entering={FadeInUp.delay(200).duration(1000).springify()}
        >
          <StyledTextInput
            label="Password"
            type="password"
            visible={visible}
            setVisible={() => setVisible(!visible)}
          />
        </Animated.View>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: RFValue(12),
            color: COLORS.grey_100,
            paddingLeft: 20,
          }}
        >
          lupa kata sandi ?
        </Text>
        <Animated.View entering={SlideInLeft.delay(100).duration(800)}>
          <TouchableOpacity style={[styles.button, { marginTop: 10 }]}>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "white",
                fontSize: RFValue(13),
              }}
            >
              masuk
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={{ marginVertical: 10 }}
          entering={FadeIn.delay(200).duration(1000).springify()}
        >
          <DividerText
            fontFamily="Poppins-Regular"
            fontSizes={RFValue(14)}
            text="atau"
            color={COLORS.grey_100}
            colorText={COLORS.grey_100}
          />
        </Animated.View>
        <Animated.View entering={SlideInRight.delay(100).duration(800)}>
          <TouchableOpacity style={styles.buttonGoogle}>
            <Google />
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: RFValue(13),
              }}
            >
              Login with Google
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={styles.bottomText}
          entering={FadeInDown.delay(200).duration(1000).springify()}
        >
          <Text style={styles.bottomTextOne}>Belum punya akun?</Text>
          <TouchableOpacity onPress={handleNavigate}>
            <Text style={styles.bottomTextTwo}>Buat akun disini</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
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
    fontSize:RFValue(SIZES.h3),
  },
  textDescription: {
    fontFamily: "Poppins-Regular",
    fontSize: RFValue( SIZES.h6),
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
    fontSize: RFValue(11),
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
    fontSize: RFValue(12),
  },
  bottomTextTwo: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(12),
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
});
