import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const title = 'TopBar';
const TopBar = () => {
  return (
    <View style={[Styles.view]}>
      <Text style={[Styles.text]}>{title}</Text>
    </View>
  );
};

export default TopBar;

const Styles = StyleSheet.create({
  view: { padding: 5, backgroundColor: 'pink' },
  text: { fontSize: 20, color: 'white' },
});
