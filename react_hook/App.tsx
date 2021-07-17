import React, { useMemo, useState } from 'react';
// import type FC from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  View,
  FlatList,
} from 'react-native';
import PersonUsingValueState from './src/screens/person/PersonUsingValueState';
import PersonUsingObjectState from './src/screens/person/PersonUsingObjectState';
import PersonUsingPassingState from './src/screens/person/PersonUsingPassingState';
import { Colors } from 'react-native-paper';
import * as Data from './src/data';
import TopBar from './src/components/TopBar';
import { PersonProps } from './src/components/Person';

type PersonInfomation = {
  title: string;
  Component: ({ person }: PersonProps) => JSX.Element;
};

const { width } = Dimensions.get('window');

const PersonInfomations: PersonInfomation[] = [
  { title: 'PersonUsingValueState', Component: PersonUsingValueState },
  { title: 'PersonUsingObjectState', Component: PersonUsingObjectState },
  { title: 'PersonUsingPassingState', Component: PersonUsingPassingState },
];

const numberOfComponents = PersonInfomations.length;

const App = () => {
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

export default App;
