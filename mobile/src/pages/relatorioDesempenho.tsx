import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, ScrollView, Alert } from 'react-native';
import { Image } from 'react-native';


export function RelatorioDesempenho({ navigation }) {
  const [selectedTeam, setSelectedTeam] = useState('Equipe A');
  const [selectedPeriod, setSelectedPeriod] = useState('Última semana');
  const [modalVisible, setModalVisible] = useState(null);

  const sampleData = {
    "Equipe A": {
      "tempoResolucao": "4 horas",
      "manutencoesRealizadas": 15,
      "colaboradores": {
        "João": 6,
        "Maria": 4,
        "Carlos": 5,
      },
      "pecasMateriais": [
        { nome: "Parafuso", quantidade: 50 },
        { nome: "Lubrificante", quantidade: 10 },
      ],
    },
    "Equipe B": {
      "tempoResolucao": "3 horas",
      "manutencoesRealizadas": 20,
      "colaboradores": {
        "Ana": 8,
        "Paulo": 7,
        "Fernanda": 5,
      },
      "pecasMateriais": [
        { nome: "Parafuso", quantidade: 30 },
        { nome: "Graxa", quantidade: 5 },
      ],
    },
  };

  const gerarRelatorio = () => {
    const data = sampleData[selectedTeam];
    Alert.alert(
      "Relatório Gerado",
      `Equipe: ${selectedTeam}\nPeríodo: ${selectedPeriod}\n\n` +
      `Tempo Médio de Resolução: ${data.tempoResolucao}\n` +
      `Manutenções Realizadas: ${data.manutencoesRealizadas}\n\n` +
      `Colaboradores:\n${Object.entries(data.colaboradores).map(([colaborador, quantidade]) => `- ${colaborador}: ${quantidade} manutenções`).join('\n')}\n\n` +
      `Peças e Materiais Utilizados:\n${data.pecasMateriais.map(material => `- ${material.nome}: ${material.quantidade}`).join('\n')}`,
      [{ text: "OK" }]
    );
  };

  const renderModal = (options, selectedValue, setSelectedValue, title) => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible === title}
      onRequestClose={() => setModalVisible(null)}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>{title}</Text>
        {options.map(option => (
          <TouchableOpacity key={option} onPress={() => {
            setSelectedValue(option);
            setModalVisible(null);
          }} style={styles.modalOption}>
            <Text style={styles.modalOptionText}>{option}</Text>
          </TouchableOpacity>
        ))}
        <Pressable style={styles.modalCloseButton} onPress={() => setModalVisible(null)}>
          <Text style={styles.modalCloseText}>Fechar</Text>
        </Pressable>
      </View>
    </Modal>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Relatório de Desempenho das Equipes</Text>

      {/* Seção de filtros */}
      <Text style={styles.filterLabel}>Equipe:</Text>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => setModalVisible('Equipe')}
      >
        <Text style={styles.selectButtonText}>{selectedTeam}</Text>
      </TouchableOpacity>

      <Text style={styles.filterLabel}>Período:</Text>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => setModalVisible('Período')}
      >
        <Text style={styles.selectButtonText}>{selectedPeriod}</Text>
      </TouchableOpacity>

      <Pressable
        style={styles.generateReportButton}
        onPress={gerarRelatorio}
      >
        <Text style={styles.generateReportText}>Gerar Relatório</Text>
      </Pressable>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={require('../image/backIcon.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {renderModal(['Equipe A', 'Equipe B'], selectedTeam, setSelectedTeam, 'Equipe')}
      {renderModal(['Última semana', 'Último mês', 'Último ano'], selectedPeriod, setSelectedPeriod, 'Período')}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#444444',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 18,
    marginBottom: 5,
    color: '#ccc',
  },
  selectButton: {
    height: 50,
    backgroundColor: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 8,
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  generateReportButton: {
    backgroundColor: '#ff4d4d',
    padding: 15,
    marginVertical: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  generateReportText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  modalOption: {
    backgroundColor: '#333',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  modalOptionText: {
    fontSize: 18,
    color: '#fff',
  },
  modalCloseButton: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  modalCloseText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',  
  },
  backIcon: {
    width: 40,
    height: 40,
    tintColor: '#fff',
  },
});
