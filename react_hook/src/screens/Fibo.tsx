import React, { useMemo } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Colors } from 'react-native-paper';
import * as Data from '../data';
import { fibonacci } from './fibonacci';

const title = 'Fibo';
const Fibo = () => {
  const memoizedFibonacci = useMemo(() => fibonacci, []);

  const fibos = useMemo(
    () =>
      Data.makeArray(20 + 1).map((notUsed, index) => ({
        number: index,
        fibonacci: memoizedFibonacci(index),
      })),
    [],
  );

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={fibos}
        renderItem={({ item }) => (
          <Text style={styles.text}>
            {item.number}:{item.fibonacci}
          </Text>
        )}
        keyExtractor={item => item.number.toString()}
      />
    </View>
  );
};

export default Fibo;

const styles = StyleSheet.create({
  view: { flex: 1, backgroundColor: Colors.blue900 },
  text: { fontSize: 20, color: 'white' },
  contentContainerStyle: { alignItems: 'center' },
});
