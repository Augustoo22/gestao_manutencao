import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { RelatorioItem } from '../components/relatorioItem'; // Novo componente de relatório

export function Relatorio({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatórios</Text>

      <Image
        source={require('../image/logo.png')}
        style={styles.logo}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.scrollViewBackground}>
        <Text style={styles.sectionTitle}>Manutenções Pendentes</Text>
        
        <RelatorioItem 
          title="Máquina A" 
          status="Pendente" 
          description="Corte - Elevador" 
          onPress={() => navigation.navigate('MaquinaDetalhes', { maquina: { title: "Máquina A", status: "Pendente", description: "Corte - Elevador" } })} 
        />
        
        <RelatorioItem 
          title="Máquina B" 
          status="Pendente" 
          description="Corte - Corredor" 
          onPress={() => navigation.navigate('MaquinaDetalhes', { maquina: { title: "Máquina B", status: "Pendente", description: "Corte - Corredor" } })} 
        />

        <RelatorioItem 
          title="Máquina A" 
          status="Pendente" 
          description="Corte - Elevador" 
          onPress={() => navigation.navigate('MaquinaDetalhes', { maquina: { title: "Máquina A", status: "Pendente", description: "Corte - Elevador" } })} 
        />
        
        <RelatorioItem 
          title="Máquina B" 
          status="Pendente" 
          description="Corte - Corredor" 
          onPress={() => navigation.navigate('MaquinaDetalhes', { maquina: { title: "Máquina B", status: "Pendente", description: "Corte - Corredor" } })} 
        />
      </ScrollView>

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
    width: 350,  // Ajuste a largura do fundo branco
    alignSelf: 'center',
    marginBottom: 40, // Espaço para o botão voltar
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
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
