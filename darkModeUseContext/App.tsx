import React, { useMemo, useState, useCallback } from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { Provider as PaperProvider } from 'react-native-paper';
import { DarkTheme, DefaultTheme } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';
import * as Data from './src/data';
import MainNavigator from './src/screens/MainNavigator';
import { ToggleThemeProvider } from './src/contexts/ToggleThemeContext';

const App = () => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme === 'dark' ? DarkTheme : DefaultTheme);
  const handleToggleTheme = useCallback(() => setTheme((theme) => theme.dark ? DefaultTheme : DarkTheme), []);

  return (
    <AppearanceProvider>
      <PaperProvider theme={DarkTheme}>
        <ToggleThemeProvider toggleTheme={toggleTheme}>
          <SafeAreaView style={styles.safeAreaView}>
            <MainNavigator />
          </SafeAreaView>
        </ToggleThemeProvider>
      </PaperProvider>
    </AppearanceProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
});

export default App;
