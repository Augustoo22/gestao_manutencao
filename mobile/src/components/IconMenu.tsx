import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export function IconMenu({ imageSource, label, onPress }) {
  return (
    <TouchableOpacity style={styles.menuContainer} onPress={onPress}>
      <View style={styles.background}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    alignItems: 'center',
    margin: 10,
  },
  background: {
    width: 60,
    height: 60,
    backgroundColor: '#d72323',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: 60,
    height: 60, 
  },
  label: {
    textAlign: 'center',
    fontSize: 10,
    color: '#fff',
    marginTop: 5, // Adds spacing between the image and the label
  },
});
