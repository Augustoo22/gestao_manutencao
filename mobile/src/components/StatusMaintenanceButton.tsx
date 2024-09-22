import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const StatusMaintenanceButton = ({ status, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{status}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#777',
    padding: 5,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default StatusMaintenanceButton;
