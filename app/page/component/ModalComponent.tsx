import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode, useState } from "react";
import { Stack } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import "nativewind/types.d"; // Tambahkan ini
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode; // Tipe untuk children yang dapat berupa elemen React apapun
}
const ModalComponent: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  children,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalBackground}
        activeOpacity={1}
        onPressOut={onClose}
      >
        <View onStartShouldSetResponder={() => true}>
          {children}
        </View>
      </TouchableOpacity>
    </Modal>
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
});
export default ModalComponent;
