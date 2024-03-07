import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Home from './src/components/Home';
import HeaderBar from './src/components/HeaderBar';
import LanguageSelector from './src/components/LanguageSelector';
import { LocalizationProvider } from './src/contexts/LocalizationContext';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <LocalizationProvider>
        <SafeAreaView style={styles.container}>
          <HeaderBar />
          <Home />
          <LanguageSelector />
        </SafeAreaView>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
