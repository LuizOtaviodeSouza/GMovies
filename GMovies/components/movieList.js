import { View, Text, TouchableOpacity, TouchableWithouFeedback, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native'

var { width, height } = Dimensions.get('window')

export default function MoviesList({ title, data}) {
    let movieName = "joker: Folie à Deux";
    const navigation = useNavigation();
  return (
    <View className="mb-9 space-y-4">
        <View className="mx-4 flex-row justify-between items-center">
            <Text className="textwhite text-xl">{title}</Text>
            <TouchableOpacity>
                <Text style={styles.text} className="text-lg"> Ver todos</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  )
}