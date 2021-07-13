import React, { useCallback, Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native-paper';
import * as Data from '../data';

export type TopBarProps = {
  setPeople: Dispatch<SetStateAction<Data.IPerson[]>>;
};

const TopBar = ({ setPeople }: TopBarProps) => {
  const add = useCallback(() => {
    setPeople(prevPeople => [Data.createRandomPerson(), ...prevPeople]);
  }, []);
  const deleteAll = useCallback(() => {
    setPeople(notUsed => []);
  }, []);
  return (
    <View style={styles.topBar}>
      <Text style={styles.button} onPress={add}>
        add
      </Text>
      <Text style={styles.button} onPress={deleteAll}>
        delete all
      </Text>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    backgroundColor: Colors.lightBlue700,
  },
  button: { color: 'white', fontSize: 20 },
});
