import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";

const ListWithApiData = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //loading
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Fetch API Example</Text>

      {
        data.length ?
          data.map((item) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.id}>ID: {item.id}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          ))
          :
          "No Data Found"
        }
    </ScrollView>
  );
};

export default ListWithApiData;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  id: {
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 4,
  },
  body: {
    fontSize: 14,
    color: "#555",
  },
});

