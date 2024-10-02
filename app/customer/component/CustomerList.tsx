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
  setView?: React.Dispatch<React.SetStateAction<string>>;
}

const CustomerList = (props: propsType) => {
  const { setView } = props;
  const router: any = useRouter();
  const [payment, setPaymet] = useState([
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
        <View style={styles.img}>
          <Ionicons
            size={30}
            name="person"
            color="white"
            // style={styles.}
          />
        </View>
        <View style={styles.wrapperTab}>
          <View style={styles.wrapperText}>
            <Text style={styles.text}>Customer1</Text>
            <Text style={styles.textDesc}>+62810255032646</Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            color={"#5CD9F5"}
            size={26}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomerList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    flex: 1,
  },
  wrapper: {
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    padding: 10,
    gap: 10,
    borderRadius: 16,
  },
  img: {
    width: 62,
    height: 62,
    backgroundColor:"#6f00ff",
    borderRadius: 100,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderColor:"white",
    borderStyle:"solid",
    borderWidth:6
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
  headerText: {
    fontFamily: "Poppins-Medium",
    fontSize: RFValue(14),
    padding: 10,
  },
});
