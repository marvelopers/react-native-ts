import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';
import color from 'color';

const avatarSize = 50;

export const styles = StyleSheet.create({
  view: { flexDirection: 'row', backgroundColor: Colors.lime100, padding: 5 },
  leftView: { padding: 5 },
  rightView: { flex: 1, padding: 5, marginRight: 10 },
  text: { fontSize: 16 },
  comments: { marginTop: 10, fontSize: 16 },
  touchableIcon: { flexDirection: 'row', padding: 3, justifyContent: 'space-around' },
  iconText: { color: Colors.deepPurple500, marginLeft: 3 },
  // avatar: { width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 },
  avatar: { borderColor: color(Colors.blue500).lighten(0.5).string(), borderWidth: 2 },
  email: { flexDirection: 'row', alignItems: 'center' },
  name: { marginRight: 5, fontSize: 20, fontWeight: '500' },
  image: { marginTop: 15, height: 150 },
  countView: { flexDirection: 'row', padding: 3, justifyContent: 'space-around' },
});
