
import { View, Text, ImageBackground, TouchableOpacity, Platform, Linking, Image } from 'react-native';
import React from 'react';
import { styles } from './style';
import { icehockeySC } from '../../../assets/images';
import { colors } from '../../../theme/Color';
import TextComponent from '../../../components/TextComponent';
import Icon from 'react-native-vector-icons/Ionicons'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'


export default function ScreenFour({ navigation }) {
  return (
    <>
      <ImageBackground
        source={icehockeySC}
        resizeMode="cover"
        style={styles.bgContainer}>

        <TextComponent onPress={() => navigation.navigate('WelcomeScreenOne')} text={'back'} style={[styles.textStyles, { marginTop: Platform.OS == 'ios' ? 40 : 10 }]} />
        
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
          
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("TeamList", {
              data: 'nhl',
              url: 'nhl-sport-live-data-api'
            })}
            style={{ flexDirection: 'row', alignItems: 'center', width: '70%', marginVertical: 20 }}>
            <Icon name='home-outline' size={30} color={colors.white} style={{ marginRight: 50 }} />
            <TextComponent
              text={'Team Info'}
              textColor={colors.white}
              fontsize={30}
              fontweight={'bold'}
            />
          </TouchableOpacity>
          
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => Linking.openURL('https://fansplaylouder.com/nhl-live-streaming/')}
            style={{ flexDirection: 'row', alignItems: 'center', width: '70%', marginVertical: 20 }}>
            <IconMaterial name='live-tv' size={30} color={colors.white} style={{ marginRight: 50 }} />
            <TextComponent
              text={'Live Streaming'}
              textColor={colors.white}
              fontsize={30}
              fontweight={'bold'}
            />
          </TouchableOpacity>

          <View style={{ backgroundColor: 'white', padding: 5, marginVertical: 10 }}>
            <TextComponent text={'News Feed'} fontweight={'bold'} style={{ textDecorationLine: 'underline' }} />
            <Image source={require("../../../assets/images/newsfeed.jpeg")} resizeMode='cover' style={{ width: 280, height: 180, marginVertical: 8 }} />
          </View>

          <View style={{ backgroundColor: 'white', padding: 5 }}>
            <TextComponent text={'Fan of the Month'} fontweight={'bold'} style={{ textDecorationLine: 'underline' }} />
            <Image source={require("../../../assets/images/playerofmonth1.jpeg")} resizeMode='cover' style={{ width: 280, height: 180, marginVertical: 8 }} />
          </View>

        </View>
      </ImageBackground>
    </>
  );
}
