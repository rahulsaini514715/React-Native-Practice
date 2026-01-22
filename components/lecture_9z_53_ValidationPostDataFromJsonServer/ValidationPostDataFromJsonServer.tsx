import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ValidationPostDataFromJsonServer = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const postApiData = async () => {
    // reset errors
    setNameError(false);
    setAgeError(false);
    setEmailError(false);

    // validation
    if (!name) {
      setNameError(true);
      return;
    }
    if (!age) {
      setAgeError(true);
      return;
    }
    if (!email) {
      setEmailError(true);
      return;
    }

    try {
      const response = await fetch('http://192.168.1.34:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          age,
          email,
        }),
      });

      const result = await response.json();
      console.warn('Posted Data:', result);

      // clear form
      setName('');
      setAge('');
      setEmail('');

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Post Data From JSON Server</Text>

      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      {nameError && <Text style={styles.errorText}>Name is required</Text>}

      <TextInput
        placeholder="Enter Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      {ageError && <Text style={styles.errorText}>Age is required</Text>}

      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />
      {emailError && <Text style={styles.errorText}>Email is required</Text>}

      <Button title="Submit" onPress={postApiData} />
    </View>
  );
};


const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 8
  }
});


export default ValidationPostDataFromJsonServer;
