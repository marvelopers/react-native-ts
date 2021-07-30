import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Colors } from 'react-native-paper';
import TopBar from '../components/TopBar';
import PersonUsingValueState from '../components/person/PersonUsingValueState';
import PersonUsingObjectState from '../components/person/PersonUsingObjectState';
import PersonUsingPassingState from '../components/person/PersonUsingPassingState';
import { PersonProps } from '../components/Person';
import * as Data from '../data';

type PersonInfomation = {
  title: string;
  Component: ({ person }: PersonProps) => JSX.Element;
};

const PersonInfomations: PersonInfomation[] = [
  { title: 'PersonUsingValueState', Component: PersonUsingValueState },
  { title: 'PersonUsingObjectState', Component: PersonUsingObjectState },
  { title: 'PersonUsingPassingState', Component: PersonUsingPassingState },
];

const { width } = Dimensions.get('window');
const numberOfComponents = PersonInfomations.length;

const Person = () => {
  const [people, setPeople] = useState<Data.IPerson[]>([]);
  const children = useMemo(
    () =>
      PersonInfomations.map(({ title, Component }) => (
        <View style={{ flex: 1 }} key={title}>
          <Text style={styles.text}>{title}</Text>
          <FlatList
            data={people}
            renderItem={({ item }) => <Component person={item} />}
            keyExtractor={(item, index) => item.id}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          />
        </View>
      )),
    [people.length],
  );
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TopBar setPeople={setPeople} />
      <ScrollView horizontal contentContainerStyle={styles.horizontalScrollView}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
  itemSeparator: { borderWidth: 1, borderColor: Colors.grey500 },
  horizontalScrollView: { width: width * numberOfComponents },
  text: { fontSize: 24, textAlign: 'center' },
});

export default Person;
