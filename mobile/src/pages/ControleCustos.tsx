import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image, FlatList } from 'react-native';

const initialCustos = [
  { id: '1', tipo: 'Peças', valor: 100 },
  { id: '2', tipo: 'Mão de obra', valor: 200 },
];

export function ControleCustos({ navigation }) {
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState('');
  const [custos, setCustos] = useState(initialCustos);

  const adicionarCusto = () => {
    if (!tipo || !valor) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const novoCusto = { id: (custos.length + 1).toString(), tipo, valor: parseFloat(valor) };
    setCustos([...custos, novoCusto]);
    setTipo('');
    setValor('');
  };

  const renderCusto = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.custoTipo}>{item.tipo}</Text>
      <Text>Valor: R$ {item.valor.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Custos de Manutenção</Text>

      <TextInput
        placeholder="Tipo de Custo"
        value={tipo}
        onChangeText={setTipo}
        style={styles.input}
      />
      <TextInput
        placeholder="Valor"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity onPress={adicionarCusto} style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar Custo</Text>
      </TouchableOpacity>

      <FlatList
        data={custos}
        renderItem={renderCusto}
        keyExtractor={item => item.id}
        style={styles.list}
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
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  list: {
    marginTop: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
  custoTipo: {
    fontWeight: 'bold',
    color: 'black',
  },
  backButton: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  backIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
