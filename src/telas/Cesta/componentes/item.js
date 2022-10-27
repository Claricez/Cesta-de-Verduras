import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
import Texto from "../../../componentes/texto";

export default function Item({item: {nome, imagem}}){
    return <View style = {estilo.item}>
    <Image source = {imagem} style = {estilo.imagem}/>
    <Texto styles ={estilo.nome}> {nome} </Texto>
    </View>
    
}

const estilo = StyleSheet.create({
    

    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
        padding: 16,
        marginHorizontal: 16,
    },
    imagem:{
        width: 46,
        height: 46,
    },

    nome: {
        fontSize: 16,
        marginLeft: 11,
        lineHeight: 26,
        color: "#4646",

    }
})