import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Search extends React.Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Instagram</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      backgroundColor: 'blue'
    },
    text: {
        fontSize: 20,
        color: 'yellow'
    }
  });
  