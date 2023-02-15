import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';
import { estilos } from './estilos';
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext } from 'react';
import { TemaContext } from '../../contexts/TemaContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutosContext } from '../../contexts/ProdutosContext';
import { Alert } from 'react-native';

export default function Finalizar({navigation}) {

  const { 
    temaEscolhido 
  } = useContext(TemaContext)
  const estilo = estilos(temaEscolhido)

  const { 
    usuario 
  } = useContext(AutenticacaoContext)

  const { 
    quantidade,
    carrinho,
    finalizarCompra
  } = useContext(ProdutosContext)

  async function finalizarCarrinho(){

    await finalizarCompra()

    navigation.navigate('Principal');
    Alert.alert("Compra Finalizada com Sucesso!")
  }

  return (
    <View style={estilo.container}>
      <View style={estilo.containerInformacoesEntrega}>
        <View style={estilo.tituloArea}>
          <Text style={estilo.titulo}>Informações de Entrega</Text>
        </View>
          <Text style={estilo.texto}>Nome: {usuario.nome}</Text>
          <Text style={estilo.texto}>Endereço: {usuario.endereco}</Text>
          <Text style={estilo.texto}>Email: {usuario.email}</Text>
          <Text style={estilo.texto}>Telefone: {usuario.telefone}</Text>
      </View>
      <View style={estilo.carrinhoTexto}>
        <Text style={estilo.texto}>Quantidade: {quantidade}</Text>
        <Text style={estilo.texto}>Preço Total: R$ {carrinho.reduce((valorTotal, item) =>  valorTotal = valorTotal + item.preco , 0 )}</Text>
      </View>

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => finalizarCarrinho()}
      >
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>

    </View>
  );
}
