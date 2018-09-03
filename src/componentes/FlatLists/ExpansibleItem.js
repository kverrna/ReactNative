import React ,{Component} from 'react';
import {Text,View,Image,ImageBackground,StyleSheet,Button,TouchableHighlight,TouchableOpacity,Dimensions,Alert,NativeModules,LayoutAnimation} from 'react-native';
import PropTypes from 'prop-types';
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class ExpansibleItem extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            h: 80,
            open:true,
            showBodyText:false
        }
        
    }
    static propTypes={
        textTitle:PropTypes.string,
        textBody:PropTypes.string,
        imageSource:PropTypes.string,
        first:PropTypes.bool,
        last:PropTypes.bool
    }
    static efaultProps={
        textTitle:' ',
        first:false,
        last:false
    }
    _onPress(mostra){
        LayoutAnimation.spring();
        if(mostra)
            this.setState({ h: this.state.h + 250});
        else
            this.setState({ h: this.state.h - 250});
    }
   renderBody(mostra)
   {
        if(mostra)
        return(
            <View style={{backgroundColor:'rgba(255,255,255,0.7)'}}>
                <Text numberOfLines={5} style={styles.textBody}>{this.props.textBody}</Text>
                
            </View>
            )
        return(null)
        
   }

   render () {
    const { width, height, scale } = Dimensions.get('window');
    return (
    <View style={[styles.container,{width: width-10},this.props.first?styles.first:null,this.props.last?styles.last:null]}>
            <TouchableOpacity onPress={()=>{
                this._onPress(this.state.open);
                this.setState({open:!this.state.open,showBodyText:!this.state.showBodyText})
                }}>
            <View style={[styles.content,{width: width-10},{height:this.state.h}]}>
              <ImageBackground style={[styles.imageBackground,{width: width-10,height:this.state.h}]} source={this.props.image}>
                <View style={[{backgroundColor:'rgba(255,255,255,0.7)'},{width: width-10}]}>
                    <Text  style={styles.textTitle}>{this.props.textTitle}</Text>
                </View>
                {this.renderBody(this.state.showBodyText)}
              </ImageBackground>
            </View>
            </TouchableOpacity>
      </View>
    )
  }
   
 }

const styles=StyleSheet.create({
    container:{
        elevation:10,
        paddingLeft:10,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight:80,
        flex:1,
        alignSelf:'center',
        paddingTop:5,
        // paddingBottom:5,
        // borderRadius:4,
        // borderWidth:10,
        // borderColor:'#fff'  
    },
    content:{
        elevation:5,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight:80,
        width:40,
        flex:1,
        alignSelf:'center'
    },
    imageBackground:{
        minHeight:80,
        justifyContent:'center',
        // resizeMode:'stretch',
        width:40,
    },
    image:{
        width:100,
        height:80,
        borderRadius:15,
        resizeMode:'stretch',
        
    },
    textTitle:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:25,
        fontFamily:'Cochin',
        
    },
    textBody:{
        color:'black',
        fontWeight:'bold',
        textAlign:'left',
        fontSize:15,
        fontFamily:'Cochin',
        paddingLeft:20, 
    },
    first:{
       paddingTop:15  
    },
    last:{
        paddingBottom:25 
     }
});