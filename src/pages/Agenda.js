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
            <ExpansibleItem first={true} textTitle='12 de Maio - Brasilia-DF' textBody='Local:CCBB Ingressos: 61 8888 8888 www.ccbb.bb.br' image={require('../../resources/imagens/sb1.jpg')}/>
            <ExpansibleItem textTitle='14 de Maio - São Paulo-SP' textBody='Local:CCBB Ingressos: 61 8888 8888 www.ccbb.bb.br' image={require('../../resources/imagens/sp.jpg')}/>
            <ExpansibleItem textTitle='12 de Junho - Brasilia-DF' textBody='Local:CCBB Ingressos: 61 8888 8888 www.ccbb.bb.br' image={require('../../resources/imagens/bsb2.jpg')}/>
            <ExpansibleItem textTitle='12 de Maio - Curitiba-PR' textBody='Local:CCBB Ingressos: 61 8888 8888 www.ccbb.bb.br' image={require('../../resources/imagens/curitiba.jpg')}/>
            <ExpansibleItem textTitle='14 de Maio - Foz do Iguaçu-PR' textBody='Local:CCBB Ingressos: 61 8888 8888 www.ccbb.bb.br' image={require('../../resources/imagens/fozPr.jpg')}/>
            <ExpansibleItem textTitle='12 de Junho - Salvador-BA' textBody='Local:CCBB Ingressos: 61 8888 8888 www.ccbb.bb.br' image={require('../../resources/imagens/salvador.jpg')}/>
            <ExpansibleItem textTitle='14 de Junho - Natal-RN' textBody='Local:CCBB Ingressos: 61 8888 8888 www.ccbb.bb.br' image={require('../../resources/imagens/natalRn.jpg')}/>
            <ExpansibleItem textTitle='12 de Maio - Belo Horizonte-MG' textBody='Local:CCBB Ingressos: 61 8888 8888 www.ccbb.bb.br' image={require('../../resources/imagens/bh.jpg')}/>
            <ExpansibleItem textTitle='14 de Maio - Goiânia-GO' textBody='Local:CCBB Ingressos: 61 8888 8888 www.ccbb.bb.br' image={require('../../resources/imagens/goiania.jpg')}/>
            <ExpansibleItem textTitle='12 de Junho - Luziânia-GO' textBody='Local:CCBB Ingressos: 61 8888 8888 www.ccbb.bb.br' image={require('../../resources/imagens/Luziania.jpg')}/>
            <ExpansibleItem last={true} textTitle='12 de Junho - Rio de Janeiro-RJ' textBody='Local:CCBB Ingressos: 61 8888 8888 www.ccbb.bb.br' image={require('../../resources/imagens/rio.jpg')}/>
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
  