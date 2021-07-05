import React, { useMemo } from 'react';
import { Colors } from 'react-native-paper';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useClock } from '../hooks/useClock';
import * as Data from '../data';
import Person from '../components/Person';
import color from 'color';

const title = 'Memo';
const Memo = () => {
  const time = useClock();
  const people = useMemo(() => Data.makeArray(2).map(Data.createRandomPerson), []);

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>
      <FlatList
        style={styles.flatList}
        data={people}
        renderItem={({ item }) => <Person person={item} />}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

export default Memo;

const styles = StyleSheet.create({
  view: { flex: 1, padding: 5, backgroundColor: Colors.blue900 },
  text: { fontSize: 20, color: 'white' },
  flatList: { width: '100%' },
  itemSeparator: { borderWidth: 1, borderColor: color(Colors.grey500).lighten(0.5).string() },
});
