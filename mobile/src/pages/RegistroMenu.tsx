import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export function RegistroMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma Opção de Cadastro</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]} 
        onPress={() => navigation.navigate('CadastroPecas')}
      >
        <Text style={styles.buttonText}>Cadastro de Peças</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]} 
        onPress={() => navigation.navigate('CadastroManutencao')}
      >
        <Text style={styles.buttonText}>Cadastro de Manutenção</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]} 
        onPress={() => navigation.navigate('CadastroMaquina')}
      >
        <Text style={styles.buttonText}>Cadastro de Máquinas</Text>
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
    bottom: 20,
    alignSelf: 'center',
  },
  backIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
