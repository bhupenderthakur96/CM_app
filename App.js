import { StyleSheet, Text, View } from 'react-native'
import { store } from "./redux/store";
import { Provider } from "react-redux";
import React from 'react'
import MainTab from './src/MainTab';
import RootScreen from './src/Rootscreen/RootScreen';

const App = () => {
  return (
    // <Provider store={store}>
     <RootScreen/>
    // </Provider>
  )
}

export default App

const styles = StyleSheet.create({})