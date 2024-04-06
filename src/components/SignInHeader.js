import { View, Text , StyleSheet , Image} from 'react-native'
import React from 'react'
import { colors } from '../theme/Color';
import { fontFamily, fontSizes } from '../theme/Font';
import TextComponent from './TextComponent';


const bgImg = require('../assets/images/signupbg.png');

export default function SignInHeader(props) {
  return (
    <View style={styles.container}>
       <TextComponent onPress={() => props.navigation ? props.navigation.goBack() : props.navigation.navigate('WelcomeScreenOne') } text={'back'} style={styles.textStyles}/>
      <Text style={styles.headerText}>{props.headerText}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        height: 150,
        backgroundColor: colors.white,
        position: 'relative'
    },
    headerText:{
        textTransform: 'capitalize',
        fontSize: fontSizes.xxlarge,
        fontFamily: fontFamily.bold,
        color: colors.secondary,
        position: 'absolute',
        bottom: 40,
        left: 20        
    },
    textStyles:{
      color: colors.placeholderColor,
      fontSize: fontSizes.default,
      fontFamily: fontFamily.bold,
      position: 'absolute',
      top: 30,
      left: 20 
    }

 });