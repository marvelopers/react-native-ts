import React from 'react';
import { IconType } from '../screens/person/PersonUsingObjectState';
import { View } from 'react-native';
import { Colors } from 'react-native-paper';
import IconText from './IconText';
import { styles } from './Person.style';
import * as Data from '../data';

export type PersonCountProps = {
  person: Data.IPerson;
  onPressCountIcon: (iconType: IconType) => void;
};

const PersonCount = ({ person, onPressCountIcon }: PersonCountProps) => {
  return (
    <View style={styles.countView}>
      <IconText
        viewStyle={styles.touchableIcon}
        onPress={onPressCountIcon(IconType.COMMENT)}
        name="comment"
        size={24}
        color={Colors.blue500}
        textStyle={styles.iconText}
        text={person.counts.comment}
      />
      <IconText
        viewStyle={styles.touchableIcon}
        onPress={onPressCountIcon(IconType.RETWEET)}
        name="retweet"
        size={24}
        color={Colors.purple500}
        textStyle={styles.iconText}
        text={person.counts.retweet}
      />
      <IconText
        viewStyle={styles.touchableIcon}
        onPress={onPressCountIcon(IconType.HEART)}
        name="heart"
        size={24}
        color={Colors.red500}
        textStyle={styles.iconText}
        text={person.counts.heart}
      />
    </View>
  );
};

export default PersonCount;
