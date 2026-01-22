import { useState } from "react";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

const SearchWithApi = () => {
  const [data, setData] = useState([]);

  const searchUser = async (text) => {
    if (!text) {
      setData([]);
      return;
    }

    const API_URL = `http://192.168.1.34:3000/users?q=${text}`;
    console.warn(API_URL);

    try {
      let result = await fetch(API_URL);
      result = await result.json();
      if (result) {
        setData(result);
      }
    } catch (error) {
      console.error("API fetch error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search with API</Text>

      <TextInput
        placeholder="Search"
        style={styles.input}
        placeholderTextColor="#888"
        onChangeText={searchUser}
      />

      {/* Table Header */}
      {data.length > 0 && (
        <View style={[styles.resultItem, styles.headerRow]}>
          <Text style={[styles.resultText, styles.headerText]}>Name</Text>
          <Text style={[styles.resultText, styles.headerText]}>Age</Text>
          <Text style={[styles.resultText, styles.headerText]}>Email</Text>
        </View>
      )}

      {/* Table Rows */}
      <ScrollView style={styles.resultsContainer}>
        {data.map((item) => (
          <View key={item.id} style={styles.resultItem}>
            <Text style={styles.resultText}>{item.name}</Text>
            <Text style={styles.resultText}>{item.age}</Text>
            <Text style={styles.resultText}>{item.email}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f5f5f5",
    fontSize: 16,
    marginBottom: 20,
  },
  text: {
    color: "grey",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  resultsContainer: {
    marginTop: 10,
  },
  resultItem: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  headerRow: {
    backgroundColor: "#f0f0f0",
  },
  resultText: {
    flex: 1, // Each column gets equal width
    fontSize: 16,
    color: "#000",
  },
  headerText: {
    fontWeight: "700",
  },
});

export default SearchWithApi;
