import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import { store } from "./redux/store";
import { Provider } from "react-redux";
import React from 'react'
import MainTab from './src/MainTab';
import RootScreen from './src/Rootscreen/RootScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
const App = () => {
  return (
    <Provider store={store}>
    <GestureHandlerRootView style={{ flex: 1 }}>
     <RootScreen/>
     </GestureHandlerRootView>
     </Provider>
  )
}

export default App

const styles = StyleSheet.create({})