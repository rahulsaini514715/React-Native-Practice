import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FetchDataFromJsonServer = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    try {
      const response = await fetch('http://192.168.1.34:3000/users');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={styles.container}>
      {
        data.length > 0 ? (
          data.map(item => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.text}>Name: {item.name}</Text>
              <Text style={styles.text}>Age: {item.age}</Text>
              <Text style={styles.text}>Email: {item.email}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noData}>Data Not Found</Text>
        )
      }
    </View>
  );
};

export default FetchDataFromJsonServer;

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  card: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1
  },
  text: {
    fontSize: 16
  },
  noData: {
    fontSize: 18
  }
});
