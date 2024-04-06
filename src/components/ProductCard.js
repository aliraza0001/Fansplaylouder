import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../theme/Color'

const productImage = require('../assets/images/products/shirt.png')

import { heartIcon } from '../assets/icons'
import TextComponent from './TextComponent'
import { fontSizes } from '../theme/Font'



export default function ProductCard({ onPress }) {
  return (
    <>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.imageWrap}>
            <Image source={productImage} resizeMode='contain' />
            <Image source={heartIcon} resizeMode='contain' style={styles.wishlist} />
          </View>
          <TextComponent text={'A. Cardinals'} fontsize={fontSizes.regular} textColor={colors.placeholderColor} fontweight={'400'} padTop={10} />
          <TextComponent text={'Home Jersey'} fontsize={fontSizes.default} textColor={colors.primary} fontweight={'700'} padBot={10} />
          <View style={styles.bottomWrap}>
            <TextComponent text={'$240'} fontsize={fontSizes.xlarge} textColor={colors.primary} fontweight={'700'} />
            <TouchableOpacity style={styles.btn} >
              <TextComponent text={'Add'} fontsize={fontSizes.default} textColor={colors.white} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: '48%',
    height: 'auto',
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
        elevation: 12,
      },
    }),
  },
  imageWrap: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomWrap: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  btn: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  wishlist: {
    position: 'absolute',
    top: 0,
    right: 0,
  }

});