import React from 'react';
import { View, Text,StyleSheet,Button,Image} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  DrawerNavigator,
  StackNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
import Main from './src/pages/Main'
import SonsPage from './src/pages/Sons';
import AgendaPage from './src/pages/Agenda';
import VideosPage from './src/pages/Video';

let Home = createStackNavigator({ Main},{navigationOptions:{title:'App'}});
let Config = createStackNavigator({ AgendaPage},{navigationOptions:{title:'App'}});
let Sons = createStackNavigator({ SonsPage },{navigationOptions:{title:'App'}});
let Videos = createStackNavigator({ AgendaPage},{navigationOptions:{title:'App'}});
let Fotos = createStackNavigator({ AgendaPage},{navigationOptions:{title:'App'}});
let Agenda = createStackNavigator({ AgendaPage},{navigationOptions:{title:'App'}});
let Mais = createStackNavigator({ VideosPage},{navigationOptions:{title:'App'}});



class LogoTitle extends React.Component {
  render() {
    return (
      <Icon
         name='menu'
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./resources/imagens/icons/facebook_512.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View>
        <Button
            onPress={() => this.props.navigation.navigate('Sons')}
            title="Go to Sons"/>
      </View>
      
    );
  }
}
class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./resources/imagens/icons/facebook_512.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Agenda')}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const AppStack= createBottomTabNavigator({
  Agenda,
  Sons,
  Home,
  Fotos,
  Mais,
},
  {
    navigationOptions:({navigation})=>({
     
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;

      if (routeName === 'Home') {
        iconName='home';
      }
      if (routeName === 'Config') {
        iconName = `settings`;
      }
      if (routeName === 'Sons') {
        iconName = `music`;
      }
      if (routeName === 'Videos') {
        iconName = `film`;
      }
      if (routeName === 'Fotos') {
        iconName = `image`;
      }
      if (routeName === 'Agenda') {
        iconName = `calendar`;
      }
      if (routeName === 'Mais') {
        iconName = `more-vertical`;
      }
      return <Icon name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}
);

const Pages = StackNavigator({
  Home:{screen:Main},
  Sons:{screen:SonsPage},
});

const DrawerMenu = DrawerNavigator({
  Home: {
    screen: Sons,
  },
  Notifications: {
    screen: Main,
  },
},{
  headerMode:'float'
}
);

export default DrawerNavigator({
  
  ToolBar:AppStack,
  Home: {
    screen: Sons,
  },
  Notifications: {
    screen: Main,
  }
},
{
  initialRouteName: 'ToolBar',
  inactiveTintColor:'#fff',
  
});
