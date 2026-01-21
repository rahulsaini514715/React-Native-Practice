import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function RadioButton(): JSX.Element {
  const [selected, setSelected] = useState('Java');

  const options = [
    { key: 'Java', label: 'Java' },
    { key: 'React', label: 'React' },
    { key: 'NodeJs', label: 'NodeJs' },
  ];

  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 50, textAlign: "center" }}>
        29 Make radio button in react-native
      </Text>

      <View style={styles.container}>
        <Text style={styles.title}>Choose an Option:</Text>

        {options.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={styles.radioContainer}
            onPress={() => setSelected(option.key)}
          >
            <View style={styles.outerCircle}>
              {selected === option.key && <View style={styles.innerCircle} />}
            </View>
            <Text style={styles.radioLabel}>{option.label}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.selectedText}>Selected: {selected}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 20,
    backgroundColor: '#f0f0f0',
    height: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  radioContainer: {
    flexDirection: 'row', // sirf row alignment
    alignItems: 'center',
    marginBottom: 20,
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#FF69B4', // pink selected
  },
  radioLabel: {
    fontSize: 18,
  },
  selectedText: {
    marginTop: 40,
    fontSize: 18,
    color: '#333',
  },
});

export default RadioButton;
