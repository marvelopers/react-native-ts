import React, { useState, useEffect, useCallback } from 'react';
import { Avatar } from '../components/Avatar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Data from '../data';
import { Colors } from 'react-native-paper';

type IdAndAvatar = Pick<Data.IPerson, 'id' | 'avatar'>;

const Interval = () => {
  const [start, setStart] = useState(true);
  const [avatars, setAvatars] = useState<IdAndAvatar[]>([]);

  const toggleStart = useCallback(() => setStart(start => !start), []);
  const clearAvatars = useCallback(() => setAvatars(notUsed => []), []);

  useEffect(() => {
    const id = setInterval(() => {
      if (start) {
        setAvatars(avatars => [
          ...avatars,
          { id: Data.randomId(), avatar: Data.randomAvatarUrl() },
        ]);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [start]);

  const children = avatars.map(({ id, avatar }) => <Avatar key={id} uri={avatar} />);

  return (
    <View style={styles.view}>
      <View style={styles.title}>
        <Text onPress={toggleStart} style={styles.topBarText}>
          {start ? 'stop' : 'start'}
        </Text>
        <Text onPress={clearAvatars} style={styles.topBarText}>
          clear avatar
        </Text>
      </View>
      <Text style={styles.title}>Interval</Text>
      <ScrollView>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1, alignItems: 'center', backgroundColor: Colors.lime300 },
  title: { fontSize: 30, fontWeight: '600' },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    backgroundColor: Colors.blue900,
  },
  topBarText: { fontSize: 20, color: 'white' },
  contentContainerStyle: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  avatarViewStyle: { padding: 5 },
});

export default Interval;
