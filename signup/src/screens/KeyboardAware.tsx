import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, Keyboard, findNodeHandle } from 'react-native';
import type { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTheme, Switch } from 'react-native-paper';
import { useToggleTheme } from '../contexts/ToggleThemeContext';
import * as Data from '../data';

const KeyboardAware = () => {
  const [person, setPerson] = useState<Data.IPerson[]>([]);
  const { dark, colors } = useTheme();
  const toggleTheme = useToggleTheme();

  const textInputRef = useRef<TextInput | null>(null);
  const setFocus = useCallback(() => textInputRef.current?.focus(), [textInputRef.current]);

  const scrollViewRef = useRef<KeyboardAwareScrollView | null>(null);
  const scrollToInput = (reactNode: any) => {
    scrollViewRef.current?.scrollToFocusedInput(reactNode);
  };
  const autoFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    scrollToInput(findNodeHandle(event.target));
  };

  return (
    <View style={[styles.view, { backgroundColor: colors.surface }]}>
      <View style={[styles.topBar, { backgroundColor: colors.accent }]}>
        <Text style={styles.textButton} onPress={setFocus}>
          focus
        </Text>
        <Text style={styles.textButton} onPress={Keyboard.dismiss}>
          dismiss keyboard
        </Text>
        <View style={{ flex: 1 }} />
        <Switch value={dark} onValueChange-={toggleTheme} />
      </View>
      {/* keyboardAvoidingView의 버그를 해결할 수 있는 keyboardAwareScrollView 사용 */}
      <KeyboardAwareScrollView ref={scrollViewRef} contentContainerStyle={styles.flex}>
        <View style={styles.flex} />
        <View style={styles.textView}>
          <Text style={[styles.text, { color: colors.text }]}> email</Text>
          <TextInput
            style={[styles.textInput, { color: colors.text, borderColor: colors.placeholder }]}
            value={person.email}
            placeholder="enter your email"
            onChangeText={email => setPerson(person => ({ ...person, email }))}
            onFocus={autoFocus}
          />
        </View>
        <View style={styles.textView}>
          <Text style={[styles.text, { color: colors.text }]}> name</Text>
          <TextInput
            style={[styles.textInput, { color: colors.text, borderColor: colors.placeholder }]}
            value={person.name}
            placeholder="enter your name"
            onChangeText={name => setPerson(person => ({ ...person, name }))}
            onFocus={autoFocus}
          />
        </View>
      </KeyboardAwareScrollView>
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

export default KeyboardAware;
