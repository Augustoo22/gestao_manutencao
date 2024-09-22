import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

export function MaquinaDetalhes({ route, navigation }) {
  const { maquina } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{maquina.title}</Text>
      <Text style={styles.detail}>Status: {maquina.status}</Text>
      <Text style={styles.detail}>Descrição: {maquina.description}</Text>

      <Text style={styles.historyTitle}>Histórico de Manutenções:</Text>
      
      <Button
        title="Cadastrar Manutenção"
        onPress={() => {
          navigation.navigate('CadastroManutencao');
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    marginBottom: 5,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
