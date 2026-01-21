import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Button } from 'react-native';

function ActivityIndicatorLoader(): JSX.Element {

  const [show, setShow] = useState(false);

  const displayLoader = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false)
    }, 3000)
  }
  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 50, textAlign: "center" }}>
        31 React Native ActivityIndicator Laoder
      </Text>


      <View>
        {/* <ActivityIndicator size={'small'} color={"gold"}/> */}
        <ActivityIndicator size={80} animating={show} />
      </View>

      <Button title='Show Loader' onPress={displayLoader} />
    </View>
  );
}

export default ActivityIndicatorLoader;




//------------------------------------------------------------------------------------
// second method




// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Button } from 'react-native';

// function ActivityIndicatorLoader(): JSX.Element {
//   const [show, setShow] = useState(false);

//   const displayLoader = () => {
//     setShow(true);

//     setTimeout(() => {
//       setShow(false);
//     }, 3000);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>
//         29 Activity Indicator in React Native
//       </Text>

//       <View style={styles.loaderContainer}>
//         {show && <ActivityIndicator size="large" color="gold" />}
//       </View>

//       <View style={styles.buttonContainer}>
//         <Button title="Show Loader" onPress={displayLoader} color="#FF69B4" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     backgroundColor: '#f0f0f0',
//     height: '100%',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 50,
//     textAlign: 'center',
//   },
//   loaderContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
// });

// export default ActivityIndicatorLoader;
