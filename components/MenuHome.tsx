import { SIZES } from "@/constants/theme";
import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import Customer from "../assets/svg/mainmenuicon/customerMenu.svg";
import Invoice from "../assets/svg/mainmenuicon/invoice.svg";
import Product from "../assets/svg/mainmenuicon/product.svg";
import Report from "../assets/svg/mainmenuicon/reportMenu.svg";
import Stock from "../assets/svg/mainmenuicon/stock.svg";
import Transaction from "../assets/svg/mainmenuicon/transaction.svg";
import { Router, useRouter } from "expo-router";
interface typeData {
  id: string;
  name: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  empty?: boolean; // optional property
  route?:string
}
const menuData = [
  { id: "1", name: "Product", icon: Product, route: "product" },
  { id: "2", name: "Stock", icon: Stock },
  { id: "3", name: "Invoice", icon: Invoice },
  { id: "4", name: "Transaction", icon: Transaction },
  { id: "5", name: "Customer", icon: Customer },
  { id: "7", name: "Report", icon: Report },
];

const MenuHome = () => {
  const numColumns = SIZES.isTablet ? 6 : 4;
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth / numColumns;
  const router: any = useRouter();

  const formatData = (data: any, numColumns: any) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;

    // Jika elemen di baris terakhir kurang dari jumlah kolom, tambahkan elemen kosong
    while (
      numberOfElementsLastRow !== 0 &&
      numberOfElementsLastRow !== numColumns
    ) {
      data.push({ id: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }

    return data;
  };

  const handleClick = (item: typeData) => {
    router.push(item.route);
  };

  const renderItem = ({ item }: { item: typeData }) => {
    if (item.empty) {
      return <View style={[styles.menuItem, styles.invisible]} />;
    }
    return (
      <Animated.View
        style={[styles.menuItem, { width: itemWidth }]}
        entering={FadeInUp.delay(200).duration(1000).springify()}
      >
        <TouchableOpacity onPress={() => handleClick(item)}>
          <View style={styles.card}>
            <item.icon style={styles.icon} />
          </View>
          <Text style={styles.menuText}>{item.name}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View>
      <FlatList
        data={formatData(menuData, numColumns)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
      />
    </View>
  );
};

export default MenuHome;

const styles = StyleSheet.create({
  menuItem: {
    justifyContent: "center",
    flex: 1, // Mengambil ruang penuh dari kolom yang tersedia
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 10,
  },
  invisible: {
    backgroundColor: "transparent",
  },
  menuText: {
    fontSize: RFValue(8),
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
  },
  card: {
    backgroundColor: "rgba(239, 76, 45, 0.5)",
    width: 66.55,
    height: 44.71,
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginTop: -10,
  },
});
