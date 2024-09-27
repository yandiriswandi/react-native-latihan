import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, SIZES } from "@/constants/theme";
import { useRouter } from "expo-router";
import ProfileIcon from "../../../assets/svg/menuProfile/user.svg";
import LockIcon from "../../../assets/svg/menuProfile/lock.svg";
import AboutIcon from "../../../assets/svg/menuProfile/about.svg";
import LogoutIcon from "../../../assets/svg/menuProfile/logout.svg";
import { SvgProps } from "react-native-svg";

interface typeMenu {
  id: string;
  icon: React.FC<SvgProps>;
  title: string;
  description: string;
  route?:string
}

const MenuProfile = () => {
  const router: any = useRouter();
  const [menu, setMenu] = useState([
    {
      id: "1",
      icon: ProfileIcon,
      title: "Profil Anda",
      description: "Edit Profile",
      route:"profile/editProfile"
    },
    {
      id: "2",
      icon: LockIcon,
      title: "Ubah Kata Sandi",
      description: "Ubah Kata Sandi",
    },
    {
      id: "3",
      icon: LockIcon,
      title: "Ubah Pin",
      description: "Edit Pin",
    },
    {
      id: "4",
      icon: AboutIcon,
      title: "Tentang Aplikasi",
      description: "Kebijakan privasi, Syarat dan Ketentuan",
    },
  ]);

  const renderItem = ({ item }: { item: typeMenu }) => {
    return (
      <TouchableOpacity
        style={[styles.wrapper, { marginBottom: 10 }]}
        onPress={() => router.push(item.route)}
      >
        <View style={styles.img}>
          <item.icon />
        </View>
        <View style={styles.wrapperTab}>
          <View style={styles.wrapperText}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.textDesc}>Klik untuk dipilih</Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            color={COLORS.primary}
            size={26}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={menu}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={[styles.wrapperLogout, { marginTop: 10 }]}
        onPress={() => router.push("kasir/detailTransaction")}
      >
        <View style={[styles.img,{backgroundColor:"#D82C0D"}]}>
          <LogoutIcon />
        </View>
        <View style={styles.wrapperTab}>
          <View style={styles.wrapperText}>
            <Text style={[styles.text,{color:"#D82C0D"}]}>Logout</Text>
            <Text style={styles.textDesc}>Leave and exit your account</Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            color="#D82C0D"
            size={26}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MenuProfile;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingVertical: 20,
    gap: 20,
    alignItems: "center",
    borderBottomColor: COLORS.grey_100,
    borderBottomWidth: 0.5,
  },
  wrapperLogout: {
    flexDirection: "row",
    paddingVertical: 20,
    gap: 20,
    alignItems: "center",
    borderTopColor: COLORS.grey_100,
    borderTopWidth: 0.5,
  },
  img: {
    padding: 15,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(14),
    color: COLORS.primary,
  },
  textDesc: {
    fontFamily: "Poppins-Medium",
    fontSize: RFValue(12),
    color: "#8F92A1",
  },
  wrapperText: {
    flexDirection: "column",
  },
  wrapperTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginTop: SIZES.height * 0.2,
  },
  headerText: {
    fontFamily: "Poppins-Medium",
    fontSize: RFValue(14),
    padding: 10,
  },
});
