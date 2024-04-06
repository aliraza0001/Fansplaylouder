import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Screens from '../container';
import {colors} from '../theme/Color';

import { StyleSheet , View} from  'react-native'

const bgImg = require('../../../assets/images/logoGradient.png');

const Tab = createBottomTabNavigator();

// const tabarComponent = (activeImage, unActiveImage , activeColor , unActiveColor) => {
//   return {
//     tabBarIcon: ({focused}) => (
//       <View >        
//       <Image  source={focused ? activeImage : unActiveImage} width="25px" height="25px" color={focused ? activeColor : unActiveColor}/>
//       </View>
//     ),
   
//   };
// };

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.lightGrey,
        headerShown: false,
        tabBarActiveBackgroundColor: '#ffffff0d',
        tabBarInactiveBackgroundColor: colors.black,
        tabBarHideOnKeyboard: true,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarAllowFontScaling: true,
        headerTransparent: true,
        headerTitle: null,
        tabBarShowLabel: true,

        tabBarItemStyle: {
          width: 'auto',
          alignContent: 'center',
          alignSelf: 'center',
          margin: 5,
          padding: 5,
          borderRadius: 10,
          // backgroundColor: colors.white          
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          overflow: 'hidden',
          borderRadius: 20,      
          marginHorizontal: 10,
          left: 0,
          right: 0,
          alignContent: 'center',
          backgroundColor: colors.black,          
          height: 60,
          borderWidth:0,
          borderColor:  colors.black
        },
      })}>

      <Tab.Screen   name="HomeScreen" component={Screens.HomeScreen} />
      <Tab.Screen   name="WelcomeScreenOne" component={Screens.WelcomeScreenOne} />

    </Tab.Navigator>
  );
}

