import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';
import color from 'color';

const avatarSize = 50;

export const styles = StyleSheet.create({
  view: { backgroundColor: Colors.lime100, padding: 5 },
  avatar: { width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 },
  email: { flexDirection: 'row', alignItems: 'center' },
  name: { marginRight: 5, fontSize: 20, fontWeight: '500' },
  image: { width: '100%', height: 150 },
  countView: { flexDirection: 'row', padding: 3, justifyContent: 'space-around' },
});
