import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { useRouter } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import EllipsisIcon from "../../../assets/svg/ellipsis.svg";

const HeaderCustomer = () => {
  const router: any = useRouter();

  const handleNavigate = ()=>{
    router.push("customer/customerAdd")
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerBack}>
        <TouchableOpacity style={{ width: 30 }} onPress={() => router.back()}>
          <Ionicons
            size={30}
            name="chevron-back-outline"
            color={COLORS.primary}
            style={{ fontWeight: 600 }}
          />
        </TouchableOpacity>
        <Text style={styles.text}>List Customer</Text>
      </View>
      <View style={styles.containerRight}>
        <TouchableOpacity onPress={handleNavigate}>
          <Ionicons
            size={20}
            name="add-sharp"
            color={COLORS.primary}
            style={styles.add}
          />
        </TouchableOpacity>
        <EllipsisIcon />
      </View>
    </View>
  );
};

export default HeaderCustomer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
  },
  containerBack: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  containerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: COLORS.primary,
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(16),
  },
  add: {
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderColor: COLORS.grey_100,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 0.5,
    fontWeight: "800",
  },
});
