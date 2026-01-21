import React, { useState } from 'react';
import { View, Text, TextInput, Button, } from 'react-native';
import ExternalStyle from '../../style';

function BasicForm(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);

  const [showPassword, setShowPassword] = useState(false);


  const resetFormData = () => {
    setDisplay(false);
    setEmail("");
    setName("");
    setPassword("");
  }
  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 50 }}>Lecture 13 Basic Form in React-Native</Text>

      <TextInput
        style={ExternalStyle.textInput}
        placeholder='Enter USer Name'
        onChangeText={(text) => setName(text)}
        value={name}
      />

      {/* <TextInput
        style={ExternalStyle.textInput}
        placeholder='Enter Password'
        onChangeText={(text)=>setPassword(text)}
        secureTextEntry={true}
        value={password}
      /> */}


      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={[ExternalStyle.textInput, { flex: 1 }]}
          placeholder="Enter Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Text
          style={{ marginLeft: 10, fontSize: 20 }}
          onPress={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "🙈" : "👁️"}
        </Text>
      </View>


      <TextInput
        style={ExternalStyle.textInput}
        placeholder='Enter Email'
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <View style={{ marginBottom: 10 }}>
        <Button title='Print Details' color={"green"} onPress={() => setDisplay(true)} />
      </View>
      <Button title='Clear Details' color={"red"} onPress={resetFormData} />


      <View>
        {
          display ? <View>
            <Text>User Name is : {name}</Text>
            <Text>User Name is : {password}</Text>
            <Text>User Name is : {email}</Text>
          </View> : null
        }
      </View>

    </View>
  );
}



export default BasicForm;
