import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Alert, TouchableOpacity } from 'react-native'; // Adicionei TouchableOpacity aqui
import StatusMaintenanceButton from '../components/StatusMaintenanceButton';

const initialManutencoes = [
  { id: '1', descricao: 'Troca de óleo', status: 'Pendente', comentarios: [] },
  { id: '2', descricao: 'Verificação de freios', status: 'Em andamento', comentarios: [] },
];

export function Manutencao() {
  const [manutencoes, setManutencoes] = useState(initialManutencoes);
  const [comentario, setComentario] = useState('');

  const alterarStatus = (id, novoStatus) => {
    const updatedManutencoes = manutencoes.map(item =>
      item.id === id ? { ...item, status: novoStatus } : item
    );
    setManutencoes(updatedManutencoes);
  };

  const adicionarComentario = (id) => {
    if (!comentario) {
      Alert.alert('Erro', 'Digite um comentário antes de adicionar.');
      return;
    }

    const updatedManutencoes = manutencoes.map(item => {
      if (item.id === id) {
        return { ...item, comentarios: [...item.comentarios, comentario] };
      }
      return item;
    });

    setManutencoes(updatedManutencoes);
    setComentario('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text>Status: {item.status}</Text>

      <View style={styles.buttonContainer}>
        <StatusMaintenanceButton status="Pendente" onPress={() => alterarStatus(item.id, 'Pendente')} />
        <StatusMaintenanceButton status="Em andamento" onPress={() => alterarStatus(item.id, 'Em andamento')} />
        <StatusMaintenanceButton status="Concluída" onPress={() => alterarStatus(item.id, 'Concluída')} />
        <StatusMaintenanceButton status="Cancelada" onPress={() => alterarStatus(item.id, 'Cancelada')} />
      </View>

      <TextInput
        placeholder="Adicionar Comentário"
        value={comentario}
        onChangeText={setComentario}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => adicionarComentario(item.id)} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Adicionar Comentário</Text>
      </TouchableOpacity>

      {item.comentarios.length > 0 && (
        <View>
          <Text>Comentários:</Text>
          {item.comentarios.map((c, index) => (
            <Text key={index}>- {c}</Text>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciamento de Manutenção</Text>
      <FlatList
        data={manutencoes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444444',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#555',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
  },
  descricao: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
