import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";
import Container from "@/components/Container";
import Header from "@/components/Header";
import HeaderLeft from "@/components/HeaderLeft";
import { RFValue } from "react-native-responsive-fontsize";
import Animated, { FadeInDown } from "react-native-reanimated";
import { COLORS } from "@/constants/theme";

const DetailTransaction = () => {
  return (
    <Container>
      <HeaderLeft title="Transaction" />
      <View style={styles.containerTextHeader}>
        <Text style={styles.textKasir}>Nama Kasir : Admin</Text>
        <Text style={styles.textDate}>Tanggal 18 feb 2022, 20:30:12</Text>
      </View>
      <View style={styles.containerDetailProduct}>
        <Text style={styles.text}>No. Pembelian : 02333434</Text>
        <Text style={styles.text}>Rincian Produk</Text>

        <View style={styles.containerTable}>
          <Text style={styles.productColumn}>Product A</Text>
          <Text style={styles.qtyColumn}>1 pcs</Text>
          <Text style={styles.priceColumn}>Rp 9000.0000</Text>
          <Text style={styles.totalColumn}>Rp 9000.0000</Text>
        </View>
        <View style={styles.containerTable}>
          <Text style={styles.productColumn}>Product A</Text>
          <Text style={styles.qtyColumn}>1 pcs</Text>
          <Text style={styles.priceColumn}>Rp 9000.0000.00</Text>
          <Text style={styles.totalColumn}>Rp 9000</Text>
        </View>
        <View style={[styles.separator, { marginTop: 10 }]}>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.text}>Rp 860.000</Text>
        </View>
        <Text style={[styles.text, { marginTop: 20 }]}>Rincian Harga</Text>
        <View style={styles.separator}>
          <Text style={styles.rincian}>Pembelian</Text>
          <Text style={styles.rincian}>Rp 860.000</Text>
        </View>
        <View style={styles.separator}>
          <Text style={styles.rincian}>Biaya Pembelian</Text>
          <Text style={styles.rincian}>Rp 860.000</Text>
        </View>
        <View style={styles.separator}>
          <Text style={styles.rincian}>PPH 23 </Text>
          <Text style={styles.rincian}>Rp 860.000</Text>
        </View>
      </View>
      <Animated.View entering={FadeInDown.delay(100).duration(800)} style={{padding:20,position:"absolute",bottom:0,left:0,right:0}}>
        <TouchableOpacity style={[styles.button, { marginTop: 10 }]}>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              color: "white",
              fontSize: RFValue(13),
            }}
            // onPress={() => router.push("kasir/chooseProduct")}
          >
            Lanjutkan
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </Container>
  );
};

export default DetailTransaction;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  containerTextHeader: {
    paddingHorizontal: 20,
    backgroundColor: "white",
    paddingVertical: 20,
    marginTop: 20,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
  textKasir: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(16),
  },
  textDate: {
    fontFamily: "Poppins-Regular",
    fontSize: RFValue(11),
    color: "#9E9E9E",
  },
  containerDetailProduct: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    marginTop: 20,
  },
  //table
  containerTable: {
    flexDirection: "row", // Membuat elemen berada dalam satu baris
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%", // Mengisi seluruh layar
  },
  productColumn: {
    flex: 2, // Lebih besar karena nama produk biasanya lebih panjang
    textAlign: "left",
  },
  qtyColumn: {
    flex: 1, // Lebih kecil karena hanya jumlah
    textAlign: "center",
  },
  priceColumn: {
    flex: 2, // Cukup ruang untuk harga yang panjang
    textAlign: "right",
  },
  totalColumn: {
    flex: 2, // Ruang untuk total harga
    textAlign: "right",
  },
  separator: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(14),
  },
  rincian: {
    fontFamily: "Poppins-Regular",
    fontSize: RFValue(12),
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
