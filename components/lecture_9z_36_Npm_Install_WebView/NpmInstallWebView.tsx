import React from 'react';
import { View, Text, SafeAreaView, Dimensions } from 'react-native';
import WebView from 'react-native-webview';

const { height, width } = Dimensions.get('window');

export default function TwoViews() {
  return (
    <SafeAreaView>
      {/* Top view */}
      <View style={{ height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd' }}>
        <Text style={{ fontSize: 24 }}>Rahul Saini</Text>
      </View>

      {/* Bottom view */}
      <View style={{ height: height - 100 }}>
        <WebView
          source={{ uri: 'https://www.wikipedia.org/' }}
          style={{ height: height - 100, width: width }}
        />
      </View>
    </SafeAreaView>
  );
}
