import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function PressableLongPress() {

  const onPressHandler = () => {
    console.warn('Button Pressed');
  };

  const onLongPressHandler = () => {
    console.warn('Long Pressed');
  };

  return (
    <View>
      <Text style={styles.title}>
        33 Pressable | Long Press
      </Text>

      <View style={styles.wrapper}>
        <Pressable
          // onPress={onPressHandler}
          // onLongPress={onLongPressHandler}
          onPressIn={()=>{console.warn("Press in")}}
          onPressOut={()=>{console.warn("Press Out")}}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.buttonText}>Press Me</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 50,
    textAlign: 'center',
  },
  wrapper: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 5,
  },
  pressed: {
    opacity: 0.6,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
