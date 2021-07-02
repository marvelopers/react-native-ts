import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const title = 'Content';
const Content = () => {
  return (
    <View style={[Styles.view]}>
      <Text style={[Styles.text]}>{title}</Text>
    </View>
  );
};

export default Content;

const Styles = StyleSheet.create({
  view: { flex: 1, height: '100%', padding: 5, backgroundColor: 'white' },
  text: { fontSize: 20, color: 'black' },
});
