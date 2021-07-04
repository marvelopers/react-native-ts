import React from 'react';
import { Text, View, Image } from 'react-native';
import * as Data from '../data';
import { styles } from './Person.style';

export type PersonProps = {
  person: Data.IPerson;
};

const Person = ({ person }: PersonProps) => {
  return (
    <View style={styles.view}>
      {/* <Text>{JSON.stringify(person, null, 2)}</Text> */}
      <Image style={styles.avatar} source={{ uri: person.avatar }} />
      <View>
        <Text style={styles.name}>{person.name}</Text>
        <Text style={styles.email}>{person.email}</Text>
      </View>
      <View>
        <Text>??시간 전</Text>
      </View>
      <Text>{person.comments}</Text>
      <Image style={styles.image} source={{ uri: person.image }} />
      <View style={styles.countView}>
        <Text>{person.counts.comment}</Text>
        <Text>{person.counts.retweet}</Text>
        <Text>{person.counts.heart}</Text>
      </View>
    </View>
  );
};

export default Person;
