import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function ModalDialogBox() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Background without flex */}
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Hello Modal!</Text>
            <Text style={styles.modalText}>
              This is a simple modal without using flex.
            </Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,        // instead of flex centering
    alignItems: 'center',  // horizontal centering
  },
  modalBackground: {
    position: 'absolute',       // absolute position
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 200,            // vertical position
    alignItems: 'center',       // horizontal center
  },
  modalContainer: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#FF69B4',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: 'center',
  },
  closeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});











//-----------------------------------------------------------------

// second method 






// import React, { useState } from 'react';
// import { View, Text, Modal, Button, StyleSheet, TouchableOpacity } from 'react-native';

// export default function ModalDialogBox() {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Button title="Show Modal" onPress={() => setModalVisible(true)} />

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         {/* Modal Background */}
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContainer}>
            
//             {/* Cross Button */}
//             <TouchableOpacity
//               style={styles.crossButton}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={styles.crossText}>×</Text>
//             </TouchableOpacity>

//             {/* Modal Content */}
//             <Text style={styles.modalTitle}>Hello Modal!</Text>
//             <Text style={styles.modalText}>
//               This is a modern modal popup without using flex.
//             </Text>

//             <TouchableOpacity
//               style={styles.okButton}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={styles.okText}>OK</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 100,
//     alignItems: 'center',
//   },
//   modalBackground: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     paddingTop: 200,
//     alignItems: 'center',
//   },
//   modalContainer: {
//     width: 300,
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 20,
//     elevation: 10, // Android shadow
//     shadowColor: '#000', // iOS shadow
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   crossButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     padding: 5,
//   },
//   crossText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#555',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 20,
//     textAlign: 'center',
//   },
//   modalText: {
//     fontSize: 16,
//     marginVertical: 20,
//     textAlign: 'center',
//   },
//   okButton: {
//     backgroundColor: '#FF69B4',
//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     alignSelf: 'center',
//   },
//   okText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });



