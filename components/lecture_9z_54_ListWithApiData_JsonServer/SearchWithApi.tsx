import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  TextInput
} from 'react-native';

const ListWithApiDataUpdateAndDelete = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const API_URL = "http://192.168.1.34:3000/users";

  const getAPIData = async () => {
    let result = await fetch(API_URL);
    result = await result.json();
    setData(result);
  };

  const deleteUser = async (id) => {
    let result = await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    if (result.status === 200) {
      getAPIData();
    }
  };

  const updateUser = (item) => {
    setSelectedUser(item);
    setShowModal(true);
  };

  const saveUpdatedUser = async () => {
    let result = await fetch(`${API_URL}/${selectedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...selectedUser,
        age: Number(selectedUser.age)
      })
    });

    if (result.status === 200) {
      setShowModal(false);
      setSelectedUser(null);
      getAPIData();
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>List with API data</Text>

      <View style={styles.dataWrapper}>
        <Text style={{ flex: 1 }}>Name</Text>
        <Text style={{ flex: 1 }}>Age</Text>
        <Text style={{ flex: 2 }}>Operations</Text>
      </View>

      {
        data.length ? data.map((item) => (
          <View key={item.id} style={styles.dataWrapper}>
            <Text style={{ flex: 1 }}>{item.name}</Text>
            <Text style={{ flex: 1 }}>{item.age}</Text>

            <View style={{ flex: 1 }}>
              <Button title="Delete" onPress={() => deleteUser(item.id)} />
            </View>

            <View style={{ flex: 1 }}>
              <Button title="Update" onPress={() => updateUser(item)} />
            </View>
          </View>
        )) : null
      }

      <Modal visible={showModal} transparent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Text>Name</Text>
            <TextInput
              style={styles.input}
              value={selectedUser?.name}
              onChangeText={(text) =>
                setSelectedUser({ ...selectedUser, name: text })
              }
            />

            <Text>Age</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={String(selectedUser?.age)}
              onChangeText={(text) =>
                setSelectedUser({ ...selectedUser, age: text })
              }
            />

            <Button title="Save" onPress={saveUpdatedUser} />
            <Button title="Close" onPress={() => setShowModal(false)} />

          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  dataWrapper: {
    flexDirection: "row",
    backgroundColor: "orange",
    marginVertical: 4,
    padding: 8
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 250,
    elevation: 5
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 10
  }
});

export default ListWithApiDataUpdateAndDelete;
