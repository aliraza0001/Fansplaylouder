import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { colors } from '../theme/Color';
import { fontFamily, fontSizes } from '../theme/Font';

export default function SubHeading({subheading , width , colors}) {
  return (
    <View>
      <Text style={{...styles.textStyle , width: width,color: colors,} }>{subheading}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle:{        
        fontSize: fontSizes.xlarge,
        textAlign: 'center',     
        alignSelf: 'center',   
        fontFamily: fontFamily.medium,  
    }
});