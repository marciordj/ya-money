import { View } from 'react-native'
import { Text } from 'react-native-paper'

import { FontAwesome } from '@expo/vector-icons'

export default function Header() {
  return (
    <View className='pl-3 pr-3 flex-row justify-between items-center'>
      <View>
        <Text className='text-sm'>Good night,</Text>
        <Text className='text-xl'>Márcio Rodrigues</Text>
      </View>
      <FontAwesome name='bell-o' size={28}/>
    </View>
  ) 
}