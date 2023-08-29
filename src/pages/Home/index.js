import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

const URL = 'https://gustavosouza.dev.br/'; 

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.page}>       
        <WebView source={{ uri: URL }}  />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
