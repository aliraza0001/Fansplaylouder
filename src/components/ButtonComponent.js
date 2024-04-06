import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {fontFamily, fontSizes} from '../theme/Font';
import {colors} from '../theme/Color';

export default function ButtonComponent({
  title,
  color,
  bgColor,
  texttransform,
  textWeight,
  onPress,
  style,
}) {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[{...styles.container}, style]}>
        <Text
          style={{
            color: color,
            textTransform: texttransform,
            fontWeight: textWeight,
            ...styles.textStyle,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: fontFamily.semibold,
    fontSize: fontSizes.default,
    color: colors.white,
  },
  container: {
    width: '100%',
    height: 54,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },
});
