import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Container from "@/components/Container";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS, SIZES } from "@/constants/theme";
import { TextInput } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import HeaderChooseProduct from "./component/HeaderChooseProduct";
import ProductCard from "./component/ProductCard";
import BottomSheet from "@/components/BottomSheet";
import Animated, { FadeInDown } from "react-native-reanimated";
import PaymentMethod from "./component/PaymentMethod";

const ChooseProduct = () => {
  const router: any = useRouter();
  const [view, setView] = useState("main");

  const handleView = (name: string) => {
    setView(name);
  };

  return (
    <Container>
      {view === "payment" && <PaymentMethod setView={setView} />}
      {view === "main" && (
        <View style={{ flex: 1 }}>
          <HeaderChooseProduct />
          <View style={styles.container}>
            <Text style={styles.textHeader}>Food</Text>
            <View>
              <ProductCard />
            </View>
          </View>
          <Animated.View
            style={styles.card}
            entering={FadeInDown.delay(100).duration(800)}
          >
            <View style={[styles.wrapper, { marginBottom: 10 }]}>
              <View style={styles.img}></View>
              <View style={styles.wrapperTab}>
                <View style={styles.wrapperText}>
                  <Text style={styles.text}>Select Customer</Text>
                  <Text style={styles.textDesc}>Klik untuk dipilih</Text>
                </View>
                <Ionicons
                  name="chevron-forward-outline"
                  color={"#5CD9F5"}
                  size={26}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.wrapper}
              onPress={() => handleView("payment")}
            >
              <View style={styles.img}></View>
              <View style={styles.wrapperTab}>
                <View style={styles.wrapperText}>
                  <Text style={styles.text}>Select Payment Metode</Text>
                  <Text style={styles.textDesc}>Klik untuk dipilih</Text>
                </View>
                <Ionicons
                  name="chevron-forward-outline"
                  color={"#5CD9F5"}
                  size={26}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.containerText}>
              <Text style={[styles.textTotal, { fontSize: RFValue(14) }]}>
                Total
              </Text>
              <Text style={[styles.textTotal, { fontSize: RFValue(12) }]}>
                Rp 99.000
              </Text>
            </View>
            <Text style={[styles.textTotal, { fontSize: RFValue(14) }]}>
              Dikirim ke Rekening ?
            </Text>

            <TouchableOpacity style={[styles.button, { marginTop: 10 }]}>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "white",
                  fontSize: RFValue(13),
                }}
                onPress={() => router.push("kasir/chooseProduct")}
              >
                Lanjutkan
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}
    </Container>
  );
};

export default ChooseProduct;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textHeader: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(16),
  },
  //slected payment style
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
  card: {
    backgroundColor: "white",
    padding: 20,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute", // Menggunakan absolute
    bottom: 0, // Mengatur agar berada di bagian bawah
    left: 0, // Memastikan elemen meluas ke kiri
    right: 0, // Memastikan elemen meluas ke kanan
  },

  containerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  textTotal: {
    fontFamily: "Poppins-Bold",
  },
  button: {
    backgroundColor: COLORS.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    borderRadius: 10,
  },
});
