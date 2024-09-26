import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useRef, useState } from 'react';
import { Animated, LayoutAnimation, StyleSheet, TouchableOpacity, useColorScheme, View, Easing } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export function CollapsibleCustom({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(0);
  const theme = useColorScheme() ?? 'light';

  const toggleCollapsible = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen((prev) => !prev);

    Animated.timing(animatedHeight, {
      toValue: isOpen ? 0 : contentHeight, // 0 jika ditutup, contentHeight jika dibuka
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false, // Karena kita mengubah ukuran ketinggian
    }).start();
  };

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={toggleCollapsible}
        activeOpacity={0.8}>
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-up'}
          size={18}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
      </TouchableOpacity>

      {/* View to measure content height */}
      <View
        style={styles.hiddenContent}
        onLayout={(event) => setContentHeight(event.nativeEvent.layout.height)}>
        {children}
      </View>

      {/* Animated collapsible content */}
      <Animated.View style={[styles.content, { maxHeight: animatedHeight }]}>
        {children}
      </Animated.View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    justifyContent: 'space-between',
  },
  content: {
    overflow: 'hidden', // Untuk memastikan konten tidak muncul di luar area saat collapsed
  },
  hiddenContent: {
    position: 'absolute',
    opacity: 0,
    zIndex: -1,
  },
});
