import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

export default function TextComponent({numberOfLines ,text , textColor , fontweight , fontsize , fontfamily , textalign , padTop , padBot , padLeft , padRight, onPress , style}) {
  return (
    <View>
      <Text numberOfLines={numberOfLines}   onPress={onPress} style={[{color:textColor , fontSize: fontsize , fontWeight: fontweight ,
         fontFamily: fontfamily , paddingLeft:padLeft, textAlign: textalign , paddingBottom: padBot ,paddingRight:padRight,
          paddingTop: padTop}, style]}>{text}</Text>
    </View>
  )
}

