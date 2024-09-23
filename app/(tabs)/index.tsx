import {
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Stack, useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HeaderStatusBar from "@/components/HeaderStatusBar";
import CardHome from "@/components/CardHome";
import MenuHome from "@/components/MenuHome";
import Interset from "../../assets/svg/Intersect.svg";
import ProductHome from "@/components/ProductHome";
import { useEffect } from "react";

export default function HomeScreen({ navigation }: any) {
  const router: any = useRouter();
  const handleNavigate = () => {
    router.push({
      pathname: "login",
      params: {
        name: "Yandi",
        age: 25,
        data: [{ sandi: "hallo", dimana: "haiiii" }],
      },
    });
  };

  return (
    <GestureHandlerRootView>
      <ScrollView style={styles.container}>
        <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
        <HeaderStatusBar />
        <View style={styles.card}>
          <CardHome />
          <MenuHome />
          <Interset style={{ marginTop: 100 }} />
        </View>
        <ProductHome />
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 30,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    paddingBottom: 40,
    backgroundColor: "white",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
