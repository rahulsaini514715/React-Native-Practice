import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();

const Tab_Navigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
           <Tab.Screen name='Login' component={Login} />
           <Tab.Screen name='SignUp' component={SignUp} />
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

const SignUp = ()=>{
    return(
    <View style={styles.container}>
      <Text style={styles.text}>SignUp</Text>  
    </View>
    )
}

export default Tab_Navigation;

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
