import React from 'react';
import { View, Button, Text } from 'react-native';

function Button_Onpress(): JSX.Element {

    const fruit = ()=>{
        console.warn("Function Calledd")
    }

     const automaticNahi = (val)=>{
        console.warn(val);
    }
  return (
    <View>
        <Text style={{ marginLeft: 10,marginBottom: 10, color: 'red' }}>
             Lecture 8... Button and onPress event in react-native
        </Text>

      <Button title='On Press' color={'green'} onPress={fruit}></Button>

      {/* agar upper wala use karna tho parameter mat karo.....or niche wala tabh use karege jab parameter karne hoge */}
      <Button title='On Press' color={'red'} onPress={()=>automaticNahi("hello")}></Button>
    </View>
  );
}



export default Button_Onpress;
