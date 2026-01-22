import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from 'react-native';

import Product from "./Product"
import Header from "./Header"

const UICart = () => {

    const products = [
    {
      name: "Samsung Mobile",
      color: "White",
      price: 30000,
      image: "https://www.pngplay.com/wp-content/uploads/7/Apple-IPhone-Mobile-PNG-HD-Quality.png",
    },
    {
      name: "iPhone",
      color: "Black",
      price: 80000,
      image: "https://www.pngplay.com/wp-content/uploads/7/Apple-IPhone-Mobile-PNG-HD-Quality.png",
    },
    {
      name: "OnePlus",
      color: "Blue",
      price: 45000,
      image: "https://www.pngplay.com/wp-content/uploads/7/Apple-IPhone-Mobile-PNG-HD-Quality.png",    },
    {
      name: "Redmi",
      color: "Green",
      price: 20000,
      image: "https://www.pngplay.com/wp-content/uploads/7/Apple-IPhone-Mobile-PNG-HD-Quality.png",
    },
    {
      name: "Realme",
      color: "Grey",
      price: 18000,
      image: "https://www.pngplay.com/wp-content/uploads/7/Apple-IPhone-Mobile-PNG-HD-Quality.png",
    },
  ];

  return (
    <View style={styles.container}>
       <Header />
       <ScrollView>
        {
          products.map((item)=><Product item={item}/>)
        }
        </ScrollView>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default UICart;
