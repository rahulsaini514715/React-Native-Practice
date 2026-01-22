// 1️⃣ Element Inspector kya hai?
// App ke UI elements ko select karke highlight karta hai
// Shows styles, layout, props, width/height
// Check karta hai flexbox alignment, margin, padding
// Debug kar sakte ho buttons, touchable components
// React DevTools ke saath state & props bhi dekh sakte ho

// 2️⃣ Kaise open kare?
// Android Emulator
// Ctrl + M (Windows) / Cmd + M (Mac) → Toggle Inspector
// Android Real Device
// Developer Mode ON + USB Debugging ON
// Shake device ya 3-finger tap → Dev Menu → Toggle Inspector
// iOS Simulator
// Cmd + D → Dev Menu → Toggle Inspector
// iOS Real Device
// Developer Mode ON
// Shake device → Dev Menu → Toggle Inspector
// Sirf development mode me hi kaam karta hai

// 3️⃣ Use Cases

// Layout & alignment check karna
// Styling issues inspect karna
// Buttons / touchable areas debug karna
// Props & state dekhna (React DevTools ke saath)


// Inspector = UI debug ka tool. Open via Shake / 3-finger tap / Ctrl+M / Cmd+D, sirf dev mode me kaam karta hai.

import { TextInput, Button, Text, View, StyleSheet } from "react-native";

const ElementInspectorPractice = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Name"
        style={styles.input}
        placeholderTextColor="#888"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#888"
      />

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => {}} />
      </View>
    </View>
  );
};

export default ElementInspectorPractice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F6FA",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 10,
    borderRadius: 12,
    overflow: "hidden",
  },
});
