import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderProfile from "./component/HeaderProfile";
import { Stack } from "expo-router";
import MenuProfile from "./component/MenuProfile";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{headerShown:false}}/>
      <HeaderProfile />
      
      <MenuProfile/>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
});
