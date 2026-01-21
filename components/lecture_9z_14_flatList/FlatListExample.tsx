import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import ExternalStyle from '../../style';

function FlatListExample(): JSX.Element {

  const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Monika" },
    { id: 3, name: "Saini" },
    { id: 4, name: "Amit" },
    { id: 5, name: "Priya" },
    { id: 6, name: "Rohit" },
    { id: 7, name: "Neha" }
  ];

  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 50 }}>14 FlatList | Make list in React native</Text>

      <FlatList
  data={users}
  renderItem={({ item }) => (
    <Text style={ExternalStyle.textMap}>{item.name}</Text>
  )}
  keyExtractor={item => item.id.toString()}
/>

    </View>
  );
}



export default FlatListExample;
