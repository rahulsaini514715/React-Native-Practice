import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { addToCart } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.reducer)
  const[isAdded,setIsAdded] = useState(false)

  const handleAddToCart = item => {
    // console.warn("called",item);
    dispatch(addToCart(item))
  };

 useEffect(() => {
  if (cartItems && cartItems.length) {
    cartItems.forEach((element) => {
      if (element.name === item.name) {
        setIsAdded(true);
      }
    });
  }
}, [cartItems]);

  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 24 }}>{item.name}</Text>
      <Text style={{ fontSize: 24 }}>{item.price}</Text>
      <Text style={{ fontSize: 24 }}>{item.color}</Text>
      <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
      {
        isAdded?
         <Button title="Remove To Cart" onPress={() => handleAddToCart(item)} />
         :
         <Button title="Add To Cart" onPress={() => handleAddToCart(item)} />
    

    
      }
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
