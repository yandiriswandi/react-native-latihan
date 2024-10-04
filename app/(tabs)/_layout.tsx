import React from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./index";
import { RFValue } from "react-native-responsive-fontsize";
import QrCode from "../../assets/svg/bottomNavigator/qr.svg";
import { COLORS, SIZES } from "@/constants/theme";
import HomeIcon from "../../assets/svg/bottomNavigator/home.svg";
import InventoryIcon from "../../assets/svg/bottomNavigator/Vector.svg";
import NotificationIcon from "../../assets/svg/bottomNavigator/notification.svg";
import AccountIcon from "../../assets/svg/bottomNavigator/Account.svg";
import HomeIconActive from "../../assets/svg/bottomNavigator/homeActive.svg";
import InventoryIconActive from "../../assets/svg/bottomNavigator/VectorActive.svg";
import NotificationIconActive from "../../assets/svg/bottomNavigator/notificationActive.svg";
import AccountIconActive from "../../assets/svg/bottomNavigator/AccountActive.svg";
import { useRouter } from "expo-router";
import Profile from "../profile";
import Notification from "../notification";

const Screen1 = () => {
  return <View style={styles.screen1} />;
};

const Screen2 = () => {
  return <View style={styles.screen2} />;
};

export default function App() {
  const router: any = useRouter();
  const _renderIcon = (routeName: any, selectedTab: any) => {
    let icon = "";

    switch (routeName) {
      case "Home":
        return (
          <>{selectedTab === "Home" ? <HomeIconActive /> : <HomeIcon />}</>
        );

      case "Notification":
        return (
          <>
            {selectedTab === "Notification" ? (
              <NotificationIconActive />
            ) : (
              <NotificationIcon />
            )}
          </>
        );
      case "Inventory":
        return (
          <>
            {selectedTab === "Inventory" ? (
              <InventoryIconActive />
            ) : (
              <InventoryIcon />
            )}
          </>
        );
      case "Account":
        return (
          <>
            {selectedTab === "Account" ? (
              <AccountIconActive />
            ) : (
              <AccountIcon />
            )}
          </>
        );
    }
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
        <Text
          style={[
            styles.textcolor,
            { color: selectedTab === routeName ? "#0C293D" : "#7C7C7C" },
          ]}
        >
          {routeName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {!SIZES.isTablet ? (
        <CurvedBottomBarExpo.Navigator
          type="DOWN"
          style={styles.bottomBar}
          shadowStyle={styles.shawdow}
          height={55}
          circleWidth={50}
          bgColor="#ECEFF1"
          initialRouteName="title1"
          borderTopLeftRight
          renderCircle={({ selectedTab, navigate }) => (
            <Animated.View style={styles.btnCircleUp}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("kasir")}
              >
                <QrCode />
              </TouchableOpacity>
            </Animated.View>
          )}
          tabBar={renderTabBar}
        >
          <CurvedBottomBarExpo.Screen
            name="Home"
            position="LEFT"
            component={() => <HomeScreen />}
          />
          <CurvedBottomBarExpo.Screen
            name="Inventory"
            position="LEFT"
            component={() => <HomeScreen />}
          />
          <CurvedBottomBarExpo.Screen
            name="Notification"
            component={() => <Notification />}
            position="RIGHT"
          />
          <CurvedBottomBarExpo.Screen
            name="Account"
            component={() => <Profile />}
            position="RIGHT"
          />
        </CurvedBottomBarExpo.Navigator>
      ) : (
        <HomeScreen />
      )}
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    bottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: "#BFEFFF",
  },
  screen2: {
    flex: 1,
    backgroundColor: "#FFEBCD",
  },
  textcolor: {
    fontSize: RFValue(8),
    fontFamily: "Poppins-Medium",
    marginVertical: 5,
  },
});
