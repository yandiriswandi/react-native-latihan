import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

interface initialProps {
  title: string;
}
const Header = (props: initialProps) => {
  const { title } = props;
  const router= useRouter()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{width:30}} onPress={()=>router.back()}>
        <Ionicons
          size={25}
          name="chevron-back-outline"
          color={COLORS.primary}
          style={{ fontWeight: 600 }}
        />
      </TouchableOpacity>
      <View style={{ flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor:"white"
  },
  text: {
    textAlign: "justify",
    color:COLORS.primary,
    fontFamily:"Poppins-SemiBold",
    fontSize:14
  },
});
