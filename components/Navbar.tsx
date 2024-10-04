import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { usePathname, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import HomeIcon from "../assets/svg/bottomNavigator/home.svg";
import InventoryIcon from "../assets/svg/bottomNavigator/Vector.svg";
import NotificationIcon from "../assets/svg/bottomNavigator/notification.svg";
import AccountIcon from "../assets/svg/bottomNavigator/Account.svg";
import HomeIconActive from "../assets/svg/bottomNavigator/homeActive.svg";
import InventoryIconActive from "../assets/svg/bottomNavigator/VectorActive.svg";
import NotificationIconActive from "../assets/svg/bottomNavigator/notificationActive.svg";
import CashierIcon from "../assets/svg/bottomNavigator/cashier.svg";
import CashierActiveIcon from "../assets/svg/bottomNavigator/cashierActive.svg";

import AccountIconActive from "../assets/svg/bottomNavigator/AccountActive.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { useState } from "react";
// import _ from "lodash";
interface PropsType {
  backButton?: boolean;
}

const Navbar = (props: PropsType) => {
  const { backButton } = props;
  const router: any = useRouter();
  const pathname = usePathname(); //
  const [menu, setMenu] = useState([
    {
      id: "1",
      name: "Home",
      route: "/",
      icon: HomeIcon,
      iconActive: HomeIconActive,
    },
    {
      id: "2",
      name: "Cashier",
      route: "/kasir",
      icon: CashierIcon,
      iconActive: CashierActiveIcon,
    },
    {
      id: "3",
      name: "Profile",
      route: "/profile",
      icon: AccountIcon,
      iconActive: AccountIconActive,
    },
    {
      id: "4",
      name: "Notification",
      route: "/notification",
      icon: NotificationIcon,
      iconActive: NotificationIconActive,
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {backButton && (
          <TouchableOpacity style={styles.wrapperBack} onPress={()=>router.back()}>
            <Ionicons size={20} name="chevron-back-sharp" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.navbar}>
        {menu?.map((item: any) => {
          const isActive = pathname === item.route;
          return (
            <TouchableOpacity
              onPress={() => router.push(item.route)}
              style={styles.wrapperNavItem}
            >
              {isActive ? (
                <item.iconActive width={20} height={20} />
              ) : (
                <item.icon width={20} height={20} />
              )}
              <Text
                style={[
                  styles.navItem,
                  { color: isActive ? "black" : "#7C7C7C" },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
        <View>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xjShh4ynJbrgYrW_aB4lhKSxeMzQ3cO_A&s",
            }}
            style={styles.img}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: COLORS.grey_100,
    borderBottomWidth: 0.5,
    borderStyle: "solid",
    backgroundColor:"white",
    zIndex:50
  },
  left: {},
  wrapperBack: {
    borderColor: COLORS.grey_100,
    borderWidth: 0.5,
    borderStyle: "solid",
    padding: 10,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navbar: {
    // height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 40,
    alignItems: "center",
    // backgroundColor: "#007bff",
  },
  navItem: {
    // color: "white",
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
  },
  wrapperNavItem: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});

export default Navbar;
