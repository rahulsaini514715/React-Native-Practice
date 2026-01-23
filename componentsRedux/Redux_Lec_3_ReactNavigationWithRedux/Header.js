import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartData = useSelector((state)=>state.reducer)
  const [cartItem, setCartItem] = useState(0);
  useEffect(()=>{
     setCartItem(cartData.length)
  },[cartData])
  return (
    <View >
      <Text style={{ fontSize: 30,textAlign:"right",padding:10,backgroundColor:"orange" }}>
        {cartItem}
      </Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// });

export default Header;
