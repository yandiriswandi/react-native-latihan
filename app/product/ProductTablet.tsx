import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { useRouter } from "expo-router";
import EllipsisIcon from "../../assets/svg/ellipsis.svg";
//   import ProductCard from "./orderProduct/component/ProductCard";

interface filterType {
  name: string;
  value: string | number;
  empty?: boolean; // optional property
}

const { width } = Dimensions.get("window");
const numColumns = 4;
const devider = (width * 66) / 100;
const itemWidth = devider / numColumns; // Lebar setiap item

interface filterType {
  name: string;
  value: string | number;
}

const ProductTablet = (props: any) => {
  const router: any = useRouter();
  const [active, setActive] = useState<filterType>({
    name: "filter",
    value: "",
  });
  const filter = [
    { name: "filter", value: "" },
    { name: "Aktif", value: 20 },
    { name: "Terbaru", value: "" },
    { name: "Nonaktif", value: 5 },
  ];
  const [product, setProduct] = useState([
    { name: "product 1", price: "10000", stock: 20000, id: 1 },
    { name: "product 2", price: "10000", stock: 20000, id: 2 },
    { name: "product 2", price: "10000", stock: 20000, id: 3 },
    { name: "product 2", price: "10000", stock: 20000, id: 4 },
    { name: "product 2", price: "10000", stock: 20000, id: 5 },
    { name: "product 2", price: "10000", stock: 20000, id: 6 },
    { name: "product 2", price: "10000", stock: 20000, id: 7 },
    { name: "product 2", price: "10000", stock: 20000, id: 8 },
    { name: "product 2", price: "10000", stock: 20000, id: 9 },
    { name: "product 2", price: "10000", stock: 20000, id: 10 },
  ]);
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

  const renderItem = ({ item }: { item: any }) => {
    const handleClick = () => {
      setActive(item);
    };
    if (item.empty) {
      return <View style={[styles.menuItem, styles.invisible]} />;
    }
    return (
      <TouchableOpacity onPress={handleClick} style={[styles.itemContainer]}>
        <Image
          source={{
            uri: "https://img.lazcdn.com/g/p/99ead462ab1c786438b7cea213421a4e.png_720x720q80.png",
          }}
          style={styles.imageProduct}
        />
        <View>
          <Text style={styles.textTitle}>{item.name}</Text>
          <Text style={styles.textPrice}>{item.price}</Text>
          <Text style={styles.textStock}>stock:{item.stock}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonProduct}
            // onPress={() => setVisible({ ...visible, stock: !visible.stock })}
          >
            <Text style={styles.textButton}>Change Price</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonProduct}
            // onPress={() => setVisible({ ...visible, price: !visible.price })}
          >
            <Text style={styles.textButton}>Change Price</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push(`product/productDetail/${item.id}`)}
          >
            <EllipsisIcon />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorFilter = () => {
    return <View style={styles.separator} />;
  };

  return (
    <Container style={styles.container}>
      <Navbar backButton={true} />
      <View style={styles.wrapper}>
        <View style={styles.wrapperProduct}>
          <View style={styles.wrapperFilter}>
            <View style={styles.wrapperSearch}>
              <TextInput style={styles.inputSearch} />
              <Ionicons name="search" style={styles.icon} size={20} />
            </View>
            <View style={styles.wrapperCategory}>
              <FlatList
                data={filter}
                renderItem={renderItemFilter}
                keyExtractor={(item) => item.name}
                ItemSeparatorComponent={ItemSeparatorFilter} // Menggunakan komponen pemisah
                horizontal={true} // Mengatur agar FlatList digulir secara horizontal
                showsHorizontalScrollIndicator={false} // Opsional: Menyembunyikan indikator gulir horizontal
              />
            </View>
            <View style={styles.containerIcon}>
              <TouchableOpacity
                style={styles.plus}
                onPress={() => router.push("product/productAdd")}
              >
                <Ionicons name="add-outline" style={styles.add} />
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => setModalVisible(true)}> */}
              <EllipsisIcon />
              {/* </TouchableOpacity> */}
            </View>
          </View>
          <View style={styles.wrapperListProduct}>
            <FlatList
              data={formatData(product, numColumns)}
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={ItemSeparatorFilter} // Menggunakan komponen pemisah
              numColumns={numColumns}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default ProductTablet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  wrapper: {
    flexDirection: "row",
    flex: 1,
  },
  wrapperProduct: {
    backgroundColor: COLORS.mobile,
    flex: 1,
  },
  wrapperList: {
    borderLeftColor: COLORS.grey_100,
    backgroundColor: "white",
    borderLeftWidth: 0.5,
    width: "30%",
  },
  wrapperFilter: {
    backgroundColor: "white",
    borderBottomColor: COLORS.grey_100,
    borderBottomWidth: 0.5,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  inputSearch: {
    paddingVertical: 10,
    height: "100%",
    fontFamily: "Poppins-Regular",
  },
  wrapperSearch: {
    borderRightColor: COLORS.grey_100,
    borderRightWidth: 0.5,
    paddingLeft: 40,
    width: "50%",
  },
  icon: {
    position: "absolute",
    left: 12,
    top: 20,
    paddingRight: 20,
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
    fontSize: RFValue(8),
    color: COLORS.grey_100,
  },
  filterTextActive: {
    fontFamily: "Poppins-Regular",
    fontSize: RFValue(8),
    color: "white",
  },
  separator: {
    height: 10, // Tinggi pemisah
    backgroundColor: "transparent", // Warna pemisah
    width: 10,
  },
  wrapperCategory: {
    padding: 10,
  },
  wrapperListProduct: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: "white",
    marginRight: 10,
    flex: 1,
    borderRadius: 10,
  },
  imageProduct: {
    width: "100%", // Mengisi penuh lebar item
    height: 130,
    aspectRatio: 1, // Membuat image berbentuk persegi
    // resizeMode: 'contain',
    borderRadius: 10,
  },
  menuItem: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: "white",
    marginRight: 10,
    flex: 1,
    borderRadius: 10,
  },
  invisible: {
    backgroundColor: "transparent",
  },
  textPrice: {
    textAlign: "center",
    color: COLORS.primary,
    fontFamily: "Poppins-Regular",
  },
  textTitle: { fontFamily: "Poppins-SemiBold", textAlign: "center" },
  textStock: {
    fontFamily: "Poppins-Regular",
    fontSize: RFValue(8),
    color: COLORS.grey_100,
  },
  //card right
  img: {
    width: 53,
    height: 53,
    backgroundColor: COLORS.grey_100,
    borderRadius: 8,
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(9),
  },
  textDesc: {
    fontFamily: "Poppins-Medium",
    fontSize: RFValue(8),
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
    // backgroundColor: "white",
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
    height: 46,
    borderRadius: 10,
  },
  wrapperSelect: {
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    padding: 10,
    gap: 10,
    borderRadius: 16,
  },
  containerIcon: {
    flexDirection: "row",
    gap: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  add: {
    fontSize: RFValue(20),
    color: COLORS.primary,
  },
  plus: {
    paddingVertical: 2,
    marginRight: 10,
    paddingHorizontal: 4,
    borderStyle: "solid",
    borderColor: COLORS.grey_100,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  buttonProduct: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flex: 1,
    borderColor: COLORS.grey_100,
    borderStyle: "solid",
    borderWidth: 0.5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontFamily: "Poppins-Regular",
    fontSize: RFValue(6),
    color: COLORS.grey_100,
  },
});
