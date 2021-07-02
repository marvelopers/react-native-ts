import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Person from './src/screens/Person';
import * as Data from './src/data';
import Event from './src/screens/Event';
import TopBar from './src/screens/TopBar';
import Content from './src/screens/Content';
import BottomBar from './src/screens/BottomBar';

const people = Data.makeArray(10).map(Data.createRandomPerson);

export default function App() {
  const children = people.map(person => <Person key={person.id} person={person} />);
  return (
    <SafeAreaView style={Styles.flex}>
      <TopBar />
      <Content />
      <BottomBar />
      {/* <Event />
      <ScrollView>{children}</ScrollView> */}
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: 'skyblue' },
});
