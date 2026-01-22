// import { useRef } from "react";
// import { Button, Text, TextInput, View, StyleSheet } from "react-native";

// const RefPractice = () => {
//   const input = useRef(null);   

//   const updateInput = () => {
//     // Logic 1: focus input
//     input.current.focus();

//     // Logic 2: update style + value using ref
//     input.current.setNativeProps({
//       text: "Hello useRef ",
//       style: {
//         fontSize: 24,
//         color: "red",
//       },
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Ref with example</Text>

//       <TextInput
//         ref={input}
//         placeholder="Enter Name"
//         style={styles.input}
//       />

//       <TextInput
//         placeholder="Enter Password"
//         style={styles.input}
//       />

//       <Button title="Update Input" onPress={updateInput} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     marginTop: 40,
//   },
//   title: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#999",
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 5,
//   },
// });

// export default RefPractice;



import { useRef } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";

const RefPractice = () => {
  const firstInput = useRef(null);
  const secondInput = useRef(null);

  const updateInput = () => {
    // focus first input
    firstInput.current.focus();
  };

  const syncText = (text) => {
    // copy text from first to second input
    secondInput.current.setNativeProps({
      text: text,
       style: {
        fontSize: 24,
        color: "red",
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ref with example</Text>

      <TextInput
        ref={firstInput}
        placeholder="Enter Name"
        style={styles.input}
        onChangeText={syncText}
      />

      <TextInput
        ref={secondInput}
        placeholder="Enter Password"
        style={styles.input}
      />

      <Button title="Focus First Input" onPress={updateInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});


export default RefPractice;
