import { View, Text , StyleSheet , Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../theme/Color'
import { fontFamily, fontSizes } from '../theme/Font'
import TextComponent from './TextComponent'


export default function HomeHeader({imageSrc , userName , dayTime , icon , onPress}) {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
            <View style={styles.container}>
            <Image source={imageSrc} resizeMode='cover' style={styles.imgstyle} />

            </View>
            <View style={{paddingLeft: 10}}>
            <TextComponent  text={userName}  textColor={colors.white} fontsize={fontSizes.xxlarge} fontfamily={fontFamily.bold} />
            <TextComponent  text={dayTime}  textColor={colors.white} fontsize={fontSizes.default} fontfamily={fontFamily.medium} padBot={10} />
            </View>
        </View>
        <View>
            <TouchableOpacity onPress={onPress}>
        <Text>Back</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgstyle:{
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.white,
        width: 50,
        height: 50,
    },
    iconstyle:{
       borderRadius: 10,
       borderWidth: 0.5,
       borderColor: colors.white,
        padding: 7,
       width: 40,
       height: 40,
       backgroundColor: colors.lightGrey,
       
    },

})