import React ,{Component} from 'react';
import {Text,View,Image,StyleSheet,Button,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
//import Icon from 'react-native-vector-icons/Entypo';

export default class ToolBarItem extends React.Component
{
    static propTypes={
        name:PropTypes.string.isRequired,
        size:PropTypes.number,
        color:PropTypes.string,
        start:PropTypes.bool,
        padding:PropTypes.number,
        text:PropTypes.string,
    }
    static defaultProps={
        size:25,
        color:'#333',
        start:true,
        padding:10,
        text:null
        
    }
    
    render(){
        return (
        <View style={{padding:this.props.padding,justifyContent:this.props.position,flexDirection:'row'}}>
            <Icon name={this.props.name} size={this.props.size}  color={this.props.color}/>
            <Text style={{alignSelf:'center',padding:5}}>{this.props.text}</Text>
        </View>
    );
    }
}




