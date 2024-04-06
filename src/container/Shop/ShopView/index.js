import { View, Text, useWindowDimensions, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style';
import { fontFamily, fontSizes } from '../../../theme/Font';
import { colors } from '../../../theme/Color';
import ShopList from '../ShopList';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ShopHeader from '../../../components/ShopHeader';
import { cartIcon, filterIcon, searchIcon } from '../../../assets/icons';


export default function ShopView() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const renderScene = SceneMap({
    first: ShopList,
    second: ShopList,
    third: ShopList,
  });
  const [routes] = useState([
    { key: 'first', title: 'Helmets' },
    { key: 'second', title: 'Shirts' },
    { key: 'third', title: 'Caps' },
  ]);
  return (
    <>
      <View style={styles.bgContainer}>
        <View style={styles.headerWrap}>
          <ShopHeader cartIcon={cartIcon} filterIcon={filterIcon} searchIcon={searchIcon} />
        </View>
        <View style={styles.innerWrap}>

          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            style={styles.container}
            renderTabBar={props => (

              <TabBar
                {...props}
                pressColor={colors.white}
                indicatorStyle={{ backgroundColor: colors.placeholderColor, width: '33%', minHeight: 40, borderRadius: 10, marginBottom: 11 }}
                style={{
                  backgroundColor: colors.white,
                  ...Platform.select({
                    ios: {
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 0,
                      },
                      shadowOpacity: 0,
                      shadowRadius: 0,
                    },
                    android: {
                      elevation: 0,
                    },
                  }),
                }}
                tabStyle={{}}
                renderLabel={({ route, focused, color }) => (
                  <Text
                    style={{
                      color: focused ? colors.white : colors.primary,
                      padding: 10,
                      fontSize: fontSizes.default,
                      fontWeight: '700',
                      borderWidth: 0.5,
                      borderColor: colors.placeholderColor,
                      borderRadius: 10,
                      marginHorizontal: 5,
                      width: Dimensions.get("window").width / 3 - 10,
                      minHeight: 40,
                      alignItems: 'center',
                      textAlign: 'center',
                    }}>
                    {route.title}
                  </Text>
                )}
              />

            )}
          />
        </View>
      </View>
    </>
  )
}