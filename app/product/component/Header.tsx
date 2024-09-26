import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import EllipsisIcon from "../../../assets/svg/ellipsis.svg";
import { useRouter, useLocalSearchParams } from 'expo-router';
interface propsType {
  title: string;
}

const Header = (props: propsType) => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  console.log(id,"ahllo");
  
  return (
    <View style={styles.container}>
      <View style={styles.containerback}>
        <TouchableOpacity style={{ width: 30 }} onPress={() => router.back()}>
          <Ionicons
            size={25}
            name="chevron-back-outline"
            color={COLORS.primary}
            style={{ fontWeight: 600 }}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </View>
      <EllipsisIcon />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  containerback: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: COLORS.primary,
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
  },
});
