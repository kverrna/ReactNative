import React ,{Component} from 'react';
import {Text,View,Image,StyleSheet,Button,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';

export default class ToolBar extends React.Component
{
    static propTypes={
        color:PropTypes.string
    }
    static defaultProps={
        
        color:'#fff',
       
    }

    renderTooBar(arrayStart,arrayEnd)
    {
        return(
            <View style={{flexDirection:'row',paddingLeft:5,paddingEnd:5}}>
                <View style={styles.subcontainerStart}>
                    {arrayStart}
                </View>
                <View style={styles.subcontainerEnd}>
                    {arrayEnd}
                </View>
            </View>
            
        );
    }
    render(){
        const children = this.props.children;
        
        let arrayStart=[];
        let arrayEnd=[];

        React.Children.map(children,(child,i)=>{
            if(child.props['start'])
                arrayStart.push(child);
            else 
                arrayEnd.push(child);
        });
        return this.renderTooBar(arrayStart,arrayEnd);
        /*
        <View style={{backgroundColor:this.props.color,flexDirection:'row'}}>
        
            <View style={styles.subcontainerStart}>
                {this.props.children}
            </View>
            <View style={styles.subcontainerEnd}>

            </View>
        </View>
        */
        
    }
}
const styles=StyleSheet.create({
    
    subcontainerStart:{
        flex:1,
        flexDirection:'row',
    },
    
    subcontainerEnd:{
        flex:1,
        flexDirection:'row-reverse',
    }
});


