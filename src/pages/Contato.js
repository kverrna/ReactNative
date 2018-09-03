import React from 'react';
import { StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Contato extends React.Component{

    constructor(props){
        super(props);
        this.state={
            messages:[]
        }
    }

    componentWillMount()
    {
        this.setState({
            messages: [
                {
                _id: 1,
                text: 'Salve!!!!!',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://s3.amazonaws.com/imagens-treinamento/hungrialogo.png',
                },
                },
            ],
            })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }

    render()
    {    
        return(
           <GiftedChat
                placeholder='Digite sua mensagem'
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                _id: 1,
                }}
            />
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
        //borderWidth: StyleSheet.hairlineWidth
 }
  });
  