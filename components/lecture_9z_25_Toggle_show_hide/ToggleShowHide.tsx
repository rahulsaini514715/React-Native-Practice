import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import ExternalStyle from '../../style';

function ToggleShowHide(): JSX.Element {
  const [show,setShow] = useState(false);
  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 50,textAlign:"center" }}> 25 Toggle, Show and Hide components</Text>
      <Button title='Hide Component' color={"red"} onPress={()=>setShow(false)}/>
      <Button title='Show Component' onPress={()=>setShow(true)}/>
      <Button title='Toggle Component' color={"green"} onPress={()=>setShow(!show)}/>
      
      {
        show ? <User/> : null
      }
    </View>
  );
}


const User = ()=>{
  return(
    <View>
      <Text style={{ fontSize: 24, marginBottom: 50,textAlign:"center" }}>Hey,👋</Text>
    </View>
  )
}

export default ToggleShowHide;


