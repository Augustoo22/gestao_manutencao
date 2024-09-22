import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';

export function CadastroManutencao({ navigation }) {
  const [descricaoProblema, setDescricaoProblema] = useState('');
  const [data, setData] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [statusInicial, setStatusInicial] = useState('');
  const [comentarios, setComentarios] = useState('');

  const handleSubmit = () => {
    if (!descricaoProblema || !data || !prioridade || !responsavel || !statusInicial) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    Alert.alert('Sucesso', 'Solicitação de manutenção registrada com sucesso!');
    
    setDescricaoProblema('');
    setData('');
    setPrioridade('');
    setResponsavel('');
    setStatusInicial('');
    setComentarios('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={require('../image/backIcon.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Cadastro de Manutenção</Text>

      <TextInput
        placeholder="Descrição do Problema"
        value={descricaoProblema}
        onChangeText={setDescricaoProblema}
        style={styles.input}
      />
      <TextInput
        placeholder="Data (YYYY-MM-DD)"
        value={data}
        onChangeText={setData}
        style={styles.input}
      />
      <TextInput
        placeholder="Prioridade"
        value={prioridade}
        onChangeText={setPrioridade}
        style={styles.input}
      />
      <TextInput
        placeholder="Responsável"
        value={responsavel}
        onChangeText={setResponsavel}
        style={styles.input}
      />
      <TextInput
        placeholder="Status Inicial"
        value={statusInicial}
        onChangeText={setStatusInicial}
        style={styles.input}
      />
      <TextInput
        placeholder="Comentários"
        value={comentarios}
        onChangeText={setComentarios}
        style={styles.input}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Registrar Manutenção</Text>
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
