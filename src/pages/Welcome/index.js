import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity  // vale lembrar que tem uma função de botão
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native'

// import { Container } from './styles';

export default function Welcome () {

    const navigation = useNavigation();
   return ( 
    
    <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Animatable.Image // deixando o logo animado
                animation="flipInY"
                source={require('../../assets/image.png')} // source passa a localização da imagem
                style={{ width:'100%'  }} // usei aqui por ser mais facil
                resizeMode='contain' // esses dois comando servem para alinhar a imagem
            />
        </View>

        <Animatable.View delay={700} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Aquidauana Saúde APP</Text>
            <Text style={styles.text1}>Faça o login para começar</Text>

            <TouchableOpacity 
            style={styles.button}
            onPress={ () => navigation.navigate('SignIn')}
            >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>

    </View>

   );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1b3d42'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'#1b3d42',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerForm: {
        flex:1,
        backgroundColor: "#5d676e",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingStart: '10%',
        paddingEnd:"5%",
    },
    title:{
        fontSize:25,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color:"#fff"
    },
    text1:{
        color:"#a1a1a1",
        fontSize:15
    },
    button:{
        position: 'absolute',
        backgroundColor: '#1b3d42',
        borderRadius: 45,
        paddingVertical: 8,
        width: "60%",
        alignSelf: 'center',
        bottom: '15%',
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText:{
        fontSize:18,
        color:"white",
        fontWeight: "bold"
    }
})