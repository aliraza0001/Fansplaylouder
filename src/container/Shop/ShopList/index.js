import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import TextComponent from '../../../components/TextComponent'
import { colors } from '../../../theme/Color'
import { fontSizes, fontFamily } from '../../../theme/Font'
import ProductCard from '../../../components/ProductCard'
import { useNavigation } from '@react-navigation/native';


export default function ShopList() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.bgContainer}>
        <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 5, marginTop: 10 }}>
          <TextComponent textColor={colors.primary} text={'Shirts'} fontsize={fontSizes.xlarge} fontfamily={fontFamily.bold} fontweight={'700'} />
          <TextComponent textColor={colors.placeholderColor} text={'View All'} fontsize={fontSizes.regular} fontfamily={fontFamily.regular} />
        </View>
        <View style={styles.container}>
          <ProductCard onPress={() => { navigation.navigate('ShopSingle') }} />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </View>

      </View>
    </ScrollView>
  )
}