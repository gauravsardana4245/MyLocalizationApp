import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Home = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const getFormattedDateTime = () => {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return currentDate.toLocaleString(i18n.language, options);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={{ color: theme.textColor }}>{getFormattedDateTime()}</Text>
      {/* <Image source={require('../assets/thehousemonk_logo.jpeg')} style={styles.image} /> */}
      <Text style={[styles.heading, { color: theme.textColor }]}>{t('welcome')}</Text>
      <Image source={require('../assets/abc.webp')} style={styles.image2} />
      <Text style={{ color: theme.textColor }}>{t('propertyDealsDescription')}</Text>
      <Text style={{ color: theme.textColor }}>{t('manageTenantsDescription')}</Text>
      
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonColor }]}>
        <Text style={{ color: "white" }}>{t('viewProperties')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonColor }]}>
        <Text style={{ color: "white" }}>{t('manageTenants')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
      borderRadius: 100
    },
    image2: {
        width: 250,
        height: 200,
        marginBottom: 20,
      },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    //   flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      marginTop: 20,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
  });

export default Home;
