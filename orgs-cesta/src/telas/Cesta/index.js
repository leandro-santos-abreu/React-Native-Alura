import React from "react";
import {StyleSheet, View, FlatList} from "react-native"

import Topo from "./components/Topo.js";
import Detalhes from "./components/Detalhes.js";
import Item from "./components/Item.js";

import Texto from "../../componentes/Texto.js";

export default function Cesta({topo, detalhes, itens}){
    return <>
        <FlatList 
        data={itens.lista} 
        renderItem={Item} 
        keyExtractor={({nome}) => nome }
        ListHeaderComponent={() => {
            return <>
                <Topo {...topo}></Topo>

                <View style={estilos.cesta}>
                    <Detalhes {...detalhes}></Detalhes>
                    <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
                </View>
            </>
        }}>
        </FlatList> 
    </>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingHorizontal: 16,
        paddingVertical: 8
    },titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    }
})