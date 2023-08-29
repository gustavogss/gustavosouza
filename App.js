import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Home } from './src/pages/Home'
import { StyleSheet } from 'react-native'
import { Loading } from './src/components/Loading';

export default function App() { 
  const URL = 'https://gustavosouza.dev.br/'; 

  return (
    <SafeAreaView style={styles.container}>     
      <StatusBar barStyle={'light-content'} translucent/>
     {URL ? <Home /> : <Loading/>}      
    </SafeAreaView>
   
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,   
  },
})