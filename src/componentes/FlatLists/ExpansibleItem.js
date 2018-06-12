import React ,{Component} from 'react';
import {Text,View,Image,StyleSheet,Button,TouchableHighlight,TouchableOpacity,Dimensions,Alert,NativeModules,LayoutAnimation} from 'react-native';
import PropTypes from 'prop-types';
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class ExpansibleItem extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            h: 80,
            open:true
        }
        
    }
    static propTypes={
        localName:PropTypes.string,
        dataText:PropTypes.string,
    }
    static efaultProps={
        localName:'Brasilia-DF' 
    }
    _onPress(value){
        LayoutAnimation.spring();
        if(value)
            this.setState({ h: this.state.h + 550});
        else
            this.setState({ h: this.state.h - 550});
    }
   
   render () {
    const { width, height, scale } = Dimensions.get('window');
    return (
    <View >
        <View />
            <TouchableOpacity onPress={()=>{
                this._onPress(this.state.open);
                this.setState({open:!this.state.open})
                }}>
            <View style={[{margin:5,flex:1,width: width-10}]}>
                <Text style={[styles.textBotao,{height:this.state.h}]}>Press me!</Text>
            </View>
            </TouchableOpacity>
      </View>
    )
  }
   
}
const styles=StyleSheet.create({
    container:{
        margin: 5,
        backgroundColor: '#ef4c',
        elevation:5,
        alignItems: 'center',
        justifyContent: 'center',
        height:80,
        flex:1
    },
    image:{
        width:100,
        height:110
    },
    textBotao:{
        color:'#000',
        fontWeight:'bold',
        textAlign:'center',
        backgroundColor:'red'
    }
});