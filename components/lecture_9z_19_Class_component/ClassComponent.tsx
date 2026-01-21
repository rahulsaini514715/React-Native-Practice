import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class ClassComponent extends Component{
  fruit = ()=>{
    console.warn("Apple")
  }
  render() {
    return (
      <View >
        <Text style={{ color: 'red',textAlign:"center",margin:20, fontSize:30 }}>Inline Style Text</Text>
        <Button title='Press Me' onPress={this.fruit}/>
      </View>
    );
  }
}


export default ClassComponent;
