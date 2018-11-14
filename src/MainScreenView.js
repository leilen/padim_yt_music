import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

import { Container, Header, Content, Form, Item, Input, Label , Button} from 'native-base';

class MainScreenView extends Component {
    static navigationOptions = {
        title: '로그인',
    }
    render() {
        return (
            <Container style={style.container}>
                <View style={style.loginView}>
                    <Form style={style.form}>
                        <TextInput style={style.input} placeholder="ID"/>
                        <TextInput style={style.input} placeholder="Password"/>
                        <Button style={style.button}><Text style={style.buttonText}>Login</Text></Button>
                    </Form>
                </View>
            </Container>
        );
    }
}
export default MainScreenView;

const style = StyleSheet.create({
    container :{
        paddingHorizontal : 15,
        backgroundColor:"#f8f8f8"
    },
    loginView: {
        marginTop:15,
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:4,
    },
    form : {
        backgroundColor:"white",
        padding:15,
        flexDirection: 'column',
    },
    input:{
        borderColor:"#ccc",
        borderRadius : 4,
        borderWidth:1,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginBottom : 15,
    },
    button:{
        width:"100%",
        paddingHorizontal:16,
        paddingVertical:10,
        backgroundColor:"#337ab7",
        
    },
    buttonText:{
        textAlign : "center",
        color : "white",
        width:"100%",
        fontSize:18,
        fontWeight:"bold"
    }
})