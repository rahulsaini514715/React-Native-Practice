import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import ExternalStyle from '../../style';

function ComponentInLoopWithFlatlist(): JSX.Element {
  const users = [
  { id: 1, name: "Rahul", email: "rahul@gmail.com" },
  { id: 2, name: "Amit", email: "amit@gmail.com" },
  { id: 3, name: "Rohit", email: "rohit@gmail.com" },
  { id: 4, name: "Sandeep", email: "sandeep@gmail.com" },
  { id: 5, name: "Vikram", email: "vikram@gmail.com" },
  // { id: 6, name: "Ajay", email: "ajay@gmail.com" },
  // { id: 7, name: "Kunal", email: "kunal@gmail.com" },
  // { id: 8, name: "Arjun", email: "arjun@gmail.com" },
  // { id: 9, name: "Manish", email: "manish@gmail.com" },
  // { id: 10, name: "Nitin", email: "nitin@gmail.com" },
  // { id: 11, name: "Deepak", email: "deepak@gmail.com" },
  // { id: 12, name: "Sachin", email: "sachin@gmail.com" },
  // { id: 13, name: "Prakash", email: "prakash@gmail.com" },
  // { id: 14, name: "Ravi", email: "ravi@gmail.com" },
  // { id: 15, name: "Suresh", email: "suresh@gmail.com" },
  // { id: 16, name: "Ankit", email: "ankit@gmail.com" },
  // { id: 17, name: "Mohit", email: "mohit@gmail.com" },
  // { id: 18, name: "Harsh", email: "harsh@gmail.com" },
  // { id: 19, name: "Pankaj", email: "pankaj@gmail.com" },
  // { id: 20, name: "Yogesh", email: "yogesh@gmail.com" }
];


  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 50, textAlign: "center" }}>17 Component in Loop with Flatlist</Text>

      <FlatList 
        data={users}
        renderItem={({item})=><UserData item={item}/>}
      />
    </View>
  );
}

const UserData =({item})=>{
  return(
    <View style={styles.box}>
      <Text style={styles.item} >{item.name}</Text>
      <Text style={styles.item} >{item.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize:24,
    color:"orange",
    flex:1,
    margin:2,
  },
  box : {
    flexDirection: "row",
    borderWidth:2,
    borderColor:"orange",
    marginBottom: 10
  }
})


export default ComponentInLoopWithFlatlist;
