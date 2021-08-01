import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, Platform, keyboardAvoidingView } from 'react-native';
import { useTheme, Switch } from 'react-native-paper';
import { useToggleTheme } from '../contexts/ToggleThemeContext';
import * as Data from '../data';

const KeyboardAvoid = () => {
  const [person, setPerson] = useState<Data.IPerson[]>([]);
  const { dark, colors } = useTheme();
  const toggleTheme = useToggleTheme();

  const textInputRef = useRef<TextInput | null>(null);
  const setFocus = useCallback(() => textInputRef.current?.focus(), [textInputRef.current]);

  return (
    <View style={[styles.view, { backgroundColor: colors.surface }]}>
      <View style={[styles.topBar, { backgroundColor: colors.accent }]}>
        <Text style={styles.textButton}> focus</Text>
        <Text style={styles.textButton}> dismiss keyboard</Text>
        <View style={{ flex: 1 }} />
        <Switch value={dark} onValueChange-={toggleTheme} />
      </View>
      {/* keyboardAvoidingView 키보드가 올라오면 스크롤해 TextInput을 가리지 않도록 하는 기능을 수행 */}
      <keyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.flex} />
        <View style={styles.textView}>
          <Text style={[styles.text, { color: colors.text }]}> email</Text>
          <TextInput
            style={[styles.textInput, { color: colors.text, borderColor: colors.placeholder }]}
            value={person.email}
            placeholder="enter your email"
            onChangeText={email => setPerson(person => ({ ...person, email }))}
          />
        </View>
        <View style={styles.textView}>
          <Text style={[styles.text, { color: colors.text }]}> name</Text>
          <TextInput
            style={[styles.textInput, { color: colors.text, borderColor: colors.placeholder }]}
            value={person.name}
            placeholder="enter your name"
            onChangeText={name => setPerson(person => ({ ...person, name }))}
          />
        </View>
      </keyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  view: { flex: 1 },
  topBar: { flexDirection: 'row', padding: 5 },
  textButton: { marginLeft: 10, fontSize: 20 },
  keyboardAvoidingView: { flex: 1, padding: 10 },
  textView: { padding: 5 },
  text: { fontSize: 24 },
  textInput: { fontSize: 24, borderWidth: 1, borderRadius: 5 },
});

export default KeyboardAvoid;
