import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import {
  cartIcon,
  filterIcon,
  searchIcon,
  ArrowLeftIcon,
} from '../../../assets/icons';
import { styles } from './style';
import ShopSingleHeader from '../../../components/ShopSingleHeader';
import TextComponent from '../../../components/TextComponent';
import { fontFamily, fontSizes } from '../../../theme/Font';
import { colors } from '../../../theme/Color';

const productImage = require('../../../assets/images/products/productShirt.png');

export default function ShopSingle({ navigation }) {
  return (
    <>
      <ScrollView>
        <View style={styles.bgContainer}>
          <View style={styles.headerWrap}>
            <ShopSingleHeader filterIcon={ArrowLeftIcon} cartIcon={cartIcon} onPress={() => { navigation.navigate('ShopView') }} />
          </View>
          <View style={styles.innerWrap}>
            <View style={{ position: 'relative', marginBottom: 30 }}>
              <Image
                source={productImage}
                resizeMode="contain"
                style={styles.mainImage}
              />
              <View style={styles.backdropStyle}></View>
            </View>

            <View style={styles.miscStyle}>
              <View>
                <TextComponent
                  text={`Men's Printed Pullover Hoodie`}
                  fontsize={fontSizes.regular}
                  textColor={colors.placeholderColor}
                />
                <TextComponent
                  text={`Nike Club Fleece`}
                  fontsize={fontSizes.xxlarge}
                  textColor={colors.primary}
                  fontweight={'800'}
                />
              </View>
              <View>
                <TextComponent
                  text={`Price`}
                  fontsize={fontSizes.regular}
                  textColor={colors.placeholderColor}
                />
                <TextComponent
                  text={`$99`}
                  fontsize={fontSizes.xxlarge}
                  textColor={colors.primary}
                  fontweight={'800'}
                />
              </View>
            </View>
            <View style={styles.miscStyle}>
              <Image
                source={productImage}
                resizeMode="cover"
                style={styles.miniImages}
              />
              <Image
                source={productImage}
                resizeMode="cover"
                style={styles.miniImages}
              />
              <Image
                source={productImage}
                resizeMode="cover"
                style={styles.miniImages}
              />
              <Image
                source={productImage}
                resizeMode="cover"
                style={styles.miniImages}
              />
            </View>
            <View style={styles.miscStyle}>
              <View style={{ marginTop: 10 }}>
                <TextComponent
                  text={`Size`}
                  fontsize={fontSizes.regular}
                  textColor={colors.primary}
                  fontweight={'700'}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <TextComponent
                  text={`Size Guide`}
                  fontsize={fontSizes.regular}
                  textColor={colors.placeholderColor}
                />
              </View>
            </View>
            <View style={styles.miscStyle}>
              <TextComponent
                fontsize={fontSizes.large}
                fontfamily={fontFamily.bold}
                fontweight={'600'}
                text={'S'}
                textalign={'center'}
                textColor={colors.primary}
                style={{
                  width: 60,
                  height: 60,
                  padding: 5,
                  paddingTop: 15,
                  backgroundColor: colors.bgLightColor,
                  borderRadius: 10,
                }}
              />
              <TextComponent
                fontsize={fontSizes.large}
                fontfamily={fontFamily.bold}
                fontweight={'600'}
                text={'M'}
                textalign={'center'}
                textColor={colors.primary}
                style={{
                  width: 60,
                  height: 60,
                  padding: 5,
                  paddingTop: 15,
                  backgroundColor: colors.bgLightColor,
                  borderRadius: 10,
                }}
              />
              <TextComponent
                fontsize={fontSizes.large}
                fontfamily={fontFamily.bold}
                fontweight={'600'}
                text={'L'}
                textalign={'center'}
                textColor={colors.primary}
                style={{
                  width: 60,
                  height: 60,
                  padding: 5,
                  paddingTop: 15,
                  backgroundColor: colors.bgLightColor,
                  borderRadius: 10,
                }}
              />
              <TextComponent
                fontsize={fontSizes.large}
                fontfamily={fontFamily.bold}
                fontweight={'600'}
                text={'XL'}
                textalign={'center'}
                textColor={colors.primary}
                style={{
                  width: 60,
                  height: 60,
                  padding: 5,
                  paddingTop: 15,
                  backgroundColor: colors.bgLightColor,
                  borderRadius: 10,
                }}
              />
              <TextComponent
                fontsize={fontSizes.large}
                fontfamily={fontFamily.bold}
                fontweight={'600'}
                text={'2XL'}
                textalign={'center'}
                textColor={colors.primary}
                style={{
                  width: 60,
                  height: 60,
                  padding: 5,
                  paddingTop: 15,
                  backgroundColor: colors.bgLightColor,
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={styles.miscStyle}>
              <View style={{ marginTop: 20 }}>
                <TextComponent
                  text={`Description`}
                  fontsize={fontSizes.regular}
                  textColor={colors.primary}
                  fontweight={'700'}
                />
              </View>

            </View>
            <View style={styles.miscStyle}>
              <View>
                <TextComponent
                  text={`The arizona Cardinal Throwback Pullover Jersey is made from premium French terry fabric that blends a performance feel with Read More..`}
                  fontsize={fontSizes.default}
                  textColor={colors.textColor}
                  fontweight={'400'}
                />
              </View>

            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
