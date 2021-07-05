import React from 'react';
import { SafeAreaView, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import { useClock } from './src/hooks/useClock';
import Cache from './src/screens/Cache';
import Memo from './src/screens/Memo';
import Fibo from './src/screens/Fibo';

const { width } = Dimensions.get('window');
const numberOfComponents = 3;

const App = () => {
  const time = useClock();
  return (
    <SafeAreaView>
      <ScrollView horizontal contentContainerStyle={styles.contentContainerStyle}>
        <Cache />
        <Memo />
        <Fibo />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  contentContainerStyle: { width: width * numberOfComponents },
});

export default App;
