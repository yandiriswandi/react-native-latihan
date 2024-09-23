import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderStatusBar = () => {
  const statusBarHeight = StatusBar.currentHeight || 0;

  return (
    <View
    style={{
      backgroundColor: "#F5F5F5",
      height: statusBarHeight,
      borderBottomEndRadius: 10,
      borderBottomColor: '#9E9E9E',
      borderBottomWidth: 0.5,
    }}
  ></View>
  )
}

export default HeaderStatusBar

const styles = StyleSheet.create({})