import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './style';
import ButtonComponent from '../../components/ButtonComponent';
import { colors } from '../../theme/Color';
import TextComponent from '../../components/TextComponent';
import { fontFamily, fontSizes } from '../../theme/Font';

const borderLine = require('../../assets/images/borderImg.png');

const logo = require('../../assets/images/logo.png');

export default function SignupPlatform({ navigation }) {
  return (
    <View style={styles.bgContainer}>
      <View style={styles.innerContainer}>
        <Image source={logo} resizeMode="contain" width={179} height={70} />
      </View>
      <View style={{height: '25%'}}>
        {/* <ButtonComponent
          title={'Continue with Google'}
          style={{ width: '100%', backgroundColor: '#EA4335', marginBottom: 20 }}
        />
        <ButtonComponent
          title={'Continue with Apple'}
          style={{ width: '100%', backgroundColor: '#231F20', marginBottom: 20 }}
        />
        <ButtonComponent
          title={'Continue with Facebook'}
          style={{ width: '100%', backgroundColor: '#1877F2', marginBottom: 20 }}
        /> */}
      </View>
      {/* <View style={{ ...styles.override, marginBottom: 10 }}>
        <Image source={borderLine} resizeMode="contain" />
        <TextComponent
          text={'or'}
          textColor={colors.primary}
          fontsize={fontSizes.medium}
          fontfamily={fontFamily.light}
        />

        <Image source={borderLine} resizeMode="contain" />
      </View> */}
            <ButtonComponent
        title={'Login with email'}
        style={{ width: '100%', marginTop: 40 }}
        onPress={() => { navigation.navigate('Login') }}
      />
      <ButtonComponent
        title={'Sign up with email'}
        style={{ width: '100%', marginTop: 40 }}
        onPress={() => { navigation.navigate('Signup') }}
      />
    </View>
  );
}
