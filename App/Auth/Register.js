import React, { useState } from "react";
import { SelectList } from 'react-native-dropdown-select-list'
import { View,Text,ImageBackground,StyleSheet,TextInput,TouchableOpacity,KeyboardAvoidingView } from "react-native";

export default function Register({navigation}){

    const [selected, setSelected] = React.useState("");
  
    const data = [
        {key:'1', value:'Recruiter'},
        {key:'2', value:'Candidate'},
    ]

    return(
        <ImageBackground style={styles.contain}
        source={require('../../assets/Image/font1.jpg')}
        >
            <View style={styles.login}>
                <Text style={styles.textlogin}>Register</Text>
            </View>
            <KeyboardAvoidingView behavior = {Platform.OS === 'ios' ? 'padding' : null}>
            <View style={styles.cardContainer}>
                
                <View style = {styles.welcome}>
                    <Text style = {styles.textwelcome}>Welcome</Text>
                    <Text style = {styles.textaccount}>Create your new account</Text>
                </View>

                <View style = {styles.ginput}>
                <SelectList 
                        setSelected={(val) => setSelected(val)} 
                        data={data} 
                        save="value"
                        style = {styles.input1}
                    />

                    <TextInput style = {styles.input2}
                    placeholder="Username"> 
                    </TextInput>

                    <TextInput style = {styles.input2}
                    placeholder="E-mail"> 
                    </TextInput>
                
                    <TextInput style = {styles.input2}
                    placeholder="Password">
                    </TextInput>

                    <TextInput style = {styles.input2}
                    placeholder="Confirm Password">
                    </TextInput>
                </View>

                <TouchableOpacity style = {styles.vbouton}  >
                    <Text style={styles.bouton}>Login</Text>
                </TouchableOpacity>
                
                <View style = {styles.vconnexion}>
                    <Text>I Already have an account</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Connexion')}>
                        <Text style = {styles.textcon}> Connexion?</Text></TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({

    //grand conteneur
    contain : {
        flex: 1,
    },
    //card du centre
    cardContainer:{
        position:"relative",
        top:55,
        padding:125,
        backgroundColor: 'white',
        borderTopLeftRadius: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },
    //View et text du login
    login:{
        flex:1,
        top:45,
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
        width:"280%",
        bottom: 100,
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
        width:300,
        position:"relative",
        bottom:80,
    },
    input1:{
        marginTop:30,
        backgroundColor:'lightgray',
        height:40,
        borderRadius:15,
        fontWeight:"bold",
        paddingHorizontal:15
    },
    input2:{
        marginTop:20,
        backgroundColor:"lightgray", 
        height: 40,
        borderRadius:15,
        fontWeight:"bold",
        paddingHorizontal:15
    },
    //view et text du bouton
    vbouton:{
        backgroundColor:"#3589f2",
        borderRadius:13,
        width:300,
        height:33,
        position:"relative",
        bottom:40
    },
    bouton:{
       color:"white",
       fontSize:20,
       fontWeight:"bold",
       textAlign:"center"
    },
    //view et ttext de register
    vconnexion:{
        width:250,
        flexDirection:"row",
        position:"relative",
        bottom:25,
    },
    textcon:{
        fontWeight:"bold"
    }

});