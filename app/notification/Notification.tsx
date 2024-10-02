import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "@/components/Container";
import HeaderLeft from "@/components/HeaderLeft";
import { COLORS } from "@/constants/theme";

const Notification = () => {
  return (
    <Container>
      <HeaderLeft title="Notification" />
      <View style={styles.container}>
        <View style={styles.containerCard}>
          <View style={styles.wrapperImage}>
            <Image
              source={require("../../assets/images/notif.png")}
              width={20}
              height={20}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.text}>Dapat Emas Periode Sept - Des 2024</Text>
            <Text style={[styles.text,{color:"#9E9E9E"}]}>04 Oktober 2024 ● 08:45 </Text>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 20,
    padding: 20,
  },
  containerCard: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    borderBottomColor: COLORS.grey_100,
    borderBottomWidth: 0.5,
  },
  wrapperImage: {
    backgroundColor: COLORS.primary,
    width: 35,
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  containerText: {
    flex: 1,
    flexDirection:"column",
    justifyContent:"space-between"
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color:"#273240"
  },
});
