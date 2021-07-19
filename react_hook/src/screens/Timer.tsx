import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Colors, ActivityIndicator } from 'react-native-paper';

const Timer = () => {
  const [loading, setLoading] = useState(true);
  const toggleLoading = useCallback(() => setLoading(loading => !loading), []);

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), []);
    return () => clearTimeout(id);
  }, [loading]);
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
