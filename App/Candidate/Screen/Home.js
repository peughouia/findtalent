import React from "react";
import { TouchableOpacity } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { View,TextInput,StyleSheet,Platform,Text,ImageBackground} from "react-native";


export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <View style = {styles.head}/>
            <KeyboardAvoidingView behavior = {Platform.OS === 'ios' ? 'padding' : null}>
            <View style = {styles.foot}>
                <TextInput style = {styles.input1}
                        placeholder="  Username"> 
                </TextInput>
            </View>
            </KeyboardAvoidingView>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'green'
    },
    head:{
       flex:1,
       backgroundColor:'green'
    },
    foot:{
        //height: "78%",
        padding:140,
        backgroundColor:'white',
        borderTopLeftRadius: 180,
        alignItems:"center"
    },
    input1:{
        marginTop:20,
        backgroundColor:'lightgray',
        height:40,
        width:"200%",
        borderRadius:15,
        fontWeight:"bold",
        paddingHorizontal:20
    },
  });