import React ,{Component} from 'react';
import {Alert,Text,View,Image,ImageBackground,StyleSheet,Button,TouchableOpacity,StatusBar,Dimensions,TabBarIOS} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Card from '../componentes/Card/Card';
import ToolBar from '../componentes/ToolBar/ToolBar';
import ToolBarItem from '../componentes/ToolBar/ToolBarItem';
import Modal from '../componentes/Modal/ModalExample';
const ImageBanco= require( '../../resources/imagens/bancodobrasil.jpg');
export default class Main extends React.Component{
    
    constructor(props){
        super(props);
    }
    render()
    {
        const { width, height, scale } = Dimensions.get('window');
        return(
            
            <View style={styles.mainContainer}> 
            <StatusBar barStyle ='dark-content' hidden={false}/>
            <Button  title='GoGo' onPress={()=>{
            Alert.alert('titulo','mensagem',{cancelable:true});
        }} />
            <Card imageSource={ImageBanco} backgroundColor='blue'first={true}>
                <ToolBar >
                    <ToolBarItem name='facebook' />
                    <ToolBarItem name='instagram' />
                    <ToolBarItem name='share-2' start={false}/>
                </ToolBar>
            </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        elevation:4
    },
    barContainer:{
     flexDirection:'row',
     backgroundColor:'#FFF',
     
     
    },
    imagenContainer: {
        resizeMode:'cover',
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#F5FCFF',
      backgroundColor: '#4D5057',
      paddingTop:5
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    imagemItem:{
    aspectRatio:1,
    resizeMode:'cover',
     width:32,
    height:32,
    },
    imagem:{
        aspectRatio:1,
         resizeMode:'cover',
         aspectRatio:1,
        // resizeMode:'cover',
        // resizeMode:'stretch',
        // resizeMode:'repeat',
        // resizeMode:'center',
        width:350,
        height:350,
        // borderRadius:9,
        alignSelf:'center',
        backgroundColor:'#F5FCFF'
    }
  });
  