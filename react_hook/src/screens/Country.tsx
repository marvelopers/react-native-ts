import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import * as Data from '../data';

export type CountryProps = {
  country: Data.ICountry
}

const Country = ({ country }: CountryProps) => {
  const { name, capital, population, subregion, region } = country
  return (
    <View style={styles.view}>
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View>
        <Text>capital: {capital}</Text>
        <Text>population: {population}</Text>
        <Text>subregion: {subregion}</Text>
        <Text>region: {region}</Text>
      </View>
    </View>
  )
}

export default Country

const styles = StyleSheet.create({
  view: { padding: 5 },
  name: { fontSize: 30, fontWeight: '400' }
})