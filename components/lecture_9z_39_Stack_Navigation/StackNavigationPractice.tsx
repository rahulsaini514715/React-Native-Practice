import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native/types_generated/index';

const Stack = createNativeStackNavigator();


const StackNavigationPractice = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const Login = () => {
  return (
    <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:30}}>Login</Text>
    </View>
  );
};

const Home = () => {
  return (
    <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:30}}>Home Screen</Text>
      <Button title="Go to Login Page" onPress={}/>
    </View>
  );
};



export default StackNavigationPractice;

