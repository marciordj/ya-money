import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Header from '../../Components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Surface } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import Moneycard from '../../Components/MoneyCard';

export default function Home() {
  return (
    <View className=' bg-white'>
      <Header />
      <View className='flex-row justify-around mt-4'>
        <Moneycard type='income' />
        <Moneycard type='expense' />
      </View>
    </View>
  );
}
