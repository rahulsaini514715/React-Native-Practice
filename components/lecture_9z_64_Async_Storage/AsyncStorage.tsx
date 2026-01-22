import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const AsyncStorageScreen = () => {
  const [user, setUser] = useState("");

  const setData = async () => {
    await AsyncStorage.setItem("user", "Rahul Saini");
  };

  const getData = async () => {
    const name = await AsyncStorage.getItem("user");
    setUser(name || "");
  };

  const removeData =  async()=>{
    await AsyncStorage.removeItem("user");
    setUser("")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Async Storage</Text>

      <View style={styles.card}>
        <Text style={styles.greeting}>Hey 👋</Text>
        <Text style={styles.username}>
          {user ? user : "No user stored"}
        </Text>
      </View>

      <View style={styles.button}>
        <Button title="Set Data" onPress={setData} />
      </View>

      <View style={styles.button}>
        <Button title="Get Data" onPress={getData} />
      </View>

      {
        user ? <View style={styles.button}>
        <Button title="Remove Data" onPress={removeData} />
      </View> : null
      }
    </View>
  );
};

export default AsyncStorageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 30,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    alignItems: "center",
    elevation: 5,
  },
  greeting: {
    fontSize: 18,
    color: "#666",
  },
  username: {
    fontSize: 22,
    fontWeight: "600",
    color: "#4A6CF7",
    marginTop: 8,
  },
  button: {
    width: "100%",
    marginVertical: 8,
    borderRadius: 12,
    overflow: "hidden",
  },
});
