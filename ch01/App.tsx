import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import * as Data from './src/data';

const person = Data.createRandomPerson();

export default function App() {
  return (
    <SafeAreaView>
      <Text>{JSON.stringify(person, null, 2)}</Text>
    </SafeAreaView>
  );
}
