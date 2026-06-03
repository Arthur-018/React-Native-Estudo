import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


class App extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text1, styles.alinhaTexto]}>Eu sou texto 1</Text>
        <Text style={styles.alinhaTexto}>Eu sou texto 2</Text>
        <Text>Eu sou texto 3</Text>
        <Text style={styles.text1}>Eu sou texto 4</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text1: {
    fontSize: 25,
    color: "#FF0000"
  },
  alinhaTexto: {
    textAlign: "center"
  }
})

export default App;