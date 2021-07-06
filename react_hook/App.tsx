import React, { useMemo } from 'react';
import type FC from 'react';
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

type PersonInfomation = {
  title: string;
  Component: FC<any>;
};

const { width } = Dimensions.get('window');

const PersonInfomations: PersonInfomation[] = [
  { title: 'PersonUsingValueState', Component: PersonUsingValueState },
  { title: 'PersonUsingObjectState', Component: PersonUsingObjectState },
  { title: 'PersonUsingPassingState', Component: PersonUsingPassingState },
];

const numberOfComponents = PersonInfomations.length;

const App = () => {
  const people = useMemo(() => Data.makeArray(10).map(Data.createRandomPerson), []);
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
    [],
  );
  return (
    <SafeAreaView style={styles.safeAreaView}>
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
