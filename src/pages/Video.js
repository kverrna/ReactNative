import React ,{Component} from 'react';
import {Text,View,ScrollView,Image,StyleSheet,Button,TouchableHighlight} from 'react-native';
import ExpansibleItem from '../componentes/FlatLists/ExpansibleItem';
import YouTube from 'react-native-youtube';

export default class Video extends React.Component{

    constructor(props){
        super(props);
    }
    render()
    {    
        return(
        <ScrollView>
                <YouTube
                    videoId="Uhf7i-huOVo"   // The YouTube video ID
                    play={false}             // control playback of video with true/false
                    fullscreen={false}       // control whether the video should play in fullscreen or inline
                    loop={false}             // control whether the video should loop when ended
                    apiKey='AIzaSyAeO2WDeUoU7oFmPsbd1MMRI_aHbFdkFDQ'
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
                    style={{ alignSelf: 'stretch', height: 300 ,padding:30}}
                />
               
        </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingVertical: 10,
        flexDirection: 'column',
        flexWrap: 'wrap',
         
 }, content: {
        padding: 20,
        margin: 5,
        backgroundColor: '#ef4c',
        width: 100,
        height: 125,
        borderWidth: 1,
        borderColor: 'red',
        textAlign: 'center',
        borderWidth: StyleSheet.hairlineWidth
 }
  });
  