import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';

export function CadastroMaquina({ navigation }) {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [modelo, setModelo] = useState('');
  const [dataFabricacao, setDataFabricacao] = useState('');
  const [numeroSerie, setNumeroSerie] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [historicoManutencao, setHistoricoManutencao] = useState('');

  const handleSubmit = () => {
    if (!nome || !tipo || !modelo || !dataFabricacao || !numeroSerie || !localizacao) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Aqui você pode enviar os dados para o servidor ou armazená-los
    Alert.alert('Sucesso', 'Máquina cadastrada com sucesso!');
    
    // Limpar os campos após o envio
    setNome('');
    setTipo('');
    setModelo('');
    setDataFabricacao('');
    setNumeroSerie('');
    setLocalizacao('');
    setHistoricoManutencao('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image
            source={require('../image/backIcon.png')}
            style={styles.backIcon}
            />
      </TouchableOpacity>
      <Text style={styles.title}>Cadastro de Máquinas</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Tipo"
        value={tipo}
        onChangeText={setTipo}
        style={styles.input}
      />
      <TextInput
        placeholder="Modelo"
        value={modelo}
        onChangeText={setModelo}
        style={styles.input}
      />
      <TextInput
        placeholder="Data de Fabricação (YYYY-MM-DD)"
        value={dataFabricacao}
        onChangeText={setDataFabricacao}
        style={styles.input}
      />
      <TextInput
        placeholder="Número de Série"
        value={numeroSerie}
        onChangeText={setNumeroSerie}
        style={styles.input}
      />
      <TextInput
        placeholder="Localização"
        value={localizacao}
        onChangeText={setLocalizacao}
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição"
        value={historicoManutencao}
        onChangeText={setHistoricoManutencao}
        style={styles.input}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Cadastrar Máquina</Text>
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
