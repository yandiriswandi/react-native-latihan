import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import "nativewind/types.d"; // Tambahkan ini
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import ModalComponent from "./component/ModalComponent";
import { Dimensions } from "react-native";
import MenuGrid from "./menu";

const { width, height } = Dimensions.get("window");
const hallo = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <View className="flex-1 bg-white">
      <ModalComponent visible={visible} onClose={() => setVisible(false)}>
        <View
          style={styles.alertContainer}
          onStartShouldSetResponder={() => true}
        >
          <Text style={styles.alertTitle}>ini aku</Text>
          <Text style={styles.alertMessage}>dimana</Text>
          <TouchableOpacity style={styles.okButton} onPress={onClose}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </ModalComponent>

      <Stack.Screen options={{ title: "Hallo Yandi" }} />
      <Animated.View
        entering={FadeInUp.delay(200).duration(1000).springify()}
        style={{ marginHorizontal: 30, marginTop: 20, alignItems: "center" }}
      >
        <TouchableOpacity style={styles.button} onPress={handleClick}>
          <Text style={{ color: "white", marginHorizontal: "auto" }}>
            Mas Ali thop sang petualang cinta
          </Text>
        </TouchableOpacity>
      </Animated.View>

      {/* <View className=' bg-blue-500'></View>
      <Text>Hasllloddaddddda</Text> */}
      <View style={{ marginHorizontal: 30 }}>
        <MenuGrid />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4052d6",
    borderRadius: 10,
    // alignSelf: 'flex-end', // Sesuaikan lebar tombol dengan lebar teks
    padding: 10,
  },

  // style modal
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  showAlertButton: {
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  showAlertButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Background hitam dengan opacity
  },
  alertContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff", // Background card putih
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Untuk bayangan pada Android
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  alertMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  okButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
export default hallo;
