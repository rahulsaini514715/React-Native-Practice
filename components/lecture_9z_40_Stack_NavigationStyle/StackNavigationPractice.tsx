import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


// ---------------- Stack Navigator ----------------
const Stack_NavigationStyle = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle:{
            backgroundColor:"lightgrey",
          },
          headerTintColor:"red",
          headerTitleStyle:{
            fontSize:30
          }
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={Login} 
          
          options={{
            title:"User Login",
            headerStyle:{
              backgroundColor:"skyblue",
            },
            headerTintColor:"white",
            headerTitleStyle:{
              fontSize:30
            }
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


// ---------------- Components ----------------
const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Login</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <Button title="Go to Login Page" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default Stack_NavigationStyle;
