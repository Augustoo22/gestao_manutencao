import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, ScrollView, Alert, Image } from 'react-native';

export function RelatorioEstoque({ navigation }) {
  const [selectedItem, setSelectedItem] = useState('Peça A');
  const [selectedSupplier, setSelectedSupplier] = useState('Fornecedor A');
  const [selectedPeriod, setSelectedPeriod] = useState('Última semana');
  const [modalVisible, setModalVisible] = useState(null);

  const sampleData = {
    "Peça A": {
      "movimentacoes": [
        { tipo: 'Entrada', quantidade: 30, data: '2024-09-10' },
        { tipo: 'Saída', quantidade: 10, data: '2024-09-15' },
      ],
    },
    "Peça B": {
      "movimentacoes": [
        { tipo: 'Entrada', quantidade: 50, data: '2024-09-12' },
        { tipo: 'Saída', quantidade: 20, data: '2024-09-20' },
      ],
    },
  };

  const gerarRelatorio = () => {
    const data = sampleData[selectedItem];
    if (!data) {
      Alert.alert("Erro", "Nenhum dado encontrado para a peça selecionada.");
      return;
    }
    const historico = data.movimentacoes.map(
      (mov) => `- ${mov.tipo}: ${mov.quantidade} (Data: ${mov.data})`
    ).join('\n');

    Alert.alert(
      "Relatório de Estoque",
      `Peça: ${selectedItem}\nFornecedor: ${selectedSupplier}\nPeríodo: ${selectedPeriod}\n\n` +
      `Histórico de Movimentações:\n${historico}`,
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
      <Text style={styles.title}>Relatório de Estoque</Text>

      {/* Seção de filtros */}
      <Text style={styles.filterLabel}>Peça:</Text>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => setModalVisible('Peça')}
      >
        <Text style={styles.selectButtonText}>{selectedItem}</Text>
      </TouchableOpacity>

      <Text style={styles.filterLabel}>Fornecedor:</Text>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => setModalVisible('Fornecedor')}
      >
        <Text style={styles.selectButtonText}>{selectedSupplier}</Text>
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

      {renderModal(['Peça A', 'Peça B'], selectedItem, setSelectedItem, 'Peça')}
      {renderModal(['Fornecedor A', 'Fornecedor B'], selectedSupplier, setSelectedSupplier, 'Fornecedor')}
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
    backgroundColor: 'red',
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
    marginTop: 10,
    alignSelf: 'center',
  },
  backIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
