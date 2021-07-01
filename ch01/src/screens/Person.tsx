import React from 'react';
import type { FC } from 'react';
import * as Data from '../data';
import { Text } from 'react-native';

export type PersonProps = {
  person: Data.IPerson;
};

const Person: FC<PersonProps> = ({ person }) => <Text>{JSON.stringify(person, null, 2)}</Text>;

export default Person;
