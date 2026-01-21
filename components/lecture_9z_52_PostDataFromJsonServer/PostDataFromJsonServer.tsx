// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const PostDataFromJsonServer = () => {

//   const postApiData = async () => {
//     try {
//       const response = await fetch('http://192.168.1.34:3000/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name: 'Rahul',
//           age: 25,
//           email: 'Rahul@gmail.com'
//         })
//       });

//       const result = await response.json();
//       console.log('Posted Data:', result);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View>
//       <Text>Post Data From JSON Server</Text>
//       <Button title="Post Data" onPress={postApiData} />
//     </View>
//   );
// };

// export default PostDataFromJsonServer;



import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const PostDataFromJsonServer = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const postApiData = async () => {
    try {
      const response = await fetch('http://192.168.1.34:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          age: age,
          email: email,
        }),
      });

      const result = await response.json();
      console.warn('Posted Data:', result);

      // clear form
      setName('');
      setAge('');
      setEmail('');

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Post Data From JSON Server</Text>

      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Enter Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Submit" onPress={postApiData} />
    </View>
  );
};

export default PostDataFromJsonServer;
