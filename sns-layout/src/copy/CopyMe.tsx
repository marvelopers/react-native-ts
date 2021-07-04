import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const title = 'CopyMe';
function CopyMe() {
  return (
    <View style={[Styles.view]}>
      <Text style={[Styles.text]}>{title}</Text>
    </View>
  );
}

export default CopyMe;

const Styles = StyleSheet.create({
  view: { padding: 5, backgroundColor: Colors.blue900 },
  text: { fontSize: 20, color: 'white' },
});
