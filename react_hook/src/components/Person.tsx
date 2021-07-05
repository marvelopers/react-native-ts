import React, { PureComponent } from 'react';
import { Text, View, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native-paper';
import { styles } from './Person.style';
import Avatar from '../components/Avatar';
import IconText from '../components/IconText';
import * as Data from '../data';

export type PersonProps = {
  person: Data.IPerson;
};

const handlePressAvatar = () => Alert.alert('Avatar');
const handlePressDelete = () => Alert.alert('Delete');
const handlePressCountIcon = (name: string) => () => Alert.alert(`${name} Pressed`);

const Person = ({ person }: PersonProps) => {
  return (
    <View style={styles.view}>
      <View style={styles.leftView}>
        <Avatar style={styles.avatar} uri={person.avatar} size={50} onPress={handlePressAvatar} />
      </View>
      <View style={styles.rightView}>
        <Text style={styles.name}>{person.name}</Text>
        <Text style={styles.email}>{person.email}</Text>
        <View>
          <Text>??시간 전</Text>
          <Icon
            name="trash-can-outline"
            size={26}
            color={Colors.lightBlue500}
            onPress={handlePressDelete}
          />
        </View>
        <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>
          {person.comments}
        </Text>
        <Image style={styles.image} source={{ uri: person.image }} />
        <View style={styles.countView}>
          <IconText
            viewStyle={styles.touchableIcon}
            onPress={handlePressCountIcon('comment')}
            name="comment"
            size={24}
            color={Colors.blue500}
            textStyle={styles.iconText}
            text={person.counts.comment}
          />
          <IconText
            viewStyle={styles.touchableIcon}
            onPress={handlePressCountIcon('retweet')}
            name="retweet"
            size={24}
            color={Colors.purple500}
            textStyle={styles.iconText}
            text={person.counts.retweet}
          />
          <IconText
            viewStyle={styles.touchableIcon}
            onPress={handlePressCountIcon('heart')}
            name="heart"
            size={24}
            color={Colors.red500}
            textStyle={styles.iconText}
            text={person.counts.heart}
          />
        </View>
      </View>
    </View>
  );
};

export default Person;
