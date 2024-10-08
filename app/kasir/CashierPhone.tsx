import { CollapsibleCustom } from "@/components/CollapsibleCustom";
import { COLORS, SIZES } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
// import App from "../(tabs)/_layout";

interface filterType {
  name: string;
  value: string | number;
}

const CashierPhone = (props: any) => {
  const { product, setActive, active, statusBarHeight, filter } = props;
  const router: any = useRouter();
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
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 2,
              flex: 1,
            }}
          >
            <View style={styles.containerProductName}>
              <Text style={styles.textNameProduct}>stock:{item.stock}</Text>
            </View>
            <Text style={styles.text}>{item.price}</Text>
          </View>
        </View>
        <CollapsibleCustom title={item.name}>
          <View style={styles.containerPlusMin}>
            <View style={styles.cardMinusPlus}>
              <Ionicons name="remove" style={styles.add} />
            </View>
            <Text style={styles.textCount}>1</Text>
            <View style={styles.cardMinusPlus}>
              <Ionicons name="add" style={styles.add} />
            </View>
          </View>
        </CollapsibleCustom>
      </View>
    );
  };
  const renderItemFilter = ({ item }: { item: filterType }) => {
    const handleClick = () => {
      setActive(item);
    };
    return (
      <TouchableOpacity onPress={handleClick}>
        <View
          style={
            active.name === item.name ? styles.filterActive : styles.filter
          }
        >
          <Text
            style={
              active.name === item.name
                ? styles.filterTextActive
                : styles.filterText
            }
          >
            {item.name}
            {item.value && "(" + item.value + ")"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const ItemSeparatorFilter = () => {
    return <View style={styles.separator} />;
  };
  const sparatorComponent = () => {
    return (
      <View
        style={{ width: 10, height: 10, backgroundColor: "tranparent" }}
      ></View>
    );
  };

  return (
    <View style={styles.containerMain}>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          backgroundColor: COLORS.primary,
        }}
      >
        <View
          style={{
            height: statusBarHeight,
          }}
        ></View>
        <Text
          style={{
            paddingHorizontal: 20,
            fontFamily: "Poppins-SemiBold",
            fontSize: RFValue(16),
            color: "white",
            paddingBottom: 10,
            marginTop: 20,
          }}
        >
          Kasir
        </Text>
      </View>
      <View style={styles.containerFilter}>
        <View>
          <FlatList
            data={filter}
            renderItem={renderItemFilter}
            keyExtractor={(item) => item.name}
            ItemSeparatorComponent={ItemSeparatorFilter} // Menggunakan komponen pemisah
            horizontal={true} // Mengatur agar FlatList digulir secara horizontal
            showsHorizontalScrollIndicator={false} // Opsional: Menyembunyikan indikator gulir horizontal
          />
        </View>
        <View style={styles.containerHeader}>
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            keyboardType="web-search" // Simulasi untuk pencarian
            returnKeyType="search" // Mengubah tombol return menjadi "Search"
          />
          <TouchableOpacity
            style={styles.wrapperBarcode}
            onPress={() => router.push("scan")}
          >
            <Image source={require("../../assets/images/barcode.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 13, backgroundColor: COLORS.mobile }} />
      <View style={styles.container}>
        <FlatList
          data={product}
          renderItem={renderItemProduct}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
        <Animated.View entering={FadeInDown.delay(100).duration(800)}>
          <TouchableOpacity style={[styles.button, { marginTop: 10 }]}>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "white",
                fontSize: RFValue(13),
              }}
              onPress={() => router.push("kasir/orderProduct")}
            >
              Lanjutkan
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default CashierPhone;

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: "white",
    flex: 1,
  },
  containerFilter: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  containerHeader: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 10,
  },
  container: {
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "white",
    flex: 1,
    paddingBottom: 20,
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(12),
  },
  textNameProduct: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(10),
    color: "#EF4C2D",
  },
  containerProductName: {
    backgroundColor: "rgba(239, 76, 45, 0.5)",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  textInput: {
    borderStyle: "solid",
    borderColor: COLORS.grey_100,
    borderWidth: 0.5,
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 15,
    flex: 1,
  },
  wrapperBarcode: {
    borderStyle: "solid",
    borderColor: COLORS.grey_100,
    borderWidth: 0.5,
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  containerProduct: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
  },
  card: {
    flexDirection: "row",
    gap: 20,
  },
  imageProduct: {
    width: 53,
    height: 53,
    borderRadius: 5,
  },
  containerPlusMin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  cardMinusPlus: {
    backgroundColor: COLORS.primary,
    borderRadius: 6,
  },
  add: {
    fontSize: RFValue(20),
    color: "white",
  },

  textCount: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(16),
  },
  button: {
    backgroundColor: COLORS.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    borderRadius: 10,
  },
  filter: {
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: COLORS.grey_100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  filterActive: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  filterText: {
    fontFamily: "Poppins-Regular",
    fontSize: RFValue(12),
    color: COLORS.grey_100,
  },
  filterTextActive: {
    fontFamily: "Poppins-Regular",
    fontSize: RFValue(12),
    color: "white",
  },
  separator: {
    height: 10, // Tinggi pemisah
    backgroundColor: "transparent", // Warna pemisah
    width: 10,
  },
});
