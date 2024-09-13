import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from "react-native";

export function HomeScreen({ navigation }: { navigation: any }) {
  const [name, setName] = useState('');
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

          <TextInput
            style={[styles.input, name === '' && styles.errorBorder]}
            placeholder="Login"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={[styles.input, email === '' && styles.errorBorder]}
            placeholder="Senha"
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Details', { name, email })}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444444',
    padding: 20,
    borderRadius: 25,
    borderBottomWidth: 5, 
    borderColor: 'red',
    width: 320,
    height: 550, 
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 300,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
  },
  errorBorder: {
    borderColor: 'red',
  },
  button: {
    width: '100%',
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
