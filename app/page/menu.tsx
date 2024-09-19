import React from 'react';
import { FlatList, Text, View, Image, StyleSheet, Dimensions } from 'react-native';

// Data menu
const menuData = [
  { id: '1', name: 'Menu 1', icon: 'https://via.placeholder.com/50' },
  { id: '2', name: 'Menu 2', icon: 'https://via.placeholder.com/50' },
  { id: '3', name: 'Menu 3', icon: 'https://via.placeholder.com/50' },
  { id: '4', name: 'Menu 4', icon: 'https://via.placeholder.com/50' },
  { id: '5', name: 'Menu 5', icon: 'https://via.placeholder.com/50' },
  { id: '6', name: 'Menu 6', icon: 'https://via.placeholder.com/50' },
  { id: '7', name: 'Menu 7', icon: 'https://via.placeholder.com/50' },
  { id: '8', name: 'Menu 8', icon: 'https://via.placeholder.com/50' },
  { id: '9', name: 'Menu 9', icon: 'https://via.placeholder.com/50' },
  { id: '10', name: 'Menu 10', icon: 'https://via.placeholder.com/50' },
  { id: '11', name: 'Menu 11', icon: 'https://via.placeholder.com/50' },
  { id: '12', name: 'Menu 12', icon: 'https://via.placeholder.com/50' },
];

const MenuGrid = () => {
  // Lebar layar untuk menentukan lebar setiap kolom
  const numColumns = 4;
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / numColumns;

  const renderItem = ({ item }:any) => (
    <View style={[styles.menuItem, { width: itemWidth }]}>
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <Text style={styles.menuText}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={menuData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
    />
  );
};

// Styling untuk menu
const styles = StyleSheet.create({
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  menuText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default MenuGrid;
