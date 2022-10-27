import {StatusBar, SafeAreaView, View, StyleSheet } from 'react-native';
import CestaCompras from './src/telas/Cesta/index';
import mock from './src/mocks/cesta'
import AppLoading from 'expo-app-loading';

import { useFonts, 
        Montserrat_400Regular,
        Montserrat_700Bold, 
        Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
    "MontserratItalic" : Montserrat_400Regular_Italic,
  });
  if (!fonteCarregada){
    return <AppLoading/>
}

  return (
    <View>
      <SafeAreaView style={{ felx: 1}} >
      <StatusBar />
      <CestaCompras {...mock} /> 
      </SafeAreaView>
    </View>
  );
}
//{...mock} --> declara todos os elementos da cesta

