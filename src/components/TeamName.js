import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { fontFamily, fontSizes } from '../theme/Font';
import TextComponent from './TextComponent';
import { colors } from '../theme/Color';

export default function TeamName({ teamTitle, teamLogo, onPress }) {
  return (
    <>
      <View style={styles.container}>
        <TextComponent text={teamTitle} fontweight={'600'} fontsize={fontSizes.large} style={{ color: colors.secondary }} onPress={onPress} />
        <Image resizeMode='contain' source={{ uri: teamLogo }} width={55} height={55} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
    backgroundColor: colors.white,
    width: '100%',
    borderRadius: 15,
    height: 80,
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
        elevation: 6,
      },
    }),
  }
});