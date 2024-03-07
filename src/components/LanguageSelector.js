import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import { useLocalization } from '../contexts/LocalizationContext';
import i18n from '../i18n';
import { useTheme } from '../contexts/ThemeContext';

const LanguageSelector = () => {
//   const { i18n } = useTranslation();
const { t } = useTranslation();
  const { setLanguage } = useLocalization();
  const { theme } = useTheme();

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <View style={{...styles.container}}>
         <Text>{t('chooseLang')}</Text>
         <View style={styles.pickerDiv}>
      <Picker
        selectedValue={i18n.language}
        onValueChange={(itemValue) => changeLanguage(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="French" value="fr" />
      </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "black",
    borderTopWidth: 1
  },
  picker: {
    height: 50,
    width: 150,
  },
  pickerDiv: {
    // marginLeft: 5,
    // borderColor: "black",
    // borderWidth: 0.5,
    // borderRadius: 8,
    // height: 50,
    // justifyContent: "center"
  }
});

export default LanguageSelector;
