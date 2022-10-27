import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Texto from '../../../componentes/texto';




export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }){
    return <>
    <Texto style = {estilo.nome}>{nome}</Texto>
    <View style = {estilo.fazenda}> 
    <Image source={logoFazenda} style = {estilo.imagemFazenda}/>
    <Texto style = {estilo.nomeFazenda}>{nomeFazenda}</Texto>
    </View>
    <Texto style = {estilo.descricao}>{descricao}</Texto>
    <Texto style = {estilo.preco}>{preco}</Texto>
    <TouchableOpacity style = {estilo.botao}>
        <Texto style = {estilo.textoBotao}>{botao}</Texto>
    </TouchableOpacity>
    </>
};

const estilo = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26, //Tamanho da fonte
        lineHeight: 42, //Tamanho da linha
        textAlign: 'left', //Posição do texto
        fontWeight: "bold",
    },
    fazenda: { //Organização na tela, no caso o logo da fazenda
        flexDirection: "row", //Row--> posição focada na coluna
        paddingVertical: 12,

    },
    imagemFazenda:{
        width: 32,
        height: 32,

    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginleft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8, //margem do topo
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
    
    
});