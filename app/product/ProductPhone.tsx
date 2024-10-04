import BottomSheet from "@/components/BottomSheet";
import Container from "@/components/Container";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import EllipsisIcon from "../../assets/svg/ellipsis.svg";
import { useRouter } from "expo-router";
const { width } = Dimensions.get("window");

interface filterType {
  name: string;
  value: string | number;
}

const ProductsPhone = () => {
  const filter = [
    { name: "filter", value: "" },
    { name: "Aktif", value: 20 },
    { name: "Terbaru", value: "" },
    { name: "Nonaktif", value: 5 },
  ];
  const router: any = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const [product, setProduct] = useState([
    { name: "product 1", price: "10000", stock: 20000, id: "hallo" },
    { name: "product 2", price: "10000", stock: 20000, id: "dimana" },
  ]);
  const [active, setActive] = useState<filterType>({
    name: "filter",
    value: "",
  });
  const [visible, setVisible] = useState({
    stock: false,
    price: false,
  });

  const toggleModalFIlter = () => {
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }: { item: filterType }) => {
    const handleClick = () => {
      setActive(item);
      setVisible({ ...visible, stock: !visible.stock });
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
          <View style={{ flexDirection: "column", gap: 2 }}>
            <Text
              style={{ fontFamily: "Poppins-SemiBold", fontSize: RFValue(12) }}
            >
              {item.name}
            </Text>
            <Text style={styles.text}>{item.price}</Text>
            <Text>stock : {item.price}</Text>
            <View
              style={{
                backgroundColor: COLORS.grey_200,
                padding: 5,
                borderRadius: 5,
                alignSelf: "flex-start",
              }}
            >
              <Text>Aktif</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonProduct}
            onPress={() => setVisible({ ...visible, stock: !visible.stock })}
          >
            <Text style={styles.textButton}>Change Price</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonProduct}
            onPress={() => setVisible({ ...visible, price: !visible.price })}
          >
            <Text style={styles.textButton}>Change Price</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push(`product/productDetail/${item.id}`)}
          >
            <EllipsisIcon />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const ItemSeparator = () => {
    return <View style={styles.separator} />;
  };
  const ItemSeparatorProduct = () => {
    return <View style={styles.separatorProduct} />;
  };

  return (
    <Container style={{ bakgroundColor: "#F2F3F4" }}>
      <TouchableOpacity
        style={styles.containerModalFilter}
        onPressOut={toggleModalFIlter}
      >
        <Modal
          visible={modalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={toggleModalFIlter}
        >
          <View style={styles.modalOverlayModalFilter}>
            <View style={styles.modalContentModalFilter}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.modalTextModalFilter}>Short</Text>
                <Ionicons
                  name="close-sharp"
                  size={25}
                  color={COLORS.primary}
                  onPress={toggleModal}
                />
              </View>
              <FlatList
                data={filter}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                ItemSeparatorComponent={ItemSeparator}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
      <View style={styles.containerTop}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>List Product</Text>
          <View style={styles.containerIcon}>
            <TouchableOpacity
              style={styles.plus}
              onPress={() => router.push("product/productAdd")}
            >
              <Ionicons name="add-outline" style={styles.add} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <EllipsisIcon />
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Search your product or SKU"
          keyboardType="web-search" // Simulasi untuk pencarian
          returnKeyType="search" // Mengubah tombol return menjadi "Search"
        />
        <View>
          <FlatList
            data={filter}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            ItemSeparatorComponent={ItemSeparator} // Menggunakan komponen pemisah
            horizontal={true} // Mengatur agar FlatList digulir secara horizontal
            showsHorizontalScrollIndicator={false} // Opsional: Menyembunyikan indikator gulir horizontal
          />
        </View>
      </View>
      <View>
        <FlatList
          data={product}
          renderItem={renderItemProduct}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemSeparatorProduct} // Menggunakan komponen pemisah
        />
      </View>
      <BottomSheet
        isVisible={visible.stock}
        // customHeight={500}
        onBackdropPress={() =>
          setVisible({ ...visible, stock: !visible.stock })
        }
        toggleModal={() => setVisible({ ...visible, stock: !visible.stock })}
      >
        <View style={styles.containerModal}>
          <View style={styles.containerModalStock}>
            <Text style={styles.x}>X</Text>
            <Text style={styles.settingStock}>Setting Stock</Text>
          </View>
          <View style={styles.containerCount}>
            <Text style={styles.textTotal}>Total Stock</Text>
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
          <Animated.View entering={FadeInDown.delay(100).duration(800)}>
            <TouchableOpacity style={[styles.button, { marginTop: 10 }]}>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "white",
                  fontSize: RFValue(13),
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </BottomSheet>
      <BottomSheet
        isVisible={visible.price}
        // customHeight={500}
        onBackdropPress={() =>
          setVisible({ ...visible, price: !visible.price })
        }
        toggleModal={() => setVisible({ ...visible, price: !visible.price })}
      >
        <View style={styles.containerModal}>
          <View style={styles.containerModalStock}>
            <Text style={styles.x}>X</Text>
            <Text style={styles.settingStock}>Setting Price</Text>
          </View>
          <View style={styles.containerPriceInput}>
            <TextInput style={styles.inputPrice} />
            <Ionicons name="close-sharp" style={styles.close} />
          </View>
          <Animated.View entering={FadeInDown.delay(100).duration(800)}>
            <TouchableOpacity style={[styles.button, { marginTop: 10 }]}>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "white",
                  fontSize: RFValue(13),
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </BottomSheet>
    </Container>
  );
};

