import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import ExternalStyle from '../../style'; // agar styling external se use karna hai

function SectionListExample(): JSX.Element {
  const users = [
    { id: 1, name: "Rahul", data: ["bootstrap", "css", "java"] },
    { id: 2, name: "Amit", data: ["bootstrap", "css", "java"] },
    { id: 3, name: "Rohit", data: ["bootstrap", "css", "java"] },
    { id: 4, name: "Sandeep", data: ["bootstrap", "css", "java"] },
    { id: 5, name: "Vikram", data: ["bootstrap", "css", "java"] }
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 31, marginBottom: 20,textAlign:"center" }}>
        Section List in React Native
      </Text>

      <SectionList
        sections={users}
        // keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 20, paddingVertical: 5, marginLeft:20 }}>{item}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontSize: 25, color: 'red', marginTop: 10 }}>
            {section.name}
          </Text>
        )}
      />
    </View>
  );
}

export default SectionListExample;
