import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Data from '../data';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Person from '../copy/Person';
import { styles } from '../copy/Person.style';
import color from 'color';

const people: Data.IPerson[] = Data.makeArray(10).map(Data.createRandomPerson);
const title = 'Content';
// const avatarUrl = Data.randomAvatarUrl();
const avatarSize = 50;
const Content = () => {
  const handleClickIcon = () => console.log('icon click');
  return (
    <View style={[Styles.view]}>
      <Text style={[Styles.text]}>{title}</Text>
      <FlatList
        data={people}
        renderItem={({ item }) => <Person person={item} />}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => <View style={Styles.itemSeparator} />}
      />
      {/* <ImageBackground style={{ flex: 1 }} source={require('./src/assets/images/bg.jpg')} /> */}
      {/* <Image source={{ uri: avatarUrl }} style={[Styles.image]} /> */}
      {/* <Icon name="icon" size={avatarSize} color={Colors.lightBlue500} onPress={handleClickIcon} /> */}
    </View>
  );
};

export default Content;

const Styles = StyleSheet.create({
  view: { flex: 1, height: '100%', padding: 5, backgroundColor: 'white' },
  text: { fontSize: 20, color: 'black' },
  image: { width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 },
  itemSeparator: {
    borderWidth: 1,
    borderColor: color(Colors.grey500).lighten(0.3).string(),
  },
});
