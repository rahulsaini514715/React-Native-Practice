import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ListWithApiDataUpdateAndDelete = () => {
  const [data, setData] = useState([])
  const getAPIData = async () => {
    const url = "http://192.168.1.34:3000/users";

    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  }


  const deleteUser =async(id)=>{
    const url = "http://192.168.1.34:3000/users";
    let result = await fetch(`${url}/${id}`, {
      method: "DELETE"
    });
if (result.status === 200) {
    console.warn("User deleted");
    getAPIData(); //  refresh list
  }
    if(result){
       console.warn("User deleted")
    }
  }

  useEffect(() => {
    getAPIData();
  }, [])
  return (
    <View style={styles.container}>
      <Text>List with API data</Text>

      <View style={styles.dataWrapper}>
        <View style={{ flex: 1.3 }}>
          <Text>Name</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text>Age</Text>
        </View>

        <View style={{ flex: 2 }}>
          <Text>Operations</Text>
        </View>
      </View>


      {
        data.length ? data.map((item) => <View key={item.id} style={styles.dataWrapper}>
          <View style={{ flex: 1 }}>
            <Text>{item.name}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>{item.age}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Button title='Delete' onPress={()=> deleteUser(item.id)} />
          </View>
          <View style={{ flex: 1 }}>
            <Button title='Update' />
          </View>
        </View>
        ) :
          null
      }
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  dataWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "orange",
    margin: 5,
    padding: 8
  }
});


export default ListWithApiDataUpdateAndDelete;
