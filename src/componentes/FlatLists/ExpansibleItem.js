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
        imageSource:PropTypes.string
    }
    static efaultProps={
        textTitle:'12 de Maio - Brasilia-DF' 
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
            <View>
                <Text  style={styles.textBody}>Local: CCBB.</Text>
                <Text  style={styles.textBody}>Ingressos: 61 3216-5566.</Text>
                <Text  style={styles.textBody}>www.ingressos.com.br</Text>
            </View>
            )
        return(null)
        
   }

   render () {
    const { width, height, scale } = Dimensions.get('window');
    return (
    <View style={[styles.container,{width: width-10}]}>
            <TouchableOpacity onPress={()=>{
                this._onPress(this.state.open);
                this.setState({open:!this.state.open,showBodyText:!this.state.showBodyText})
                }}>
            <View style={[styles.content,{width: width-10},{height:this.state.h}]}>
              <ImageBackground style={[styles.imageBackground,{width: width-10,height:this.state.h}]} source={this.props.image}>
                <Text  style={styles.textTitle}>{this.props.textTitle}</Text>
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
        margin: 5,
        // backgroundColor: '#ef4c',
        elevation:5,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight:80,
        flex:1
    },
    content:{
        margin: 5,
        // backgroundColor: '#ef4c',
        elevation:5,
        alignItems: 'center',
        justifyContent: 'center',
        height:80,
    
    },
    imageBackground:{
        height:80,
        resizeMode:'stretch',
        flex:1,
        justifyContent:'center'
        
    },
    image:{
        width:100,
        height:80,
        borderRadius:15,
        resizeMode:'stretch'
    },
    textTitle:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:30,
        fontFamily:'Cochin'
    },
    textBody:{
        color:'tomato',
        fontWeight:'bold',
        textAlign:'left',
        fontSize:20,
        fontFamily:'Cochin',
        paddingLeft:20,
        
    }
});