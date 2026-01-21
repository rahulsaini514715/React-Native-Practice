import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ExternalStyle from '../../style';
function StyleExample(): JSX.Element {
  return (
    <View>
      <Text style={{ margin: 20, color:"red"}}>Lectur- 11 Style in React Native | style Type</Text>
      <Text style={styles.textBox}>Style Sheet</Text>
      <Text style={styles.textStyle}>Style Sheet</Text>

      <Text style={ExternalStyle.externalStyle}>External style Sheet</Text>
      <Text style={[styles.textStyle,ExternalStyle.externalStyle,{padding:10}]}>Multiple  style Sheet</Text>

    </View>
  );
}


const styles=StyleSheet.create({
    textBox:{
        color:"blue",
        fontSize:40,
        textAlign:"center"
    },
    textStyle:{
       color:"red",
       backgroundColor:"green",
       width:90,
       marginLeft:"40%",
    //    padding:10,
       borderRadius:10,
       marginBottom:30,
       

       // iOS shadow
    shadowColor: "red",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 5,

    // Android shadow
    elevation: 5
       
    }
})

export default StyleExample;
