import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "@/constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import CallCenterIcon from "../assets/svg/CallCenter.svg";

interface propsType {
  setView?: React.Dispatch<React.SetStateAction<string>>;
}

const HelpCenter = (props: propsType) => {
  const { setView } = props;
  const router: any = useRouter();
  const [payment, setPayment] = useState([
    {
      name: "BANK RAKYAT INDONESIA",
    },
  ]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.wrapper, { marginBottom: 10 }]}
        onPress={() => router.push("kasir/detailTransaction")}
      >
        <CallCenterIcon></CallCenterIcon>
        <View style={styles.wrapperTab}>
          <View style={styles.wrapperText}>
            <Text style={styles.text}>Pusat Bantuan</Text>
            <Text
              style={styles.textDesc}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Dapatkan solusi untuk semua kendala Anda di sini
            </Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            color={COLORS.primary}
            size={26}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HelpCenter;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap: 10,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
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
    fontSize: RFValue(10),
    color: "#8F92A1",
    flexShrink: 1, // memastikan teks menyusut saat ruang terbatas
    flexWrap: "wrap", // memastikan teks membungkus ke baris berikutnya
    maxWidth: "100%", // mencegah teks melebihi lebar elemen lain
  },
  wrapperText: {
    flexDirection: "column",
    flexShrink: 1, // memastikan kolom teks tidak mendorong ikon keluar
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
    marginVertical: 20,
  },
});
