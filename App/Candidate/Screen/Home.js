import React from "react";
import { View,Text,StyleSheet } from "react-native";


export default function HomeScreen(){
    return(
        <View style= {{flex:1}}>
            <View style={styles.container}>
        
            </View>
            <View style = {styles.fred}>

            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      borderTopLeftRadius: 10,
      overflow: 'hidden',
      backgroundColor: 'red',
      position:'relative'
    },
    fred:{
        flex: 1,
        borderTopLeftRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        zIndex: 1
    }
  });