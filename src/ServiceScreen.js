import React from "react";
// import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {useDispatch, useSelector} from "react-redux"
import {setColor} from '../redux/colorSlice'

const ServiceScreen = () => {
    const color = useSelector((state) => state.color.value);
    console.log(color,"ayush")
    const dispatch = useDispatch()
  return (
    <View>
      {/* <StatusBar style="dark" /> */}
      <TouchableOpacity
        onPress={()=> dispatch(setColor())}
        style={styles.button}
      >
        <Text style={{ fontSize: 20 }}>Generate Random Color</Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={(item) => item}
        data={color}
        style={{ marginTop: 15 }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: item,
                height: 150,
                width: 150,
                alignSelf: "center",
                margin: 10,
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default ServiceScreen;

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
});