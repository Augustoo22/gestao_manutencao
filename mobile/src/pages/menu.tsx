import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { IconMenu } from '../components/IconMenu'; // Ajuste o caminho conforme necessário
export function MenuScreen({ navigation }) {

  return (
    <ImageBackground
      source={require('../image/backgroundMobile.png')}
      className="flex-1"
    >
      <View className="flex-1 justify-center items-center">
        <View style={styles.centerBox}>
          <View style={styles.imageContainer}>
            <Image source={require('../image/logo.png')} style={styles.image} />
          </View>
          <View style={styles.menuContainer}>
            <View style={styles.fila1}>
              <IconMenu
                imageSource={require('../image/Gerenciamento_maquinas.png')}
                label={`Gerenciamento\nde Máquinas`}
                onPress={() => navigation.navigate('gerenciamentoMAquinas')}
                />
              <IconMenu
                  imageSource={require('../image/registros.png')}
                  label={`Registros`}
                  onPress={() => navigation.navigate('RegistroMenu')}
                  />
              </View>
              <View style={styles.fila2}>
                <IconMenu
                  imageSource={require('../image/manutencao.png')}
                  label={`Manutenção`}
                  onPress={() => navigation.navigate('Manutencao')}
                  />
                <IconMenu
                  imageSource={require('../image/relatorios.png')}
                  label={`Relatórios`}
                  onPress={() => navigation.navigate('relatorioMenu')}
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
                  onPress={() => navigation.navigate('solicitacoes')}
                  /> 
                <IconMenu
                  imageSource={require('../image/gerenciamento_equipe.png')}
                  label={`Gerenciamento\nde Equipes`}
                  onPress={() => navigation.navigate('GerenciamentoEquipe')}
                  />
              </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
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