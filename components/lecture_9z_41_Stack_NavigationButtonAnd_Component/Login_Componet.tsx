import { Button, Text, View } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Login</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Login;