import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={'gray'}/>
    </View>
  )
}
