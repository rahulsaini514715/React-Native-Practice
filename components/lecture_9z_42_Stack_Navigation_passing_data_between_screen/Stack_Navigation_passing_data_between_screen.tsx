import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login_Componet';
import Home from './HomeComponent';

const Stack = createNativeStackNavigator();


// ---------------- Stack Navigator ----------------
const Stack_Navigation_passsing_data_between_screen = () => {

  const btnAction =()=>{
    console.warn("btn pressed")
  }
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerTitle:()=> <Button title='Left'/>,
          headerRight:()=> <Button title='Right'/>,
          headerStyle:{
            backgroundColor:"lightgrey",
          },
          headerTintColor:"red",
          headerTitleStyle:{
            fontSize:30
          },
          // headerBackVisible: false, // <-- hides back arrow

        }}
      >
        <Stack.Screen 
          name="Login" 
          component={Login} 
          
          options={{
            headerTitle:()=> <Button title='Left'/>,
            headerRight:()=> <Header/>,
            title:"User Login",
            headerStyle:{
              backgroundColor:"skyblue",
            },
            headerTintColor:"white",
            headerTitleStyle:{
              fontSize:30
            },
            headerBackVisible: false, // <-- hides back arrow

          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const Header =()=>{
  return(<TextInput placeholder='name'/>)
}



export default Stack_Navigation_passsing_data_between_screen;
