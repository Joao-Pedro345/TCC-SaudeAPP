import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native'

// import { Container } from './styles';

export default function  SignIn () { // Lembrando que componentes tem sempre a primeira letra maiuscula
    const navigation = useNavigation();

    return ( 
    <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.initialMessage}>Seja bem-vindo(a)</Text>
        </Animatable.View>

        <Animatable.View animation={"fadeInUp"} style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <TextInput
                placeholder="Digite seu email..."
                style={styles.input}
            />

            <Text style={styles.title}>Senha</Text>
            <TextInput
                placeholder="Sua senha"
                style={styles.input}
            />

            <TouchableOpacity 
            style={styles.button}
            onPress={ () => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>

        </Animatable.View> 
    </View>
   );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1b3d42"
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: "5%",
    },
    initialMessage:{
        fontSize:28,
        fontWeight:"bold",
        color:"white",
    },
    containerForm:{
        backgroundColor:"#5d676e",
        flex:1,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingStart:"5%",
        paddingEnd:"5%",
    },
    title:{
        fontSize: 20,
        marginTop: 28,
        color: "#fff"
    },
    input:{
        borderBottomWidth:1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        color:"#fff"
    },
    button:{
        backgroundColor:"#1b3d42",
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems:"center",
    },
    buttonText:{
        color:"white",
        fontSize: 18,
        fontWeight: 'bold',
        color:"#fff"
    },
    buttonRegister:{
        margintop:14,
        alignSelf: "center",
    },
    registerText:{
        color: '#a1a1a1'
    }

}) 