import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../theme/Color';
import { fontSizes } from '../theme/Font';




export default function InputComponent({ placeholder, style, keyboard, onChangeText, value, iconImg, secureTextEntry }) {

  return (
    <View style={styles.fieldSet}>

      <TextInput
        style={[styles.inputField, style]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboard}
        placeholderTextColor={colors.placeholderColor}
        secureTextEntry={secureTextEntry}
      />
      <Image style={styles.iconstyle} source={iconImg} resizeMode="cover" />
    </View>
  )
}

const styles = StyleSheet.create({
  fieldSet: {

    marginBottom: 15,
    padding: 5,
    paddingLeft: 40,
    borderRadius: 15,
    borderWidth: 0,
    borderColor: colors.lightGrey,
    height: 60,
    backgroundColor: colors.white,
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
      },
      android: {
        elevation: 10,
      },
    }),
  },

  inputField: {
    fontSize: fontSizes.default,
    color: colors.black,

  },
  iconstyle: {
    position: 'absolute',
    left: 8,
    top: 18
  }
});