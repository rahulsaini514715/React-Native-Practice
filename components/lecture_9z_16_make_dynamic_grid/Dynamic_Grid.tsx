import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ExternalStyle from '../../style';

function Dynamic_Grid(): JSX.Element {
  const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Rohit" },
    { id: 4, name: "Sandeep" },
    { id: 5, name: "Vikram" },
    { id: 6, name: "Ajay" },
    { id: 7, name: "Kunal" },
    { id: 8, name: "Arjun" },
    { id: 9, name: "Manish" },
    { id: 10, name: "Nitin" },
    { id: 11, name: "Deepak" },
    { id: 12, name: "Sachin" },
    { id: 13, name: "Prakash" },
    { id: 14, name: "Ravi" },
    { id: 15, name: "Suresh" },
    { id: 16, name: "Ankit" },
    { id: 17, name: "Mohit" },
    { id: 18, name: "Harsh" },
    { id: 19, name: "Pankaj" },
    { id: 20, name: "Yogesh" }
  ];

  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 50, textAlign: "center" }}>Dynamic Grid React Native</Text>

      <ScrollView style={{ marginBottom: 300 }}>
        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
          {/* <Text style={styles.item}>Same</Text>
        <Text style={styles.item}>Same</Text>
        <Text style={styles.item}>Same</Text>
        <Text style={styles.item}>Same</Text>
        <Text style={styles.item}>Same</Text>
        <Text style={styles.item}>Same</Text>
        <Text style={styles.item}>Same</Text>
        <Text style={styles.item}>Same</Text>
        <Text style={styles.item}>Same</Text> */}


          {
            users.map((item) => (
              <Text key={item.id} style={styles.item}>
                {item.name}
              </Text>
            ))
          }


        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: "blue",
    color: "#fff",
    margin: 5,
    padding: 5,
    width: 100,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center'
  }
})


export default Dynamic_Grid;
