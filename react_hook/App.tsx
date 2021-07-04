import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Text style={styles.digitFont}></Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  digitFont: {
    // fontFamily:
    fontWeight: '400',
  },
  time: {
    fontSize: 50,
  },
});

export default App;
