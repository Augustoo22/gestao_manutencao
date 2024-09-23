import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export function RelatorioMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um Relatório</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]} 
        onPress={() => navigation.navigate('Relatorio')}
      >
        <Text style={styles.buttonText}>Relatório de Manutenções</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]} 
        onPress={() => navigation.navigate('RelatorioDesempenho')}
      >
        <Text style={styles.buttonText}>Relatório de Desempenho da Equipe</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]} 
        onPress={() => navigation.navigate('RelatorioEstoque')}
      >
        <Text style={styles.buttonText}>Relatórios de Estoque</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={require('../image/backIcon.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444444',
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    marginVertical: 10,
    width: 300,
    alignSelf: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  backIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
