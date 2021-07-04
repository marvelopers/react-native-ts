import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Date from '../data';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const title = 'Content';
const avatarUrl = Date.randomAvatarUrl();
const avatarSize = 50;
const Content = () => {
  const handleClickIcon = () => console.log('icon click');
  return (
    <View style={[Styles.view]}>
      {/* <ImageBackground style={{ flex: 1 }} source={require('./src/assets/images/bg.jpg')} /> */}
      <Image source={{ uri: avatarUrl }} style={[Styles.image]} />
      <Text style={[Styles.text]}>{title}</Text>
      <Icon name="icon" size={avatarSize} color={Colors.lightBlue500} onPress={handleClickIcon} />
    </View>
  );
};

export default Content;

const Styles = StyleSheet.create({
  view: { flex: 1, height: '100%', padding: 5, backgroundColor: 'white' },
  text: { fontSize: 20, color: 'black' },
  image: { width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 },
});
