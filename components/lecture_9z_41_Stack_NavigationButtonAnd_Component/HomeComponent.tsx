import { Button, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <Button title="Go to Login Page" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default  Home;