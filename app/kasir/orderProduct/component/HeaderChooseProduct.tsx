import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { useRouter } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";

const HeaderChooseProduct = () => {
  const router: any = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ width: 30 }} onPress={() => router.back()}>
        <Ionicons
          size={25}
          name="chevron-back-outline"
          color={COLORS.primary}
          style={{ fontWeight: 600 }}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>Kasir</Text>
      </View>
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
};

export default HeaderChooseProduct;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    gap: 15,
  },
  text: {
    textAlign: "justify",
    color: COLORS.primary,
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(16),
  },
  input: {
    borderColor: COLORS.grey_100,
    borderWidth: 0.5,
    borderStyle: "solid",
    flex: 1,
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
