import React from "react";
import {StyleSheet, View} from "react-native"

import Topo from "./components/Topo.js";
import Detalhes from "./components/Detalhes.js";

export default function Cesta({topo, detalhes}){
    return <>
        <Topo {...topo}></Topo>
        <View style={estilos.cesta}>
            <Detalhes {...detalhes}></Detalhes>
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingHorizontal: 16,
        paddingVertical: 8
    }
})