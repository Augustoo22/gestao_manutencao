import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function RelatorioItem({ title, status, description, onPress }) {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemStatus}>Status: {status}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});
