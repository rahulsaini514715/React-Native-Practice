import { Button, Text, View } from "react-native";

const Home = (props) => {
  // console.warn(props.route.params.name)
  const {name,age} = props.route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <Text style={{ fontSize: 30 }}>Name :{name}</Text>
      <Text style={{ fontSize: 30 }}>Age : {age} </Text>
      <Button title="Go to Login Page" onPress={() => props.navigation.navigate("Login")} />
    </View>
  );
};

export default  Home;