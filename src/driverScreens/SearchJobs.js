import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchJobs = () => {
  return (
    <View>
      <TextInput
      placeholder='search Jobs here'
      style={{
        marginHorizontal:90,
      padding:10,
      borderWidth:2,
      marginTop:10

      }}
      />
    </View>
  )
}

export default SearchJobs

const styles = StyleSheet.create({})