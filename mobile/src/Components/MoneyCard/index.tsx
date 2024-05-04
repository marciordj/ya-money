import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons';

type MoneyCard = {
  type: 'income' | 'expense'
}

export default function Moneycard({ type }: MoneyCard) {
  const cardColor = `${type === 'income' ? 'bg-green-500' : 'bg-red-600'}`
  return (
    <View className={`flex-row justify-center items-center ${cardColor} w-36 h-20 ml-3 rounded-xl`}>
        <FontAwesome name='dollar' size={28}/>
        <View className='ml-4'>
          <Text>Income</Text>
          <Text>R$ 5000</Text>
        </View>
      </View>
  )
}