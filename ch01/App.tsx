import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Person from './src/screens/Person';
import * as Data from './src/data';
import Event from './src/screens/Event';

const people = Data.makeArray(10).map(Data.createRandomPerson);

export default function App() {
  const children = people.map(person => <Person key={person.id} person={person} />);
  return (
    <SafeAreaView>
      <Event />
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
}
