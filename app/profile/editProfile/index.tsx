import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "@/constants/theme";
import { RFValue } from "react-native-responsive-fontsize";
import StyledTextInput from "@/components/StyledTextInput";
import Animated, { FadeInDown } from "react-native-reanimated";

const EditProfile = () => {
  return (
    <Container style={{ backgroundColor: "white" }}>
      <Header title="Edit Profile" />

      <View style={styles.wrapper}>
        <View style={styles.wrapperForm}>
          <View>
            <StyledTextInput label="Full Name" type="text" />
          </View>
          <View>
            <StyledTextInput label="Nomor Handphone" type="text" />
          </View>
          <View>
            <StyledTextInput label="Email" type="text" />
          </View>
          <View>
            <StyledTextInput label="Jenis Kelamin" type="text" />
          </View>
          <View>
            <StyledTextInput label="Tempat Lahir" type="text" />
          </View>
          <View>
            <StyledTextInput label="Tangal Lahir" type="text" />
          </View>
          <View>
            <StyledTextInput label="Agama" type="text" />
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
              Simpan
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Container>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  wrapper: {
    paddingHorizontal: 20,
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
