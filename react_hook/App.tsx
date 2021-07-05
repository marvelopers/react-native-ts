import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useClock } from './src/hooks/useClock';

const App = () => {
  const time = useClock();
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Text style={[styles.digitFont, styles.time]}>{time.toLocaleTimeString()}</Text>
      <Text style={styles.digitFont}>{time.toLocaleDateString()}</Text>
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
