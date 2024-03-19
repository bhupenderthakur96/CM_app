import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text  onPress={() => navigation.navigate('Profile')}>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})