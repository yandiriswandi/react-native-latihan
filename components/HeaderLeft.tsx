import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

interface initialProps {
  title: string;
}
const HeaderLeft = (props: initialProps) => {
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
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor:"white",
    alignItems:"center",
    gap:10
  },
  text: {
    color:COLORS.primary,
    fontFamily:"Poppins-SemiBold",
    fontSize:14
  },
});
