import React ,{Component} from 'react';
import {Text,View,Image,StyleSheet,Button,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import ToolBar from '../componentes/ToolBar/ToolBar';
import ToolBarItem from '../componentes/ToolBar/ToolBarItem';
import Card from '../componentes/Card/Card';
import { DrawerNavigator } from 'react-navigation';
export default class Sons extends React.Component
{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <ScrollView style={{backgroundColor:'gray'}}>
           
            <Card imageSource={require('../../resources/imagens/icons/bb.png')} backgroundColor='blue'first={true}>
                <ToolBar >
                    <ToolBarItem name='facebook' />
                    <ToolBarItem name='instagram' />
                    <ToolBarItem name='share-2' start={false}/>
                </ToolBar>
            </Card>
        
            </ScrollView>  
    );
    }
}

