import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import {styles} from './style';

import {colors} from '../../theme/Color';

import SubHeading from '../../components/SubHeading';
import TextComponent from '../../components/TextComponent';
import {fontFamily, fontSizes} from '../../theme/Font';


const userImage1 = require('../../assets/images/exercise.png');
const bgImg = require('../../assets/images/bgAfterImage.png');
const userImage = require('../../assets/images/userImage.png');

export default function HomeScreen() {
  return (
    <>
      <ImageBackground
        style={styles.ImageBgContainer}
        resizeMode="cover"
        source={bgImg}>
        <ScrollView>
          <HomeHeader
            imageSrc={userImage}
            userName={'Hello Naeem'}
            dayTime={'Good Evening'}
            icon={'notifications'}
          />
          <View style={styles.achievementContainerStyle}>
         <TextComponent text={'Test'}/>
          </View>
          <View style={styles.exerciseContainer}>
            <SubHeading
              subheading={'Exercise picked for you'}
              colors={colors.gradientColor2}
            />

            <TextComponent
              text={'View All  >'}
              fontsize={fontSizes.small}
              fontfamily={fontFamily.light}
              textColor={colors.white}
            />
          </View>

    
        </ScrollView>
      </ImageBackground>
    </>
  );
}
