import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/item.js'
import Topo from './componentes/Topo';
import Texto from '../../componentes/texto';
//Export da cesta
export default function CestaCompras({topo, detalhes, itens}){

    return  <>
     <FlatList
        data = {itens.listaItens}
        renderItem = {Item}
        keyExtractor = {({nome}) => nome}
        ListHeaderComponent = {() => {
            return<>
            <Topo {...topo}/>
            <View style = {estilo.cesta}>
            <Detalhes {...detalhes}/>
            <Texto style = {estilo.titulo}>{itens.titulo}</Texto>
         </View>
            </>
        }}
        />
    
   
   </>
};

//Estilo da imagem
const estilo = StyleSheet.create({
    
    cesta: {
        paddingVertical: 8, //Margem vertical
        paddingHorizontal: 16, //Margem horizontal
        fontFamily: "MontserratBold",
        fontWeight: "bold",
    },
    titulo:{
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    
});
