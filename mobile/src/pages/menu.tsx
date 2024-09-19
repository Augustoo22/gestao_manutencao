import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { IconMenu } from '../components/IconMenu'; // Ajuste o caminho conforme necessário
export function MenuScreen({ navigation }) {
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  return (
    <ImageBackground
      source={require('../image/backgroundMobile.png')}
      style={styles.background}
    >
      <View style={styles.centerContainer}>
        <View style={styles.centerBox}>
          <View style={styles.imageContainer}>
            <Image source={require('../image/logo.png')} style={styles.image} />
          </View>
          <View style={styles.menuContainer}>
            <View style={styles.fila1}>
              <IconMenu
                imageSource={require('../image/Gerenciamento_maquinas.png')}
                label={`Gerenciamento\nde Máquinas`}
                onPress={() => console.log('Clicou no novo menu')}
              />
              <IconMenu
                  imageSource={require('../image/registros.png')}
                  label={`Registros`}
                  onPress={() => console.log('Clicou no novo menu')}
                />
              </View>
              <View style={styles.fila2}>
                <IconMenu
                  imageSource={require('../image/manutencao.png')}
                  label={`Manutenção`}
                  onPress={() => console.log('Clicou no novo menu')}
                />
                <IconMenu
                  imageSource={require('../image/relatorios.png')}
                  label={`Relatórios`}
                  onPress={() => console.log('Clicou no novo menu')}
                />
                <IconMenu
                  imageSource={require('../image/sair.png')}
                  label={`Sair`}
                  onPress={() => navigation.navigate('login')}
                  />
              </View>
              <View style={styles.fila3}>
                <IconMenu
                  imageSource={require('../image/solicitacoes.png')}
                  label={`Solicitações`}
                  onPress={() => console.log('Clicou no novo menu')}
                /> 
                <IconMenu
                  imageSource={require('../image/gerenciamento_equipe.png')}
                  label={`Gerenciamento\nde Equipes`}
                  onPress={() => console.log('Clicou no novo menu')}
                />
              </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerBox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#444444',
    padding: 20,
    borderRadius: 25,
    borderBottomWidth: 5,
    borderColor: 'red',
    width: 320,
    height: 750,
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: 350,
    height: 300,
    resizeMode: 'contain',
  },
  menuContainer: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    alignContent:'space-evenly'
  },
  fila1: {
    marginTop: 0,
    gap:8,
  },
  fila2: {
    marginTop: 0,
    gap:21,
  },
  fila3: {
    marginTop: 0,
    gap:18,
  }
});