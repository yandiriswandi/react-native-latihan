import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "@/constants/theme";
const { height, width } = Dimensions.get("window");
import Interset from "../assets/svg/Intersect.svg";
export default function SwiperHome() {
  const [data, SetData] = useState([1, 1, 1, 1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
      }}
    >
      <View
        style={{
          height: 140,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <ImageBackground
                source={require("../assets/images/Intersect.png")}
                resizeMode="cover"
                style={{
                  width: width - 50,
                  height: 140,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              //   <View
              //     style={{
              //       width: width - 50,
              //       height: 125,
              //       justifyContent: "center",
              //       alignItems: "center",
              //     }}
              //   >
              //     <TouchableOpacity
              //       disabled={true}
              //       style={{
              //         width: "90%",
              //         height: "90%",
              //         backgroundColor: "green",
              //         borderRadius: 10,
              //       }}
              //     >
              //         <Interset></Interset>
              //     </TouchableOpacity>
              //   </View>
            );
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: width,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.map((item, index) => {
          return (
            <View
              style={{
                width: currentIndex == index ? 50 : 8,
                height: currentIndex == index ? 10 : 8,
                borderRadius: currentIndex == index ? 5 : 4,
                backgroundColor:
                  currentIndex == index ? COLORS.primary : COLORS.primary,
                marginLeft: 5,
              }}
            ></View>
          );
        })}
      </View>
    </View>
  );
}
