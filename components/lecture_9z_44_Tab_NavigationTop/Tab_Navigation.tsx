// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Tab = createMaterialTopTabNavigator();

const Tab_NavigationTop = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
           <Tab.Screen name='Login' component={Login} />
           <Tab.Screen name='SignUp' component={SignUp} />
           <Tab.Screen name='Contact' component={Contact} />
        </Tab.Navigator>
    </NavigationContainer>
  );
};


const Login = ()=>{
    return(
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>  
    </View>
    )
}


const Contact = ()=>{
    return(
    <View style={styles.container}>
      <Text style={styles.text}>Contact</Text>  
    </View>
    )
}

const SignUp = ()=>{
    return(
    <View style={styles.container}>
      <Text style={styles.text}>SignUp</Text>  
    </View>
    )
}

export default Tab_NavigationTop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});
