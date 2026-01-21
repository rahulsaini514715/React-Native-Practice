import React, { useState } from 'react';
import { View, Text, TextInput, Button,  } from 'react-native';
import ExternalStyle from '../../style';

function TextInputValue(): JSX.Element {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={{fontSize:40,marginBottom:50}}>Handle Text Input</Text>

      <TextInput
        style={ExternalStyle.textInput}
        placeholder='Enter your name..'
        onChangeText={(text)=>setName(text)}
        value={name}
      />
      
      
      <Text 
        style={{fontSize:40,}}
        >Your Name Is : {name}</Text>


     <Button title='Clear Input Value' onPress={()=> setName("")}/>
    </View>
  );
}



export default TextInputValue;
