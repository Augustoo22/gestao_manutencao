import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export function MachineCard({ name, type, location, onInfoPress }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.machineName}>{name}</Text>
        <Text style={styles.machineType}>Tipo: {type}</Text>

        <View style={styles.locationContainer}>
          <Image source={require('../image/location.png')} style={styles.locationIcon} />
          <Text style={styles.locationText}>{location}</Text>
        </View>

        <TouchableOpacity style={styles.infoButton} onPress={onInfoPress}>
          <Image source={require('../image/infoIcon.png')} style={styles.infoIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  card: {
    width: 250,
    height: 100,
    backgroundColor: '#444444',
    borderRadius: 10,
    borderBottomWidth: 5,
    borderColor: 'red',
    padding: 10,
    position: 'relative',
  },
  machineName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  machineType: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  locationText: {
    fontSize: 12,
    color: 'white',
  },
  infoButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  infoIcon: {
    width: 25,
    height: 25,
  },
});
