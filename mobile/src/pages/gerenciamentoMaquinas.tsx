import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { MachineCard } from '../components/machineCard'; // Certifique-se de ajustar o caminho conforme necessário

export function Gerenciamento_maquinas({ navigation }) {

  const handleInfoPress = (machineName) => {
    alert(`Status da maquina: ${machineName}`);
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Gerenciamento de Máquinas</Text>

      <Image
        source={require('../image/logo.png')}
        style={styles.logo}
      />

      {/* ScrollView com fundo branco, centralizado e com altura ajustada */}
      <ScrollView contentContainerStyle={styles.machineList} style={styles.scrollViewBackground}>
        <MachineCard 
          name="Máquina A" 
          type="Corte" 
          location="Próximo do Elevador" 
          onInfoPress={() => handleInfoPress('Liberada')} 
        />
        <MachineCard 
          name="Máquina B" 
          type="Corte" 
          location="Próximo do Elevador" 
          onInfoPress={() => handleInfoPress('Manutenção')} 
        />
        <MachineCard 
          name="Máquina C" 
          type="Corte" 
          location="Próximo do Elevador" 
          onInfoPress={() => handleInfoPress('Parada')} 
        />
        <MachineCard 
          name="Máquina D" 
          type="Corte" 
          location="Próximo do Elevador" 
          onInfoPress={() => handleInfoPress('Corretiva')} 
        />
        <MachineCard 
          name="Máquina E" 
          type="Corte" 
          location="Próximo do Elevador" 
          onInfoPress={() => handleInfoPress('Parada')} 
        />
        <MachineCard 
          name="Máquina F" 
          type="Corte" 
          location="Próximo do Elevador" 
          onInfoPress={() => handleInfoPress('Parada')} 
        />
      </ScrollView>

      {/* Botão de voltar posicionado fora do fundo branco */}
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
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  scrollViewBackground: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: 300,
    height: '60%',
    alignSelf: 'center',
    marginBottom: 40,
  },
  machineList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
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
