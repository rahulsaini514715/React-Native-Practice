import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function StateVsVariable(): JSX.Element {
    const [name, setName] = useState("Rahul saini...");
    const [isOn, setIsOn] = useState(true);

    function toggleName() {
        if (name === "Rahul Saini") {
            setName("Monika");
        } else {
            setName("Rahul Saini");
        }
    }
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Lecture #9 State in react native | State vs Variables 🚀</Text>
            <Text style={{ fontSize: 30 }}>{name}</Text>
            <Button title='Update Name' onPress={toggleName} />

            <Button
                title={isOn ? "ON" : "OFF"}
                color={isOn ? "green" : "red"}
                onPress={() => setIsOn(!isOn)}
            />


        </View>
    );
}



export default StateVsVariable;
