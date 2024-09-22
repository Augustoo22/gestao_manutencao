import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export function IconMenu({ imageSource, label, onPress }) {
  return (
    <TouchableOpacity className="items-center m-2.5" onPress={onPress}>
      <View className="w-15 h-15 bg-red-600 justify-center items-center rounded-lg">
        <Image source={imageSource} style={styles.image} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60, 
  },
  label: {
    textAlign: 'center',
    fontSize: 10,
    color: '#fff',
    marginTop: 5,
  },
});
