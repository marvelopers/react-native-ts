import React, { useEffect, useLayoutEffect, useCallback } from 'react';
import { Platform, LayoutChangeEvent, View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';
import { useLayout } from '../hooks';

const LifeCycle = () => {
  const [layout, handleLayout] = useLayout();

  // const handleLayout = useCallback((e: LayoutChangeEvent) => {
  //   const { layout } = e.nativeEvent;
  //   console.log(Platform.OS, 'handleLayout called', layout);
  // }, []);

  // useEffect(() => {
  //   console.log(Platform.OS, 'useEffect called');
  //   return () => console.log(Platform.OS, 'useEffect finish');
  // }, []);

  // useLayoutEffect(() => {
  //   console.log(Platform.OS, 'useLayout called');
  //   return () => console.log(Platform.OS, 'useLayout finish');
  // }, []);

  // console.log(Platform.OS, 'render start');

  return (
    <View onLayout={handleLayout} style={styles.view}>
      <Text style={styles.title}>LifeCycle</Text>
      <Text>layout: {JSON.stringify(layout, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1, alignItems: 'center', backgroundColor: Colors.lightBlue500 },
  title: { fontSize: 30, fontWeight: '600' },
});
export default LifeCycle;
