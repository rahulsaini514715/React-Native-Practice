// Feature                   | ScrollView                                      | FlatList
// --------------------------|-------------------------------------------------|--------------------------------------------------------------
// Data Size                 | Small                                           | Large / Unlimited
// Rendering                 | All items at once                               | Only visible items (Virtualized)
// Performance               | Low for large data                              | High
// Built-in Props            | Limitedstyle, contentContainerStyle, horizontal | keyExtractor, ListHeaderComponent, ListFooterComponent, ListEmptyComponent, refreshing, onRefresh
// Scrolling Features        | Manual                                          | Pull-to-refresh, programmatic scroll
// Ideal Use                 | Static content                                  | Dynamic / long lists (API data, feeds)

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";

type Post = {
  id: number;
  title: string;
  body: string;
};

const FlatListWithApiData = () => {
  const [data, setData] = useState<Post[]>([]);
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

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.card}>
      <Text style={styles.id}>ID: {item.id}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ListHeaderComponent={
        <Text style={styles.heading}>Fetch API Example</Text>
      }
      ListEmptyComponent={
        <Text style={styles.empty}>No Data Found</Text>
      }
      contentContainerStyle={styles.container}
    />
  );
};

export default FlatListWithApiData;

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
  empty: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
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
    color: "#915252",
  },
});




// Second method 

{/* <FlatList
  data={data}
  renderItem={({ item }) => (
    <View>
      <Text style={{ fontSize: 16 }}>{item.id}</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
      <Text style={{ fontSize: 16 }}>{item.body}</Text>
    </View>
  )}
  keyExtractor={(item) => item.id.toString()}
/> */}
