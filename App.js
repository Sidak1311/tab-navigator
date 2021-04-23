import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Facebook from './screens/fb.js'
import Insta from './screens/inst'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

//Install dependencies with command - npm install *dependency*
//Libraries - react-navigation, react-navigation-tabs, react-native-reanimated, react-native-screens, react-native-gesture-handler

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebookk: {screen:Facebook},
  Instaa: {screen:Insta}
})

const AppContainer = createAppContainer(TabNavigator)