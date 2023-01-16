import { SafeAreaView, StatusBar, StyleSheet, FlatList, View } from "react-native"
import NotaEditor from "./src/componentes/NotaEditor"
import { useEffect, useState } from "react";
import { Nota } from "./src/componentes/Nota";
import { buscaNotas, criaTabela } from "./src/services/Notas";
import { Picker } from "@react-native-picker/picker";

export default function App() {

  const [picker, setSelectedPicker] = useState("Todos")
  useEffect(() => {
    criaTabela()
    mostraNotas(picker)
  }, [picker])

  const [notaSelecionada, setNotaSelecionada] = useState({})
  const [notas, setNotas] = useState([]);

async function mostraNotas(picker = "Todos"){
  const todasNotas = await buscaNotas(picker)
  setNotas(todasNotas)

}

  return (      
      <SafeAreaView style={estilos.container}>
        <FlatList
          data={notas}
          renderItem={(nota) => <Nota {...nota} setNotaSelecionada={setNotaSelecionada}/>}
          keyExtractor={(nota) => nota.id}
          ListHeaderComponent={() => {return (
            <View style={estilos.picker}>
                <Picker
                selectedValue={picker}
                onValueChange={(itemValue) => {
                  setSelectedPicker(itemValue)
                  mostraNotas(picker)} }
                >
                <Picker.Item label="Todos" value="Todos" />
                <Picker.Item label="Pessoal" value="Pessoal" />
                <Picker.Item label="Trabalho" value="Trabalho" />
                <Picker.Item label="Outros" value="Outros" />
              </Picker>
            </View>
          )}}/>
        <NotaEditor mostraNotas={mostraNotas} notaSelecionada={notaSelecionada} setNotaSelecionada={setNotaSelecionada}/>
        <StatusBar/>
      </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
  picker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#EEEEEE",
    margin: 16,
  }
})

