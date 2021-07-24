import React, { useMemo, useState, useCallback } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Data from './src/data';
import { Colors } from 'react-native-paper';
import LifeCycle from './src/screens/LifeCycle';
import Timer from './src/components/Timer';
import Interval from './src/screens/Interval';
import Fetch from './src/screens/Fetch';

const App = () => {
  const selectList = useMemo(() => ['lifeCycle', 'timer', 'interval', 'fetch'], []);
  const [selected, setSelected] = useState(selectList[0]);
  const handlePress = useCallback((text: string) => setSelected(text), []);
  const buttons = useMemo(
    () =>
      selectList.map(text => (
        <Text key={text} onPress={() => handlePress(text)} style={styles.button} />
      )),
    [],
  );
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.topBar}>{buttons}</View>
      {selected === 'lifeCycle' && <LifeCycle />}
      {selected === 'timer' && <Timer />}
      {selected === 'interval' && <Interval />}
      {selected === 'fetch' && <Fetch />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
  button: { fontSize: 20, color: 'white' },
  topBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    justifyContent: 'space-between',
    backgroundColor: Colors.lightBlue500,
  },
});

export default App;
