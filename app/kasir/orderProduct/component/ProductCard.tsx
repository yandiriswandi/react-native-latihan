import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, SIZES } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";

const ProductCard = () => {
  const [product, setProduct] = useState([
    { name: "product 1", price: "10000", stock: 20000, id: "hallo" },
    { name: "product 2", price: "10000", stock: 20000, id: "dimana" },
  ]);
  const renderItemProduct = ({ item }: any) => {
    return (
      <View style={styles.containerProduct}>
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://down-id.img.susercontent.com/file/id-11134201-7r991-lpkldt6ouwstcd",
            }}
            style={styles.imageProduct}
          />
          <View
            style={{
              flexDirection: "column",
              gap: 2,
              flex: 1,
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            <Text
              style={{ fontFamily: "Poppins-SemiBold", fontSize: RFValue(12) }}
            >
              {item.name}
            </Text>
            <View style={styles.wrapper}>
              <Text style={styles.text}>{item.price}</Text>
              <View style={styles.containerCount}>
                <View style={styles.containerPlusMin}>
                  <Ionicons
                    name="remove-outline"
                    style={[styles.add, { color: "#B3B3B3" }]}
                  />
                  <View style={styles.count}>
                    <Text style={styles.textCount}>1</Text>
                  </View>
                  <Ionicons name="add-outline" style={styles.add} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={product}
      renderItem={renderItemProduct}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  containerProduct: {
    paddingVertical: 10,
    borderBottomColor: COLORS.grey_100,
    borderBottomWidth: 0.8,
    backgroundColor: "white",
  },
  card: {
    flexDirection: "row",
    gap: 20,
    flex: 1,
  },
  imageProduct: {
    width: 76,
    height: 76,
    borderRadius: 5,
  },
  separatorProduct: {
    height: 10, // Tinggi pemisah
    backgroundColor: COLORS.mobile, // Warna pemisah
    width: 10,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: RFValue(12),
    color: COLORS.primary,
  },
  containerCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTotal: { fontFamily: "Poppins-SemiBold", fontSize: 12 },
  containerPlusMin: { flexDirection: "row", alignItems: "center", gap: 10 },
  textCount: {
    fontFamily: "Poppins-SemiBold",
    fontSize: SIZES.isTablet ? RFValue(8) : RFValue(16),
  },
  inputPrice: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  containerPriceInput: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  add: {
    fontSize: RFValue(20),
    color: COLORS.primary,
  },
  count: {
    paddingVertical: 1,
    paddingHorizontal: 15,
    borderStyle: "solid",
    borderColor: COLORS.grey_100,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
