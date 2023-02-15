import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { tema } from '../../estilosGlobais';

export const estilos = (tema) => {
  return StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tema.fundo,
    alignItems: 'stretch',
    width: '100%',
    height: '100%'
  },
  containerInformacoesEntrega:{
    width: '95%',
    height: '25%',
    backgroundColor: tema.containerInformacoesEntrega,
    alignItems: 'stretch',
    marginTop: '3%',
    alignSelf: 'center',
    borderRadius: 15
  },
  tituloArea: {
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    margin: 15
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: tema.titulo,
  },
  texto: {
    fontSize: 15,
    color: tema.titulo,
    marginLeft: 15
  },
  carrinhoTexto: {
    fontSize: 15,
    color: tema.titulo,
    marginTop: 15
  },
  lista: {
    flex: 1,
    width: '100%',
  },
  ultimosVistos: {
    marginBottom: 16,
    paddingVertical: 16,
    backgroundColor: tema.ultimosVistos,
  },
  tituloUltimosVistos: {
    fontSize: 18,
    fontWeight: 'bold',
    color: tema.titulo,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  carrinhoArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  carrinhoIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: tema.titulo,
  },
  carrinhoQuantidadeArea: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carrinhoQuantidade: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#fff",
  },
  iconArea: {
    marginLeft: 16,
  },
  icon: {
    color: tema.texto,
    fontSize: 30,
  },
  botao: {
    margin: 16,
    backgroundColor: tema.botao,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0
  },
  botaoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: tema.preto,
    textAlign: 'center'
  }
});
}