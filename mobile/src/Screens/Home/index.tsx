import React from 'react';
import { View } from 'react-native';
import Header from '../../Components/Header';
import Moneycard from '../../Components/MoneyCard';
import ExpenseList from '../../Components/ExpenseList';

export default function Home() {
  return (
    <View className=' bg-white'>
      <Header />
      <View className='flex-row justify-around mt-4'>
        <Moneycard type='income' />
        <Moneycard type='expense' />
      </View>
      <ExpenseList />
    </View>
  );
}
