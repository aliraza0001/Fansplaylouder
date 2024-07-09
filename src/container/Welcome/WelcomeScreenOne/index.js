import { View, Text, Image, ScrollView, TouchableOpacity, ImageBackground, Dimensions, Alert } from 'react-native';
import React from 'react';
import { styles } from './style';
// import Teams from '../../../components/Teams';
// import {
//   soccer,
//   baseball,
//   basketball,
//   football,
//   icehockey,
//   blogimage
// } from '../../../assets/images';
import TextComponent from '../../../components/TextComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../theme/Color';
const logo = require('../../../assets/images/logo.png');

export default function WelcomeScreenOne({ navigation }) {

  const handleDeleteAccount = () => {

    const onDeleteAccount = () => {
      const formdata = new FormData();
      
      const requestOptions = {
        method: "DELETE ",
        body: formdata,
        redirect: "follow"
      };
      
      fetch("http://vdz.wic.temporary.site/api/user/delete", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    }

    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => null
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => onDeleteAccount()
        }
      ],
      { cancelable: false }
    );
  };


  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: 'white'
    }}>
      <ImageBackground style={{
        flex: 1,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width
      }}
        resizeMode='cover'
        source={require('../../../assets/images/appscreen_bg.jpeg')}
      >
        <View style={styles.mainContainer}>

          <View style={[styles.container, { flexDirection: "row", alignItems: "center", justifyContent: "center" }]}>
            {/* <TouchableOpacity onPress={handleDeleteAccount}>
              <Icon name={'deleteuser'} size={22} color={colors.black} style={{ marginLeft: 15 }} />
            </TouchableOpacity> */}
            <Image
              source={logo}
              style={styles.logoStyle}
              resizeMode="contain"
            />
            {/* <View style={{ width: 20, marginRight: 15 }} /> */}
          </View>
          <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            style={{
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate('ScreenOne');
              }}
              style={{
                margin: 15,
                alignItems: 'center'
              }}>
              <Image
                source={require('../../../assets/images/appgifs/soccer.gif')}
                style={{
                  width: '100%',
                  height: Dimensions.get("window").height / 3.8,
                  borderRadius: 10
                }}
                resizeMode='cover'
              />
              <TextComponent text='Soccer' style={styles.textStyle} />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate('ScreenFour');
              }}
              style={{
                margin: 15,
                alignItems: 'center'
              }}>
              <Image
                source={require('../../../assets/images/appgifs/basketball.gif')}
                style={{
                  width: '100%',
                  height: Dimensions.get("window").height / 3.8,
                  borderRadius: 10
                }}
                resizeMode='cover'
              />
              <TextComponent text='Basketball' style={styles.textStyle} />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate('ScreenThree');
              }}
              style={{
                margin: 15,
                alignItems: 'center'
              }}>
              <Image
                source={require('../../../assets/images/appgifs/baseball.gif')}
                style={{
                  width: '100%',
                  height: Dimensions.get("window").height / 3.8,
                  borderRadius: 10
                }}
                resizeMode='cover'
              />
              <TextComponent text='Baseball' style={styles.textStyle} />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate('ScreenTwo');
              }}
              style={{
                margin: 15,
                alignItems: 'center'
              }}>
              <Image
                source={require('../../../assets/images/appgifs/football.gif')}
                style={{
                  width: '100%',
                  height: Dimensions.get("window").height / 3.8,
                  borderRadius: 10
                }}
                resizeMode='cover'
              />
              <TextComponent text='Football' style={styles.textStyle} />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate('ScreenFive');
              }}
              style={{
                margin: 15,
                alignItems: 'center'
              }}>
              <Image
                source={require('../../../assets/images/appgifs/hockey.gif')}
                style={{
                  width: '100%',
                  height: Dimensions.get("window").height / 3.8,
                  borderRadius: 10
                }}
                resizeMode='cover'
              />
              <TextComponent text='Hockey' style={styles.textStyle} />
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => navigation.navigate("ShopView")}
              style={{
                margin: 15,
                alignItems: 'center'
              }}>
              <Image
                source={require('../../../assets/images/appgifs/shop.gif')}
                style={{
                  width: '100%',
                  height: Dimensions.get("window").height / 3.8,
                  borderRadius: 10
                }}
                resizeMode='cover'
              />
              <TextComponent text={'Shop Online'} style={styles.textStyle} />
            </TouchableOpacity> */}

            <TouchableOpacity onPress={() => navigation.navigate("NewsFeed")}
              style={{
                margin: 15,
                alignItems: 'center'
              }}>
              <Image
                source={require('../../../assets/images/appgifs/blog.gif')}
                style={{
                  width: '100%',
                  height: Dimensions.get("window").height / 3.8,
                  borderRadius: 10
                }}
                resizeMode='cover'
              />
              <TextComponent text={'Blog'} style={styles.textStyle} />
            </TouchableOpacity>

          </ScrollView>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
