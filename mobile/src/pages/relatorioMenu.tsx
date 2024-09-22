import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function relatorioMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um Relatório</Text>

      <Button
        title="Relatório de Manutenções"
        onPress={() => navigation.navigate('relatorio')}
      />
      <Button
        title="Relatório de Desempenho da Equipe"
        onPress={() => navigation.navigate('RelatorioEquipe')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#444444',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
});
