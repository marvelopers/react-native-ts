import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useClock } from '../hooks/useClock';

const Timer = () => {
  const time = useClock();
  return (
    <View style={styles.view}>
      <Text style={[styles.digitFont, styles.time]}>{time.toLocaleTimeString()}</Text>
      <Text style={styles.digitFont}>{time.toLocaleDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
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

export default Timer;
