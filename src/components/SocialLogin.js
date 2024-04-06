import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {colors} from '../theme/Color';
import {fontFamily, fontSizes} from '../theme/Font';

const borderLine = require('../assets/images/borderImg.png');
const fbImg = require('../assets/images/fbimg.png');
const gmImg = require('../assets/images/googleImg.png');
const apImg = require('../assets/images/appleImg.png');

export default function SocialLogin({
  text,
  signInText,
  onFbPress,
  onGmPress,
  onApPress,
  onPress,
  orText,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.haveanacc}>
        <TextComponent
          text={text}
          padRight={2}
          textColor={colors.primary}
          fontsize={fontSizes.regular}
          fontfamily={fontFamily.light}
        />
        <TextComponent
          text={signInText}
          textColor={colors.secondary}
          padLeft={2}
          fontsize={fontSizes.regular}
          fontfamily={fontFamily.medium}
          onPress={onPress}
        />
      </View>
      <View style={{...styles.override, marginBottom: 10}}>
        <Image source={borderLine} resizeMode="contain" />
        <TextComponent
          text={orText}
          textColor={colors.primary}
          fontsize={fontSizes.medium}
          fontfamily={fontFamily.light}
        />

        <Image source={borderLine} resizeMode="contain" />
      </View>

      <View style={styles.override}>
        <TouchableOpacity onPress={onFbPress}>
          <Image source={fbImg} resizeMode="contain" />
        </TouchableOpacity>

        <TouchableOpacity onPress={onGmPress}>
          <Image source={apImg} resizeMode="contain" />
        </TouchableOpacity>

        <TouchableOpacity onPress={onApPress}>
          <Image source={gmImg} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  haveanacc: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  override: {
    justifyContent: 'space-around',
    alignItems: 'center',
    verticalAlign: 'middle',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
});
