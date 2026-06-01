import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


class App extends Component {
  render() {

    let nome = "Matheus";
    let img = 'https://sujeitoprogramador.com/steve.png'

    return (
      <View>
        <Text>Olá Mundo!!!</Text>
        <Text>Meu Primeiro App (mentira não é não)</Text>
        <Text style={{ color: 'green', fontSize: 25, margin: 20 }}>
          Sujeito Programador
        </Text>

        <Image
          source={{ uri: img }}
          style={{ width: 500, height: 500 }}
        />

        <Text style={{fontSize: 30}}> {nome} </Text>

      </View>
    )
  }
}

export default App;