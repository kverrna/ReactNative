import React ,{Component} from 'react';
import {Text,TextInput,View,ScrollView,Image,StyleSheet,Button,TouchableHighlight} from 'react-native';
const Realm=require('realm');
export default class Pessoas extends React.Component{

    constructor(props){
        super(props);
        this.state=({
            realm:null,
            nome:''
        });
    }
    salvar()
    {
        const nameToSave=this.state.nome;
        Realm.open({
            schema:[{name:'Pessoa',properties:{name:'string'}}]
        })
        .then(realm=>{
            realm.write(()=>{
                realm.create('Pessoa',{name:nameToSave});
            });
           // this.setState({realm});
        });
    }
    componentDidMount()
    {

    }
    render()
    {    
        return(
        <View style={styles.mainContainer}>
            <View style={styles.textview}>
                <TextInput style={styles.input} 
                onChangeText={text=>this.setState({nome:text})} 
                value={this.state.nome}
                placeholder='Nome'
                keyboardType='twitter'
                />  
            </View>
            <Button title='Salvar' onPress={this.salvar()}/>
            <Text > Qtd pessoas cadastradas:{ this.state.realm?this.state.realm.objects('Pessoa').length:'0'}</Text>
        </View>
        );
    }

}

const styles = StyleSheet.create({
   mainContainer:{
    padding:5
   },
   input:{
       height:35,
       color:'gray',
       paddingHorizontal:5,
       flex:1
   },
   textview:{
       borderColor:'#000',
       flexDirection:'row',
       alignItems:'center',
       borderRadius:5,
       borderWidth:1,
       marginTop:10,
       marginBottom:5
   }
  });
  