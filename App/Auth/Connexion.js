import React from "react";
import { Entypo } from '@expo/vector-icons';
import { Button,View,Text,StyleSheet,ImageBackground, TextInput, TouchableOpacity } from "react-native";



export default function Connexion({navigation}){

    return(
        <ImageBackground style={styles.contain}
        source={require('../../assets/Image/font1.jpg')}
        >
            <View style={styles.login}>
                <Text style={styles.textlogin}>Login</Text>
            </View>
            <View style={styles.cardContainer}>
                <View style = {styles.welcome}>
                    <Text style = {styles.textwelcome}>Welcome Back</Text>
                    <Text style = {styles.textaccount}>Login to your account</Text>
                </View>
                <View style = {styles.ginput}>
                    <TextInput style = {styles.input1}
                    placeholder="  E-mail">
                        
                    </TextInput>
                
                    <TextInput style = {styles.input2}
                    placeholder="  Password"
                    ></TextInput>
                </View>

                <View style = {styles.forgot}>
                    <TouchableOpacity>
                        <Text style = {styles.textforgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style = {styles.vbouton}  >
                    <Text style={styles.bouton}>Login</Text>
                </TouchableOpacity>
                
                <View style = {styles.vregister}>
                    <Text>I don't have an account</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style = {styles.textreg2}> Register?</Text></TouchableOpacity>
                </View>
                
            </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    //grand conteneur
    contain : {
        flex: 1,
        justifyContent:'flex-end',
    },
    //card du centre
    cardContainer:{
        height: "78%",
        backgroundColor: 'white',
        borderTopLeftRadius: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },
    //View et text du login
    login:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    textlogin:{
        color:"white",
        fontWeight:"bold",
        fontSize:60
    },
    //view et text du welcomme back
    welcome:{
        alignItems:"center",
        position:"relative",
        top: -25,
    },
    textwelcome :{
            color: "#3589f2",
            fontSize:40,
            fontWeight:"bold"
    },
    textaccount:{
        fontSize:20,
        color:"gray"
    },
    //View et text de TextInput
    ginput:{
        width:"75%",
        position:"relative",
        top:-25
    },
    input1:{
        marginTop:30,
        backgroundColor:'lightgray',
        height:40,
        borderRadius:15,
        fontWeight:"bold",
    },
    input2:{
        marginTop:20,
        backgroundColor:"lightgray", 
        height: 40,
        borderRadius:15,
        fontWeight:"bold"
    },
    //view du texte forgot
    forgot:{
        position:"relative",
        left: 80,
        top:-15
    },
    textforgot:{
        fontWeight:"bold"
    },
    //view et text du bouton
    vbouton:{
        backgroundColor:"#3589f2",
        borderRadius:13,
        width:"75%",
        height:33,
        position:"relative",
        top:90
    },
    bouton:{
       color:"white",
       fontSize:20,
       fontWeight:"bold",
       textAlign:"center"
    },
    //view et ttext de register
    vregister:{
        flexDirection:"row",
        position:"relative",
        top:95,
        //left:45
    },
    textreg2:{
        fontWeight:"bold"
    }
  });
