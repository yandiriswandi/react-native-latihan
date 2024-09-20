import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

interface InputProps {
  label: string;
  type: string;
  visible?: boolean;
  setVisible?: () => void;
  //   value: string;
  //   onChange: (newValue: string) => void;
}

export default function StyledTextInput(props: InputProps) {
  const { label, type, visible, setVisible } = props;
  return (
    <View>
      <View>
        <TextInput
          style={styles.textInput}
          secureTextEntry={type === "password" && !visible}
        ></TextInput>
      </View>
      <View style={styles.textInputDescription}>
        <Text style={styles.textTop}>{label}</Text>
      </View>
      {type === "password" && (
        <View style={styles.eye}>
          <TouchableOpacity onPress={setVisible}>
            <Ionicons
              size={20}
              name={visible ? "eye-outline" : "eye-off-outline"}
              color={COLORS.grey_100}
              style={{ fontWeight: 600 }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginTop: -13,
    backgroundColor: "#F9F9FB",
    padding: 4,
  },
  textTop: {
    color: COLORS.grey_100,
    fontFamily: "Poppins-Regular",
    fontSize: 11,
  },
  eye: {
    position: "absolute",
    right: 14,
    top: 15,
  },
});
