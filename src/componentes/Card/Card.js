import React ,{Component} from 'react';
import {Text,View,Image,StyleSheet,Button,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';
import Toolbar from '../ToolBar/ToolBar'
export default class Card extends React.Component
{
    static propTypes={
        imageSource:PropTypes.string.isRequired,
        backgroundColor:PropTypes.string,
        imageWidth:PropTypes.number,
        imageHeight:PropTypes.number,
        borderRadius:PropTypes.number,
        first:PropTypes.bool,
        last:PropTypes.bool
        }
    static defaultProps={
        backgroundColor:'tomato',
        imageWidth:350,
        imageHeight:350,
        borderRadius:0,
        first:false,
        last:false
    }
    render(){
        return (
        <View style={[styles.mainContainer,this.props.first?styles.first:null,this.props.last?styles.last:null]}> 
            <View style={{backgroundColor:this.props.backgroundColor}} >
                <Image source={this.props.imageSource} style={{alignSelf:'center',width:this.props.imageWidth,height:this.props.imageHeight,borderRadius:this.props.borderRadius}} />
            </View>
            <View style={styles.toolBarContainer}>
                {this.props.children}
            </View>
        </View>
    );
    }
}
const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'transparent',
        elevation:4,
        paddingTop:2,
        paddingBottom:2,
        resizeMode:'stretch'
        
    },
    toolBarContainer:{
        backgroundColor:'#ffff',
        
    },
    first:{
        paddingTop:10
    },
    last:{
        paddingBottom:30
    }

  });



