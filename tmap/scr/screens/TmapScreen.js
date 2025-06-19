import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const TMapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'file:///android_asset/tmap.html' }}
        originWhitelist={['*']}
        allowFileAccess={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default TMapScreen;
