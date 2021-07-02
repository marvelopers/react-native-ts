import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const title = 'BottomBar';
const BottomBar = () => {
  return (
    <View style={[Styles.view]}>
      <Text style={[Styles.text]}>{title}</Text>
    </View>
  );
};

export default BottomBar;

const Styles = StyleSheet.create({
  view: { padding: 5, backgroundColor: 'purple' },
  text: { fontSize: 20, color: 'white' },
});
