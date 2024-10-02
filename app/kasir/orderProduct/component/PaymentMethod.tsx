import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "@/constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
interface propsType {
  setView: React.Dispatch<React.SetStateAction<string>>;
}

const PaymentMethod = (props: propsType) => {
  const { setView } = props;
  const router: any = useRouter();
  const [payment, setPaymet] = useState([
    {
      name: "BANK RAKYAT INDONESIA",
    },
  ]);
  return (
    <View>
      <Header title="Rekening Anda"></Header>
      <View style={styles.container}>
        <Text style={styles.headerText}>Rekening</Text>
        <TouchableOpacity
          style={[styles.wrapper, { marginBottom: 10 }]}
          onPress={() => router.push("kasir/detailTransaction")}
        >
          <View style={styles.img}></View>
          <View style={styles.wrapperTab}>
            <View style={styles.wrapperText}>
              <Text style={styles.text}>BANK RAKYAT INDONESIA</Text>
              <Text style={styles.textDesc}>Klik untuk dipilih</Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              color={"#5CD9F5"}
              size={26}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    padding: 10,
    gap: 20,
    borderRadius: 16,
  },
  img: {
    width: 53,
    height: 53,
    backgroundColor: COLORS.grey_100,
    borderRadius: 8,
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(14),
  },
  textDesc: {
    fontFamily: "Poppins-Medium",
    fontSize: RFValue(12),
    color: "#8F92A1",
  },
  wrapperText: {
    flexDirection: "column",
  },
  wrapperTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  headerText: {
    fontFamily: "Poppins-Medium",
    fontSize: RFValue(14),
    padding: 10,
  },
});
