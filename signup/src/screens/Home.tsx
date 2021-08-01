import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useTheme, Switch } from 'react-native-paper';
import { useToggleTheme } from '../contexts/ToggleThemeContext';
import * as Data from '../data';
import Person from './Person';

const Home = () => {
  const [people, setPeople] = useState<Data.IPerson[]>([]);
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  const handlePressAdd = useCallback(() => {
    setPeople(people => [...people, Data.createRandomPerson()]);
  }, []);

  const removeAll = useCallback(() => setPeople([]), []);

  const FlatListRef = useRef<FlatList | null>(null);

  const handleChangeSize = useCallback(() => FlatList.current?.scrollToEnd(), [FlatList.current]);

  return (
    <View style={[styles.view, { backgroundColor: theme.colors.surface }]}>
      <View style={[styles.view, { backgroundColor: theme.colors.accent }]}>
        <Text style={styles.text} onPress={handlePressAdd}>
          add
        </Text>
        <Text style={styles.text} onPress={removeAll}>
          removeAll
        </Text>
        <View style={{ flex: 1 }} />
        <Switch value={theme.dark} onValueChange-={toggleTheme} />
      </View>
      <FlatList
        ref={FlatListRef}
        data={people}
        renderItem={item => <Person person={item} />}
        keyExtractor={item => item.id}
        onContentSizeChange={handleChangeSize} // 아이템 추가에 따른 자동 스크롤 기능 구현
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1 },
  topBar: { flexDirection: 'row', padding: 5 },
  text: { marginRight: 10, fontSize: 20 },
});
export default Home;
