import React ,{Component} from 'react';
import {Text,View,Image,StyleSheet,Button,TouchableHighlight} from 'react-native';
import ExpansibleItem from '../componentes/FlatLists/ExpansibleItem';
export default class Agenda extends React.Component{

    constructor(props){
        super(props);
    }
    render()
    {    
        return(
        <View style={styles.main}>
            <ExpansibleItem localName='Brasília-DF'/>
           
        </View>
        );
    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingVertical: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center'
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
  