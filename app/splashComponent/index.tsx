import React, { useState } from "react";
import {
  ImageBackground,
  StatusBar,
  Text,
  View,
  StyleSheet,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Animated, {
  FadeInUp,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { COLORS, SIZES } from "../../constants/theme";
import { Stack } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const Index = () => {
  const slides = [
    {
      id: 1,
      title: "Business Efficiency",
      description: "Maximize Your Business Efficiency with EPOS!",
      image: require("../../assets/images/rocket-dynamic-color.png"),
    },
    {
      id: 2,
      title: "Fast, Safe and Practical",
      description:
        "Smart POS for Your Business Success One Step Closer to a More Sophisticated and Organized Business!",
      image: require("../../assets/images/flash-dynamic-color.png"),
    },
    {
      id: 3,
      title: "Transformation Starts Here",
      description: "Manage Sales Easier with Your E POS",
      image: require("../../assets/images/thumb-up-dynamic-color.png"),
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const [showHomePage, setShowHomePage] = useState(false);
  const animationValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(animationValue.value * -50) }],
    };
  });

  const handleSlideChange = (index: number) => {
    setSlideIndex(index);
    animationValue.value = 1; // Reset animasi ketika pindah slide
    animationValue.value = 0; // Trigger ulang animasi
  };

  StatusBar.setBarStyle("light-content", true);
  StatusBar.setBackgroundColor(COLORS.primary);

  const buttonLabel = (icon: any) => {
    return (
      <View
        style={{
          width: 42,
          height: 42,
          display: "flex",
          backgroundColor: COLORS.primary,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons
          size={20}
          name={icon}
          color="white"
          style={{ fontWeight: 600 }}
        />
      </View>
    );
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1 }}>
              <ImageBackground
                source={require("../../assets/images/bgSplash.png")}
                resizeMode="cover"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: SIZES.height * 0.7,
                  width: SIZES.width,
                }}
              >
                <Animated.Image
                  source={item.image}
                  style={[
                    { width: SIZES.width - 80, height: 400 },
                    animatedStyle,
                  ]}
                  resizeMode="contain"
                />
              </ImageBackground>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                  paddingHorizontal: 70,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: COLORS.primary,
                    fontFamily:"Poppins-SemiBold",
                    fontSize:24
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    paddingTop: 5,
                    color: COLORS.title,
                    fontFamily:"Poppins-SemiBold",
                    fontSize:16
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        dotStyle={{
          backgroundColor: COLORS.primary,
        }}
        renderNextButton={() => buttonLabel("chevron-forward-outline")}
        renderDoneButton={() => buttonLabel("chevron-forward-outline")}
        onDone={() => setShowHomePage(true)}
        onSlideChange={handleSlideChange} // Trigger animasi saat slide berubah
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ovalBgH: {
    overflow: "hidden",
    width: 50,
    height: 25,
    position: "absolute",
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
    left: -25,
    top: 10,
    backgroundColor: "transparent",
    transform: [{ scaleX: 7 }],
  },
  ovalBg: {
    backgroundColor: "#a0c580",
    width: 50,
    height: 50,
    transform: [{ scaleX: 7 }],
  },
});

export default Index;
