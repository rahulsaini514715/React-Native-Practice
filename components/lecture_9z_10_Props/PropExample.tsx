import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function PropsExample({name,email}): JSX.Element {
  return (
    <View>
        <Text style={{margin:20}} >{name}</Text>
        <Text style={{margin:20}} >{email}</Text>
    </View>
  );
}



export default PropsExample;
