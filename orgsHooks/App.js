import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

import Home from "./src/telas/home";

function App() {
  return <SafeAreaView style = {estilos.tela}>
    <Home/>
  </SafeAreaView>
}

const estilos = StyleSheet.create({
  tela:{
    flex: 1
  }
})

export default App;