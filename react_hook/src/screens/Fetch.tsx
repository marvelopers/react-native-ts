import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native-paper';
import * as Data from '../data';
import Country from './Country';

const Fetch = () => {
  const [counties, setCounties] = useState<Data.ICountry[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    Data.getCountrise().then(setCounties).catch(setError);
  }, [])

  return <View>
    <Text style={styles.title}>Fetch</Text>
    {error && <Text>{error.message}</Text>}
    <FlatList data={counties} showsVerticalScrollIndicator={false}
      renderItem={(item) => <Country country={item} />}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  </View>;
};

const styles = StyleSheet.create({
  view: { flex: 1, alignItems: 'center', backgroundColor: Colors.blue100 },
  title: { fontSize: 30, fontWeight: '600' },
  separator: { borderBottomColor: Colors.blue50, borderBottomWidth: 1 },
})

export default Fetch;
