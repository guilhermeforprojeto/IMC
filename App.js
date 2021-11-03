import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './src/components/Form';
import {Main} from './src/components/Main';
import Title from './src/components/Title'


export default function App() {
  return (
    <View style={styles.container}>
      
      <Title></Title>
      <Form></Form>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
