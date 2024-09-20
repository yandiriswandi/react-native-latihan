
import HeaderLeft from "@/components/HeaderLeft";
import HeaderStatuBar from "@/components/HeaderStatuBar";
import StyledTextInput from "@/components/StyledTextInput";
import { COLORS, SIZES } from "@/constants/theme";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
    FadeInDown,
    FadeInUp
} from "react-native-reanimated";

const ForgotPassword = () => {
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
      <HeaderLeft title="Forgot Password" />
      <View style={styles.container}>
        <View>
          <Animated.Text
            style={[styles.textDescription, { textAlign: "justify" }]}
            entering={FadeInUp.delay(200).duration(1000).springify()}
          >
            Enter the phone number asociated with your account
          </Animated.Text>
          <Animated.View
            style={{ marginBottom: 20 }}
            entering={FadeInUp.delay(200).duration(1000).springify()}
          >
            <StyledTextInput label="Nomor Telephone / Email" type="text" />
          </Animated.View>
        </View>

        <Animated.View entering={FadeInDown.delay(100).duration(800)}>
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
    </GestureHandlerRootView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent:"space-between",
    paddingVertical: 10,
    paddingHorizontal:30
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
