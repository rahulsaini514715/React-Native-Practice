import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Fetch_Api = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(result => {
        setData(result);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <Text>Fetch API Example</Text>

      {data.map(item => (
        <Text key={item.id}>{item.id}</Text>
        <Text key={item.id}>{item.title}</Text>
        <Text key={item.id}>{item.body}</Text>
      ))}
    </View>
  );
};

export default Fetch_Api;
