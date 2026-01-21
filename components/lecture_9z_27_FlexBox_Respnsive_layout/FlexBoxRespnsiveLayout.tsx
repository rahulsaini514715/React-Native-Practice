import React from 'react';
import { View, StyleSheet } from 'react-native';

function FlexBoxRespnsiveLayout(): JSX.Element {
  return (
    <View style={styles.main}>
      {/* Top row with 3 pink boxes */}
      <View style={styles.box1}>
        <View style={styles.pinkBox}></View>
        <View style={styles.pinkBox}></View>
        <View style={styles.pinkBox}></View>
      </View>

      {/* Middle green box */}
      <View style={styles.greenBox}></View>

      {/* Bottom blue box */}
      <View style={styles.blueBox}></View>
    </View>
  );
}

export default FlexBoxRespnsiveLayout;

const styles = StyleSheet.create({
  main: {
    
    flex: 1,
    // marginTop:300,
    backgroundColor: '#e22020', // optional for debugging layout
  },
  box1: {
    flex: 2,                   // takes 2 parts of the screen
    backgroundColor: 'red',
    flexDirection: 'row',       // children in row
    justifyContent: 'space-around', // space between pink boxes
    alignItems: 'center',       // center vertically
    padding: 10,
  },
  pinkBox: {
    width: 50,
    height: 50,
    backgroundColor: 'pink',
    margin: 5,
  },
  greenBox: {
    flex: 1,
    backgroundColor: 'green',
    margin: 10,
  },
  blueBox: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 10,
  },
});
