import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button, Input, Image} from "react-native-elements"
import {StatusBar} from "expo-status-bar"
const LoginScreen = ({navigation}) => {
    const  [email,setEmail] = useState("");
    const [password , setPassword] = useState("");
    const signIn = () => {}

    return (
        // <KeyboradAvoidingView behavior="padding" style={styles.container} >
        <View>
        <StatusBar style="dark"/>
        <Image source={{
            uri:"https://upload.wikimedia.org/wikipedia/commons/8/8d/Signal-Logo.svg",
        }}
        style = {{ width:200, height:200}} />
        <View style={styles.inputContainer}>
        <Input 
        placeholder="Email"
         autoFocus type="email" 
         value={email}
        onChangeText={(text) => setEmail(text)}/>
        <Input 
        placeholder="Password"
         autoFocus 
         type="pasword" 
        value={password}
        onChangeText={(text) => setPassword(text)}/>
        
        </View>
        <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
        <Button onPress = { () => navigation.navigate("Register")}containerStyle={styles.button} type="outline" title="Register"/>
        <View  style ={{height:100}}/>
        </View>
        // </KeyboradAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding:"10px",
        backgroundColor: "white"
    },
    inputContainer:{
        width:300,
    },
    button:{
        width:200,
        marginTop:10,
    },
});
