import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';
import { Colors } from 'react-native-paper';
import { useTimeout, useToggle } from '../hooks';

const Timer = () => {
  const [loading, toggleLoading] = useToggle(true);
  useTimeout(() => loading && toggleLoading(), 3000, [loading]);

  return (
    <View>
      <Text style={styles.title}>Timer</Text>
      <Text>loading: {loading.toString()}</Text>
      <Button onPress={toggleLoading} title={loading ? 'stop loading' : 'start loading'} />
      {loading && <ActivityIndicator size="large" color={Colors.deepPurple700} />}
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1, alignItems: 'center', backgroundColor: Colors.yellow300 },
  title: { fontSize: 20, fontWeight: '600' },
});

export default Timer;
