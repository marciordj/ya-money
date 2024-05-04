import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Home from './Screens/Home';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView/>
      <PaperProvider>
        <Home />
      </PaperProvider>
    </SafeAreaProvider>
  );
}