import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { Fontisto } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const HeaderBar = () => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor, marginTop: 30, borderBottomColor: theme.textColor, borderBottomWidth: 1, paddingTop: 20, paddingBottom: 15}]}>
        <View style={styles.appHead}>
            <View style={styles.headMainDiv}>
            <View style={styles.iconDiv}>
        <Image source={require('../assets/xyz.webp')} style={styles.icon} resizeMode="cover"/>
        </View>
        <View style={styles.orgName}>
            <Text style={styles.monk}> MONK </Text>
            <Text style={{...styles.techLabs, color: theme.textColor}}> Tech Labs </Text>
        </View>
        </View>

        </View>
        <View style={styles.themeDiv}>
        <Text style={{color: theme.textColor}}> {t('theme')}: </Text>
      <TouchableOpacity onPress={toggleTheme}>
        <View style={{ color: theme.textColor, marginRight: 10 }}>
            {theme.name==='light' ? 
            <Fontisto name="night-clear" size={24} color="black" />
            :
            <Fontisto name="day-sunny" size={24} color="white" />
  }
            </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    height: 60,
    width: 150,
    // backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  appHead: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    gap: 10
  },
  iconDiv: {
    paddingHorizontal: 10,
    height: 60,
    width: 50,
    overflow: "hidden"
  },
  themeDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5
  },
  headMainDiv :{
    flexDirection: "row",
    // gap: 1
  },
  orgName: {
    justifyContent: "center",
    alignItems: "center",
  },
  monk: {
    color: "#fa4411",
    fontWeight: "800",
    fontSize: 26,
  },
  techLabs: {
    fontSize: 17,
    fontWeight: "700",
    position: "relative",
    bottom: 6
  }
});

export default HeaderBar;
