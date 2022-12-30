import React, {useEffect, useState} from "react";
import { FlatList, Text, StyleSheet } from "react-native";

import useProdutores from "../../../hooks/useProdutores";
import Produtor from "./Produtor";

export default function Produtores( {topo: Topo} ){
    
   const [titulo, lista] = useProdutores();

    const TopoLista = () => {
        return <>
            <Topo/>
            <Text style={estilos.titulo}>{ titulo }</Text>
        </>
    }


    return <FlatList 
            data={lista.sort((a, b) => { return a.distancia > b.distancia;})} 
            ListHeaderComponent={TopoLista}
            renderItem={({item}) => <Produtor {...item}/> }
            keyExtractor={(nome) => nome}></FlatList>
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})