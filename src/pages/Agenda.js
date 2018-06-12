import React ,{Component} from 'react';
import {Text,View,ScrollView,Image,StyleSheet,Button,TouchableHighlight} from 'react-native';
import ExpansibleItem from '../componentes/FlatLists/ExpansibleItem';
export default class Agenda extends React.Component{

    constructor(props){
        super(props);
    }
    render()
    {    
        return(
        <ScrollView style={styles.main}>
            <ExpansibleItem textTitle='12 de Maio - Brasilia-DF' image={require('../../resources/imagens/sb1.jpg')}/>
            <ExpansibleItem textTitle='14 de Maio - São Paulo-SP' image={require('../../resources/imagens/sp.jpg')}/>
            <ExpansibleItem textTitle='12 de Junho - Brasilia-DF' image={require('../../resources/imagens/bsb2.jpg')}/>
            <ExpansibleItem textTitle='12 de Maio - Brasilia-DF' image={require('../../resources/imagens/sb1.jpg')}/>
            <ExpansibleItem textTitle='14 de Maio - São Paulo-SP' image={require('../../resources/imagens/sp.jpg')}/>
            <ExpansibleItem textTitle='12 de Junho - Brasilia-DF' image={require('../../resources/imagens/bsb2.jpg')}/>
            <ExpansibleItem textTitle='12 de Maio - Brasilia-DF' image={require('../../resources/imagens/sb1.jpg')}/>
            <ExpansibleItem textTitle='14 de Maio - São Paulo-SP' image={require('../../resources/imagens/sp.jpg')}/>
            <ExpansibleItem textTitle='12 de Junho - Brasilia-DF' image={require('../../resources/imagens/bsb2.jpg')}/>
        </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingVertical: 10,
        flexDirection: 'column',
        flexWrap: 'wrap',
         
 }, content: {
        padding: 20,
        margin: 5,
        backgroundColor: '#ef4c',
        width: 100,
        height: 125,
        borderWidth: 1,
        borderColor: 'red',
        textAlign: 'center',
        //borderWidth: StyleSheet.hairlineWidth
 }
  });
  