import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "@/constants/theme";
import Animated, { FadeInDown } from "react-native-reanimated";
// import { FlatList } from "react-native-gesture-handler";

const ProductHome = () => {
  const product = [
    {
      name: "Produk 1",
      id: "s32n4n2jjd33",
    },
  ];

  return (
    <Animated.View
      style={styles.container}
      entering={FadeInDown.delay(200).duration(1000).springify()}
    >
      <View>
        <View style={styles.border}>
          <Text style={styles.textBorder}>Recent Transaction</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.productList}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://down-id.img.susercontent.com/file/id-11134201-7r991-lpkldt6ouwstcd",
              }}
              style={{ width: 35, height: 35, borderRadius: 5 }}
            />
            <View>
              <Text style={styles.styleProductText}>Produk</Text>
              <View style={styles.containerTextProduct}>
                <Text style={styles.styleProductText}>SO : 0232342344</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.styleProductText}>08:45 AM</Text>
              </View>
            </View>
          </View>
          <Text style={styles.price}>Rp 500</Text>
        </View>
        <View style={styles.productList}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://down-id.img.susercontent.com/file/id-11134201-7r991-lpkldt6ouwstcd",
              }}
              style={{ width: 35, height: 35, borderRadius: 5 }}
            />
            <View>
              <Text style={styles.styleProductText}>Produk</Text>
              <View style={styles.containerTextProduct}>
                <Text style={styles.styleProductText}>SO : 0232342344</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.styleProductText}>08:45 AM</Text>
              </View>
            </View>
          </View>
          <Text style={styles.price}>Rp 500</Text>
        </View>
        <View style={styles.productList}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://down-id.img.susercontent.com/file/id-11134201-7r991-lpkldt6ouwstcd",
              }}
              style={{ width: 35, height: 35, borderRadius: 5 }}
            />
            <View>
              <Text style={styles.styleProductText}>Produk</Text>
              <View style={styles.containerTextProduct}>
                <Text style={styles.styleProductText}>SO : 0232342344</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.styleProductText}>08:45 AM</Text>
              </View>
            </View>
          </View>
          <Text style={styles.price}>Rp 500</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default ProductHome;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    paddingBottom: 100,
  },
  border: {
    borderBottomColor: "#E9EBEB",
    borderBottomWidth: 10,
    paddingHorizontal: 30,
    marginTop: 10,
    paddingVertical: 10,
  },
  productList: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  textBorder: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(12),
  },
  containerTextProduct: {
    flexDirection: "row",
    gap: 4,
    color: COLORS.grey_100,
  },
  price: {
    fontFamily: "Poppins-Regular",
    fontSize: RFValue(13),
  },
  dot: {
    color: COLORS.grey_100,
  },
  styleProductText: {
    color: COLORS.grey_100,
    fontFamily: "Poppins-Regular",
    fontSize: RFValue(12),
  },
});
