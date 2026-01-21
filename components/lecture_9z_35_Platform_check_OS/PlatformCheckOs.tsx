import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

export default function PlatformCheckOs() {


  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 30, textAlign: "center" }}>
        35 Platform Check OS
      </Text>

      <Text style={{ fontSize: 24, marginBottom: 30, textAlign: "center" }}>
        Platform : {Platform.OS}
      </Text>

      {
        Platform.OS == "android"?
          <View style={{ backgroundColor: "red", height: 100, width: 100 }}></View>
          :
          <View style={{ backgroundColor: "green", height: 100, width: 100 }}></View>
      }


     <Text style={styles.text}>
        Hello
      </Text>



      <Text>
        {JSON.stringify(Platform)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    color : Platform.OS =="android" ? "orange" : "blue",
    fontSize:100
  }
})
