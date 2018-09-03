import React ,{Component} from 'react';
import {View,StyleSheet,Text,Platform,Image} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';
import Toolbar from '../ToolBar/ToolBar';
import ToolBarItem from '../ToolBar/ToolBarItem';
export default class CardFeed extends React.Component
{
    static propTypes={
        src:PropTypes.string.isRequired,
        mediaContent:PropTypes.string,
        mediaAvatar:PropTypes.string,
        socialMediaName:PropTypes.string,
        avatarTitleText:PropTypes.string,
        avatarSubTitle:PropTypes.string,
        }
    static defaultProps={
       mediaAvatar:'https://instagram.fbsb8-2.fna.fbcdn.net/vp/429b292ce8e15e5d54d9669f9561b40d/5BE21414/t51.2885-19/s150x150/30973302_2130658130545482_2917414376132575232_n.jpg',
       mediaContent:'https://instagram.fbsb8-2.fna.fbcdn.net/vp/9e01d555ba6218820e4a5e6f344c889f/5BAEA37C/t51.2885-15/e35/35617114_474327799671167_693598705332256768_n.jpg',
       socialMediaName:'instagram',
       avatarTitleText:'Hungria_oficial',
       avatarSubTitle:'Goiás velho',
      
    }
    renderToolBar(socialMedia)
    {
        if(socialMedia==='facebook')
        return(
            <Toolbar>
                <ToolBarItem name='thumbs-up' text='1,200k'/>
                <ToolBarItem name='message-square' text='450' />
            </Toolbar>
        );
        if(socialMedia==='instagram')
        return(
            <Toolbar>
                <ToolBarItem name='heart' text='1,200k'/>
                <ToolBarItem name='message-circle' text='450' />
            </Toolbar>
        );
    }
    render(){
        return (
                <View  style={styles.mainContainer}>
                    <View style={styles.title}>
                        <View style={styles.avatarContainer}>
                            <Image source={{uri:this.props.mediaAvatar}} style={styles.avatar}/>
                            <View style={{paddingLeft:5}}>
                                <Text style={styles.textTitle}>{this.props.avatarTitleText}</Text>
                                <Text style={styles.textSubtitle} >{this.props.avatarSubTitle}</Text>
                            </View>
                            <View style={{paddingLeft:5,paddingTop:2,alignItems:'flex-start',justifyContent:'flex-start'}}>
                                <Image source={require('../../../resources/imagens/icons/verify.png')} style={{width:12,height:12}}/>
                            </View>
                        </View>
                        <View style={styles.socialIcon}>
                            <Icon name={this.props.socialMediaName} size={25}  color='gray'/>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <Image source={{uri:this.props.mediaContent}} style={styles.mediaContent}/>
                    </View>

                    <View style={styles.footer}>
                        {this.renderToolBar(this.props.socialMediaName)}
                    </View>
                </View>
    
    );
    }
}
const styles = StyleSheet.create({
    mainContainer:{
        borderWidth:1,
        borderRadius:3,
        borderColor:'gray',
        margin:10,
        minHeight:200,
        backgroundColor:'#fff',
        ...Platform.select({
            ios:{
                shadowOffset:{width:-3},
                shadowOpacity:0.15,
                shadowColor:'#000',
                shadowRadius:4
            },
            android:{
                elevation:20
            }
        })
    },
    title:{
        backgroundColor:'#fff',
        minHeight:50,
        flex:1,
        flexDirection:'row',
    },
    avatar:{
        width:30,
        height:30,
        borderRadius:15,
    },
    avatarContainer:{
        justifyContent:'center',
        backgroundColor:'#fff',
        flexDirection:'row',
        margin:5,
        
    },
    textTitle:{
        fontWeight: 'bold'
    },
    textSubtitle:{

    },
    socialIcon:{
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'row',
        flex:1,
        padding:6
    },
    content:{
        backgroundColor:'#222',
        minHeight:250,
        
    },
    mediaContent:{
        minHeight:450,
        minWidth:180,
        resizeMode:'stretch'
    },
    footer:{
        backgroundColor:'#fff',
        minHeight:50,
        
    },

  });