export default ProductsPhone;

const styles = StyleSheet.create({
  containerTop: {
    paddingVertical: 20,
    borderBottomColor: COLORS.grey_100,
    borderStyle: "solid",
    borderBottomWidth: 0.5,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  plus: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderStyle: "solid",
    borderColor: COLORS.grey_100,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: COLORS.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    borderRadius: 10,
  },
  textHeader: {
    fontSize: RFValue(16),
    fontFamily: "Poppins-SemiBold",
    color: COLORS.primary,
  },
  containerIcon: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  add: {
    fontSize: RFValue(20),
    color: COLORS.primary,
  },
  textInput: {
    borderStyle: "solid",
    borderColor: COLORS.grey_100,
    borderWidth: 0.5,
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  filter: {
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: COLORS.grey_100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    marginTop: 10,
  },
  filterActive: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    marginTop: 10,
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
  separatorProduct: {
    height: 10, // Tinggi pemisah
    backgroundColor: COLORS.mobile, // Warna pemisah
    width: 10,
  },
  containerProduct: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  card: {
    flexDirection: "row",
    gap: 20,
  },
  imageProduct: {
    width: 76,
    height: 76,
    borderRadius: 5,
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
    fontSize: RFValue(12),
    color: COLORS.grey_100,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: RFValue(12),
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
  containerModal: {
    marginTop: width * 0.001,
    width: "100%",
    paddingHorizontal: 20,
  },
  containerModalStock: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  x: {
    fontFamily: "Poppins-Light",
    fontSize: RFValue(32),
    color: COLORS.primary,
  },
  settingStock: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(16),
  },
  containerCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  textTotal: { fontFamily: "Poppins-SemiBold", fontSize: 12 },
  containerPlusMin: { flexDirection: "row", alignItems: "center", gap: 10 },
  textCount: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(16),
  },
  inputPrice: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  containerPriceInput: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  close: {
    color: COLORS.primary,
    fontWeight: 600,
    fontSize: 20,
    position: "absolute",
    right: 0,
  },

  //modal
  containerModalFilter: {},
  buttonModalFilter: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  buttonTextModalFilter: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalOverlayModalFilter: {
    flex: 1,
    justifyContent: "flex-start", // Aligns modal content to the top
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent black background
  },
  modalContentModalFilter: {
    backgroundColor: "#fff",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  modalTextModalFilter: {
    fontSize: RFValue(16),
    fontFamily: "Poppins-SemiBold",
    color: COLORS.primary,
  },
  closeButtonModalFilter: {
    backgroundColor: "#FF5252",
    padding: 10,
    borderRadius: 5,
  },
});
