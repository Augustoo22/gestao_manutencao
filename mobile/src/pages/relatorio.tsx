import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { RelatorioItem } from '../components/relatorioItem';

interface RelatorioProps {
  navigation: any; // Use o tipo adequado de navegação, dependendo da configuração
}

export function Relatorio({ navigation }: RelatorioProps) {
  // Definindo os dados dos relatórios em um array
  const relatorios = [
    { title: "Máquina A", status: "Pendente", description: "Corte - Elevador" },
    { title: "Máquina B", status: "Pendente", description: "Corte - Corredor" },
    { title: "Máquina C", status: "Pendente", description: "Corte - Armazém" },
    { title: "Máquina D", status: "Pendente", description: "Corte - Oficina" },
    // Adicione mais itens conforme necessário
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatórios</Text>

      <Image
        source={require('../image/logo.png')}
        style={styles.logo}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.scrollViewBackground}>
        <Text style={styles.sectionTitle}>Manutenções Pendentes</Text>
        {relatorios.map((item, index) => (
          <RelatorioItem
            key={index}
            title={item.title}
            status={item.status}
            description={item.description}
            onPress={() =>
              navigation.navigate('MaquinaDetalhes', {
                maquina: { title: item.title, status: item.status, description: item.description },
              })
            }
          />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../image/backIcon.png')} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444444',
    padding: 15,
    justifyContent: 'flex-start',
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
    paddingHorizontal: 15,
    alignSelf: 'center',
    marginBottom: 40,
    width: '90%', // Usando uma largura dinâmica
  },
  scrollContainer: {
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
    bottom: 20,
    alignSelf: 'center',
  },
  backIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
