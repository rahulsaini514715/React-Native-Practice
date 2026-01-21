import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

function TouchableHighLightButton(): JSX.Element {

  const success = () => {
    console.warn("Clicked Success");
  }

  const defaultPress = () => {
    console.warn("Default Button Clicked");
  }

  return (
    <View style={styles.main}>
      <Text style={styles.title}>28 TouchableHighlight | Styled Button</Text>

      <TouchableHighlight onPress={success} underlayColor="#640062" style={styles.touchable}>
        <View style={[styles.button, styles.success]}>
          <Text style={styles.buttonText}>Success Button</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={defaultPress} underlayColor="#555" style={styles.touchable}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Default Button</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  title: {
    fontSize: 24,
    marginBottom: 50,
    textAlign: 'center',
  },
  touchable: {
    borderRadius: 25,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'darkgrey',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  success: {
    backgroundColor: 'green',
  },
});

export default TouchableHighLightButton;
