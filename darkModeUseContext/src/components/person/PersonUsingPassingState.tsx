import React, { useCallback, useState } from 'react';
import { Text, View, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native-paper';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import Avatar from '../Avatar';
import IconText from '../IconText';
import { styles } from '../Person.style';
import * as Data from '../../data';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export type PersonProps = {
  person: Data.IPerson;
};

export enum IconType {
  COMMENT = 'comment',
  RETWEET = 'retweet',
  HEART = 'heart',
}

const PersonUsingValueState = ({ person: initialPerson }: PersonProps) => {
  const [person, setPerson] = useState<Data.IPerson>({
    ...initialPerson,
    counts: { comment: 0, retweet: 0, heart: 0 },
  });

  const handlePressAvatar = useCallback(() => Alert.alert('Avatar'), []);
  const handlePressDelete = useCallback(() => Alert.alert('Delete'), []);

  const handlePressCountIcon = useCallback(
    (iconType: IconType) => () =>
      setPerson(person => ({
        ...person,
        counts: { ...person.counts, iconType: person.counts[iconType] + 1 },
      })),
    [],
  );

  const timeToAgo = dayjs(person.createDate).fromNow();

  return (
    <View style={styles.view}>
      <View style={styles.leftView}>
        <Avatar style={styles.avatar} uri={person.avatar} size={50} onPress={handlePressAvatar} />
      </View>
      <View style={styles.rightView}>
        <Text style={styles.name}>{person.name}</Text>
        <Text style={styles.email}>{person.email}</Text>
        <View>
          <Text style={styles.text}>{timeToAgo}</Text>
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
            onPress={handlePressCountIcon(IconType.COMMENT)}
            name="comment"
            size={24}
            color={Colors.blue500}
            textStyle={styles.iconText}
            text={person.counts.comment}
          />
          <IconText
            viewStyle={styles.touchableIcon}
            onPress={handlePressCountIcon(IconType.RETWEET)}
            name="retweet"
            size={24}
            color={Colors.purple500}
            textStyle={styles.iconText}
            text={person.counts.retweet}
          />
          <IconText
            viewStyle={styles.touchableIcon}
            onPress={handlePressCountIcon(IconType.HEART)}
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

export default PersonUsingValueState;
