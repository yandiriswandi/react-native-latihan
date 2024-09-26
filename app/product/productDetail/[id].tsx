import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Container from "@/components/Container";
import Header from "../component/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "@/constants/theme";
import { RFValue } from "react-native-responsive-fontsize";
import StyledTextInput from "@/components/StyledTextInput";
import Animated, { FadeInDown } from "react-native-reanimated";

const ProductDetail = () => {
  return (
    <Container>
      <Header title="Product Detail"/>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.wrapperHeaderText}>
            <Text style={styles.HeaderText}>Product Information</Text>
            <TouchableOpacity style={styles.buttonUpload}>
              <Text style={styles.textButtonUpload}>Upload Foto</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperForm}>
            <View>
              <StyledTextInput label="Barcode" type="text" />
              <Image
                source={require("../../../assets/images/barcode.png")}
                style={styles.barcode}
              />
            </View>
            <View>
              <StyledTextInput label="Product Name" type="text" />
            </View>
            <View>
              <StyledTextInput label="Quantity" type="text" />
            </View>
            <View>
              <StyledTextInput label="Sales Price" type="text" />
            </View>
            <View>
              <StyledTextInput label="Description" type="text" />
            </View>
          </View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
          >
            <TouchableOpacity style={[styles.button, { marginTop: 40 }]}>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "white",
                  fontSize: 13,
                }}
              >
                Add Product
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </Container>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  wrapper: {
    borderColor: COLORS.grey_100,
    borderWidth: 0.5,
    borderStyle: "solid",
    backgroundColor: "white",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  wrapperHeaderText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeaderText: { fontFamily: "Poppins-SemiBold", fontSize: RFValue(16) },
  buttonUpload: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  textButtonUpload: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(16),
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  wrapperForm: {
    marginTop: 20,
    flexDirection: "column",
    gap: 20,
  },
  barcode: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    marginTop: 20,
    borderRadius: 10,
  },
});
