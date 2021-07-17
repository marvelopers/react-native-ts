import React, { useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import * as Data from './src/data';

const App = () => {
  return <SafeAreaView style={styles.safeAreaView}></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
});

export default App;
