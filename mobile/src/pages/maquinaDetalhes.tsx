import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Modal, Pressable, Alert } from 'react-native';

export function MaquinaDetalhes({ route, navigation }) {
  const { maquina } = route.params;

  // Estados para filtros de relatório
  const [selectedMachine, setSelectedMachine] = useState('Máquina A');
  const [selectedPeriod, setSelectedPeriod] = useState('Última semana');
  const [selectedMaintenanceType, setSelectedMaintenanceType] = useState('Preventiva');
  const [selectedTeam, setSelectedTeam] = useState('Equipe A');

  // Estados para modais de seleção
  const [modalVisible, setModalVisible] = useState(null);

  // Função auxiliar para renderizar opções de seleção em modal
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

  const gerarRelatorio = () => {
    Alert.alert(
      "Relatório Gerado",
      `Máquina: ${selectedMachine}\nTipo de Manutenção: ${selectedMaintenanceType}\nPeríodo: ${selectedPeriod}\nEquipe: ${selectedTeam}`,
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{maquina.title}</Text>
      <Text style={styles.detail}>Status: {maquina.status}</Text>
      <Text style={styles.detail}>Descrição: {maquina.description}</Text>

      <Text style={styles.sectionTitle}>Filtrar Relatórios:</Text>

      <Text style={styles.filterLabel}>Período:</Text>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => setModalVisible('Período')}
      >
        <Text style={styles.selectButtonText}>{selectedPeriod}</Text>
      </TouchableOpacity>

      <Text style={styles.filterLabel}>Tipo de Manutenção:</Text>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => setModalVisible('Tipo de Manutenção')}
      >
        <Text style={styles.selectButtonText}>{selectedMaintenanceType}</Text>
      </TouchableOpacity>

      <Text style={styles.filterLabel}>Equipe:</Text>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => setModalVisible('Equipe')}
      >
        <Text style={styles.selectButtonText}>{selectedTeam}</Text>
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

      {renderModal(['Máquina A', 'Máquina B', 'Máquina C'], selectedMachine, setSelectedMachine, 'Máquina')}
      {renderModal(['Última semana', 'Último mês', 'Último ano'], selectedPeriod, setSelectedPeriod, 'Período')}
      {renderModal(['Preventiva', 'Corretiva', 'Preditiva'], selectedMaintenanceType, setSelectedMaintenanceType, 'Tipo de Manutenção')}
      {renderModal(['Equipe A', 'Equipe B'], selectedTeam, setSelectedTeam, 'Equipe')}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  detail: {
    fontSize: 18,
    marginBottom: 10,
    color: '#ccc',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#fff',
  },
  filterLabel: {
    fontSize: 16,
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
  backButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',  // Centraliza horizontalmente o botão
  },
  backIcon: {
    width: 40,
    height: 40,
    tintColor: '#fff',
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
});
