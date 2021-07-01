import React from 'react';
import { Text, SafeAreaView } from 'react-native';

export default function App() {
  const children = [1,2,3].map(num => <Text>{num}</Text>)
  return <SafeAreaView>{children}</SafeAreaView>;
}