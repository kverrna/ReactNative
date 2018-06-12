import React ,{Component} from 'react';
import {Text,View,Image,StyleSheet,Button,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class MiniCardItem extends React.Component
{
    static propTypes={
        image:PropTypes.objectOf(Image).isRequired,
        text:PropTypes.string
    }
    static efaultProps={
        text:'Olhar' 
    }
    render(){
        return (
        <View style={Styles.maincontainer}>
            <Image style={Styles.image} source={this.props.image} />
            <TouchableOpacity style={Styles.button}>
                <Text style={Styles.textBotao}>{this.props.text}</Text>
            </TouchableOpacity>
        </View>
    );
    }
}
const Styles=StyleSheet.create({
    maincontainer:{
        margin: 10,
        backgroundColor: '#ef4c',
        width: 100,
        height: 125,
        textAlign: 'center',
    },
    button:{
        backgroundColor:'#2F9847',
        alignSelf:'stretch',
        alignItems:'center'
        
    },
    image:{
        width:100,
        height:110
    },
    textBotao:{
        color:'#fff',
        fontWeight:'bold'
    }


});




