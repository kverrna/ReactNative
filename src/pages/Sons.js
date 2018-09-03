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
            
            <ScrollView style={styles.maincontainer}>
           
            <Card imageSource={require('../../resources/imagens/hungria001.jpg')} backgroundColor='black'first={true}>
                <ToolBar >
                    <ToolBarItem name='facebook' />
                    <ToolBarItem name='instagram' />
                    <ToolBarItem name='share-2' start={false}/>
                </ToolBar>
            </Card>
            <Card imageSource={require('../../resources/imagens/hungria002.jpg')} backgroundColor='black'first={true}>
                <ToolBar >
                    <ToolBarItem name='facebook' />
                    <ToolBarItem name='instagram' />
                    <ToolBarItem name='share-2' start={false}/>
                </ToolBar>
            </Card>
            <Card imageSource={require('../../resources/imagens/hungria004.jpg')} backgroundColor='black'first={true}>
                <ToolBar >
                    <ToolBarItem name='facebook' />
                    <ToolBarItem name='instagram' />
                    <ToolBarItem name='share-2' start={false}/>
                </ToolBar>
            </Card>
            <Card imageSource={require('../../resources/imagens/hungria005.jpg')} backgroundColor='black'first={true}>
                <ToolBar >
                    <ToolBarItem name='facebook' />
                    <ToolBarItem name='instagram' />
                    <ToolBarItem name='share-2' start={false}/>
                </ToolBar>
            </Card>
            <Card imageSource={require('../../resources/imagens/hungria007.jpg')} backgroundColor='black'first={true}>
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
const styles= StyleSheet.create({
    maincontainer:{
        
        backgroundColor:'gray'
    }
});

