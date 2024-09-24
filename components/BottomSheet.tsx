import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("window");

const BottomSheet = ({
  onBackdropPress,
  onBackButtonPress,
  children,
  style,
  isVisible,
  toggleModal,
  customHeight,
}: any) => {
  return (
    <Modal
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackButtonPress}
      isVisible={isVisible}
      swipeDirection={"down"}
      onSwipeComplete={toggleModal}
      // animationIn={'bounceInUp'}
      // animationOut={'bounceOutDown'}
      animationInTiming={900}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={900}
    >
      <View style={[getModalContainerStyle(customHeight), { ...style }]}>
        <View style={styles.line} />
        {children}
      </View>
    </Modal>
  );
};

export default BottomSheet;

const getModalContainerStyle = (customHeight?: number) => ({
  paddingVertical: 10,
  // paddingHorizontal: 20,
  backgroundColor: "white",
  width: width,
  marginLeft: -width * 0.0465,
  borderTopEndRadius: 30,
  borderTopLeftRadius: 30,
  height: customHeight ? customHeight : "", // Jika tidak ada customHeight, gunakan width
  bottom: -20,
  position: "absolute",
  alignItems: "center",
});
const styles = StyleSheet.create({
  iconleft: {
    fontSize: 20,
  },
  title: {
    color: "#1B1D21",
    fontSize: RFValue(16),
    fontWeight: "bold",
    marginRight: width * 0.26,
  },
  line: {
    width: width * 0.1,
    height: width * 0.01,
    backgroundColor: "#5B4C41",
    borderRadius: 10,
  },
});
