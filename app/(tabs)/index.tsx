import { ScrollView, StyleSheet, View } from "react-native";

import CardHome from "@/components/CardHome";
import HeaderStatusBar from "@/components/HeaderStatusBar";
import MenuHome from "@/components/MenuHome";
import ProductHome from "@/components/ProductHome";
import { Stack, useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Interset from "../../assets/svg/Intersect.svg";
import SwiperHome from "@/components/SwiperHome";
import HelpCenter from "@/components/HelpCenter";
import Navbar from "@/components/Navbar";

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
      <Navbar />
        <View style={styles.card}>
          <CardHome />
          <MenuHome />
          {/* <Interset style={{ marginTop: 100 }} /> */}
        </View>
        <SwiperHome />
        <HelpCenter />
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
