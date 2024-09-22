import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';

const initialSolicitacoes = [
  { id: '1', descricao: 'Troca de óleo', status: 'Pendente' },
  { id: '2', descricao: 'Verificação de freios', status: 'Pendente' },
];

const initialEquipes = [
  { id: '1', nome: 'Equipe A', disponibilidade: true },
  { id: '2', nome: 'Equipe B', disponibilidade: false },
  { id: '3', nome: 'Equipe C', disponibilidade: true },
];

export function GerenciamentoEquipe({ navigation }) {
  const [solicitacoes, setSolicitacoes] = useState(initialSolicitacoes);
  const [equipes, setEquipes] = useState(initialEquipes);

  const atribuirEquipe = (solicitacaoId, equipe) => {
    if (!equipe.disponibilidade) {
      Alert.alert('Erro', 'Essa equipe não está disponível.');
      return;
    }

    Alert.alert('Sucesso', `Equipe ${equipe.nome} atribuída à solicitação: ${solicitacaoId}`);
    // Aqui você pode adicionar lógica para atualizar o status da solicitação, se necessário.
  };

  const renderSolicitacao = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text>Status: {item.status}</Text>
      <Text>Disponível:</Text>
      <FlatList
        data={equipes.filter(equipe => equipe.disponibilidade)}
        renderItem={({ item: equipe }) => (
          <TouchableOpacity onPress={() => atribuirEquipe(item.id, equipe)} style={styles.equipeButton}>
            <Text style={styles.equipeText}>{equipe.nome}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={equipe => equipe.id}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciamento de Equipe</Text>

      <FlatList
        data={solicitacoes.filter(s => s.status === 'Pendente')}
        renderItem={renderSolicitacao}
        keyExtractor={item => item.id}
      />

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
    padding: 20,
    justifyContent: 'space-between', // Adicionado para espaçar o conteúdo
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
  },
  descricao: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  equipeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  equipeText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    alignSelf: 'center',
    marginBottom: 20, // Adicionado para dar espaço do fundo
  },
  backIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
