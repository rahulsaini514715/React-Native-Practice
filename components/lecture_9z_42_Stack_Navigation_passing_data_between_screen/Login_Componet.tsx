import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const Login = ({ navigation }) => {

  const [name,SetName] = useState("")
  const age = 22;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Login</Text>
      <TextInput
        onChangeText={(text) => SetName(text)}
        placeholder="Enter Something"
        style={{
          width: '80%',
          height: 50,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 10,
          paddingHorizontal: 15,
          fontSize: 18,
          marginVertical: 10,
        }}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home", { name: name, age: 40 })}
      />
    </View>
  );
};

export default Login;