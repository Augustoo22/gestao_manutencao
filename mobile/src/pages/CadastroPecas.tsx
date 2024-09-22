import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';

export function CadastroPecas({ navigation }) {
  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [quantidadeEstoque, setQuantidadeEstoque] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');

  const handleSubmit = () => {
    if (!nome || !codigo || !fornecedor || !quantidadeEstoque || !valorUnitario) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    Alert.alert('Sucesso', 'Peça registrada com sucesso!');
    
    setNome('');
    setCodigo('');
    setFornecedor('');
    setQuantidadeEstoque('');
    setValorUnitario('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={require('../image/backIcon.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Cadastro de Peças</Text>

      <TextInput
        placeholder="Nome da Peça"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
        style={styles.input}
      />
      <TextInput
        placeholder="Fornecedor"
        value={fornecedor}
        onChangeText={setFornecedor}
        style={styles.input}
      />
      <TextInput
        placeholder="Quantidade em Estoque"
        value={quantidadeEstoque}
        onChangeText={setQuantidadeEstoque}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Valor Unitário"
        value={valorUnitario}
        onChangeText={setValorUnitario}
        style={styles.input}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Registrar Peça</Text>
      </TouchableOpacity>
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
  input: {
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});