import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useToggleTheme } from '../contexts/ToggleThemeContext';
import * as Data from '../data';
import Person from './Person';

const People = () => {
  const [people, setPeople] = useState<Data.IPerson[]>([]);
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  const handlePressAdd = useCallback(() => {
    setPeople(people => [...people, Data.createRandomPerson()]);
  }, []);
  const removeAll = useCallback(() => setPeople([]), []);

  return (
    <View style={[styles.view, { backgroundColor: theme.colors.surface }]}>
      <View style={[styles.view, { backgroundColor: theme.colors.accent }]}>
        <Text style={styles.text} onPress={handlePressAdd}>
          add
        </Text>
        <Text style={styles.text} onPress={removeAll}>
          removeAll
        </Text>
      </View>
      <FlatList
        data={people}
        renderItem={item => <Person person={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1 },
  topBar: { flexDirection: 'row', padding: 5 },
  text: { marginRight: 10, fontSize: 20 },
});
export default People;
