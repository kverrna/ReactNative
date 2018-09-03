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
        <ScrollView style={styles.main}>

<YouTube
                    videoId="63XyWeKWI0M"   // The YouTube video ID
                    play={false}             // control playback of video with true/false
                    fullscreen={false}       // control whether the video should play in fullscreen or inline
                    loop={false}             // control whether the video should loop when ended
                    apiKey='AIzaSyAeO2WDeUoU7oFmPsbd1MMRI_aHbFdkFDQ'
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}

                    style={styles.videoconainer}
                />
                <YouTube
                    videoId="EiQmbrvvDaY"   // The YouTube video ID
                    play={false}             // control playback of video with true/false
                    fullscreen={false}       // control whether the video should play in fullscreen or inline
                    loop={false}             // control whether the video should loop when ended
                    apiKey='AIzaSyAeO2WDeUoU7oFmPsbd1MMRI_aHbFdkFDQ'
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}

                    style={styles.videoconainer}
                />
                 <YouTube
                    videoId="pdFLuRQd0wQ"   // The YouTube video ID
                    play={false}             // control playback of video with true/false
                    fullscreen={false}       // control whether the video should play in fullscreen or inline
                    loop={false}             // control whether the video should loop when ended
                    apiKey='AIzaSyAeO2WDeUoU7oFmPsbd1MMRI_aHbFdkFDQ'
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}

                    style={styles.videoconainer}
                />
                 <YouTube
                    videoId="hBecvGXZaNM"   // The YouTube video ID
                    play={false}             // control playback of video with true/false
                    fullscreen={false}       // control whether the video should play in fullscreen or inline
                    loop={false}             // control whether the video should loop when ended
                    apiKey='AIzaSyAeO2WDeUoU7oFmPsbd1MMRI_aHbFdkFDQ'
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}

                    style={styles.videoconainer}
                />
                <YouTube
                    videoId="wNN-Jdk9Q8Y"   // The YouTube video ID
                    play={false}             // control playback of video with true/false
                    fullscreen={false}       // control whether the video should play in fullscreen or inline
                    loop={false}             // control whether the video should loop when ended
                    apiKey='AIzaSyAeO2WDeUoU7oFmPsbd1MMRI_aHbFdkFDQ'
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}

                    style={styles.videoconainer}
                />
                <YouTube
                    videoId="fsAiH0Yf07M"   // The YouTube video ID
                    play={false}             // control playback of video with true/false
                    fullscreen={false}       // control whether the video should play in fullscreen or inline
                    loop={false}             // control whether the video should loop when ended
                    apiKey='AIzaSyAeO2WDeUoU7oFmPsbd1MMRI_aHbFdkFDQ'
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}

                    style={styles.videoconainer}
                />
                <YouTube
                    videoId="LuDLSFob6GA"   // The YouTube video ID
                    play={false}             // control playback of video with true/false
                    fullscreen={false}       // control whether the video should play in fullscreen or inline
                    loop={false}             // control whether the video should loop when ended
                    apiKey='AIzaSyAeO2WDeUoU7oFmPsbd1MMRI_aHbFdkFDQ'
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}

                    style={styles.videoconainer}
                />
        </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding:20        
 },
 videoconainer:{
    alignSelf: 'stretch', 
    height: 300 ,
    padding:30,
    borderWidth:10,
    borderRadius:10,
    borderColor:'#fff',
    elevation:4,
    backgroundColor:'#000',
    marginTop:5
 },
  content: {
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
  