import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import ExternalStyle from '../../style';

function UseEffect_Hook_As_ComponentDidUpdate(): JSX.Element {
  const [count,setCount]=useState(0);
  const [data,setData] = useState(100);
  // useEffect(()=>{
  //   console.warn("do some animation" + count );
  // },[count])

  // useEffect(()=>{
  //   console.warn("call some data" + data );
  // },[data])
  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 50,textAlign:"center" }}>24 useEffect hook as ComponentDidUpdate life cycle method</Text>

      <Text style={{ fontSize: 60, marginBottom: 50,textAlign:"center" }}>{count}</Text>

      <Text style={{ fontSize: 60, marginBottom: 50,textAlign:"center" }}>Data : {data}</Text>

      <Button title='Update Count' onPress={()=> setCount(count+1)}/>

      <Button title='Update Data' color={"red"} onPress={()=> setData(data+1)}/>

      <User data={data} count={count}/>
    </View>
  );
}

const User = ({data,count})=>{
  console.warn(data)
  console.warn(count)

  useEffect(()=>{
      console.warn("run this when data props is updated")
  },[data])

   useEffect(()=>{
      console.warn("run this when count props is updated")
  },[count])
  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 50,textAlign:"center",color:"orange" }}>User Component </Text>
      <Text style={{ fontSize: 24, marginBottom: 50,textAlign:"center",color:"red" }}>Data : {data} </Text>
      <Text style={{ fontSize: 24, marginBottom: 50,textAlign:"center",color:"red" }}>Count : {count} </Text>
    </View>
  );
}

export default UseEffect_Hook_As_ComponentDidUpdate;


