import React, { useState } from 'react';
import { View, Text, StatusBar, Button } from 'react-native';

export default function StatusBarExample() {

  const [hidden, setHidden] = useState(false);
  const [bgColor, setBgColor] = useState("purple");

  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 30, textAlign: "center" }}>
        34 Status Bar
      </Text>

      {/* Status Bar */}
      <StatusBar
        backgroundColor={bgColor}   // Android only
        barStyle="light-content"
        hidden={hidden}
      />

      {/* Buttons */}
      <Button
        title={hidden ? "Show Status Bar" : "Hide Status Bar"}
        onPress={() => setHidden(!hidden)}
      />

      <View style={{ marginTop: 10 }}>
        <Button
          color={"red"}
          title="Change Color"
          onPress={() =>
            setBgColor(bgColor === "purple" ? "green" : "purple")
          }
        />
      </View>
    </View>
  );
}
