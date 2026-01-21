import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import ExternalStyle from '../../style';

function UseEffect_Hook_As_LifeCycle(): JSX.Element {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.warn("Helllo")
  },[])
  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 50,textAlign:"center" }}>useEffect hook as life cycle method</Text>
      
      <Text style={{ fontSize: 60, marginBottom: 50,textAlign:"center" }}>{count}</Text>

      <Button title='Update Count' onPress={()=> setCount(count+1)}/>
    </View>
  );
}



export default UseEffect_Hook_As_LifeCycle;


