import HeaderStatuBar from "@/components/HeaderStatuBar";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import PASS from "../../assets/images/Password.svg";

const Otp = () => {
  const router = useRouter();
  const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const changeData = (data: number) => {
    if (otp.length < 4) {
      setOtp(otp + data);
    }
  };
  const removeData = () => {
    setOtp(otp.slice(0, -1));
  };
  const [otp, setOtp] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <GestureHandlerRootView>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <HeaderStatuBar />
      <View style={styles.backButton}>
        <TouchableOpacity style={{ width: 30 }} onPress={() => router.back()}>
          <Ionicons
            size={25}
            name="chevron-back-outline"
            color={COLORS.primary}
            style={{ fontWeight: 600 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 40 }}>
          <Animated.View
            entering={FadeInUp.delay(200).duration(1000).springify()}
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Image source={require("../../assets/images/Password.png")}></Image> */}
            <PASS width={72} height={72} />
            <Text style={styles.textPassword}>Input OTP</Text>
          </Animated.View>
          <View style={{ marginBottom: 20 }}>
            <TextInput
              editable={false}
              style={styles.input}
              value={otp}
              secureTextEntry={!visible}
            />
            <TouchableOpacity
              onPress={() => setVisible(!visible)}
              style={styles.eye}
            >
              <Ionicons
                size={20}
                name={visible ? "eye-outline" : "eye-off-outline"}
                color={COLORS.grey_100}
                style={{ fontWeight: 600 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Animated.View entering={FadeIn.delay(200).duration(1000).springify()}>
          {numbers.map((chunk, index) => {
            return (
              <View key={index} style={styles.numpadWrapper}>
                {chunk.map((number) => {
                  return (
                    <TouchableOpacity
                      onPress={() => changeData(number)}
                      key={number}
                    >
                      <View style={styles.numpad}>
                        <Text style={styles.numpadNumber}>{number}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })}
          <View style={styles.numpadWrapper}>
            <View style={{ width: 70 }} />
            <TouchableOpacity onPress={() => changeData(0)}>
              <View style={styles.numpad}>
                <Text style={styles.numpadNumber}>0</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={removeData}>
              <View style={styles.numpad}>
                <Ionicons
                  size={24}
                  name="close-circle-outline"
                  style={{ fontWeight: 600 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}
          style={styles.containerButton}
        >
          <TouchableOpacity style={[styles.button, { marginTop: 10 }]}>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "white",
                fontSize: 13,
              }}
            >
              Konfirmasi
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  backButton: {
    padding: 10,
  },
  textPassword: {
    fontFamily: "Poppins-Bold",
    fontSize: 25,
    color: COLORS.primary,
    marginVertical: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 40,
    marginTop: 50,
  },
  numpadWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  numpad: {
    alignSelf: "center",
    padding: 20,
  },
  numpadNumber: {
    fontWeight: "bold",
    fontSize: 24,
  },
  input: {
    borderStyle: "solid",
    borderBottomWidth: 0.5,
    borderColor: COLORS.grey_100,
    padding: 10,
    fontSize: 24,
    textAlign: "center",
  },
  eye: {
    position: "absolute",
    right: 0,
    top: 14,
  },
  containerButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: COLORS.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    borderRadius: 10,
    width: 200,
  },
});
