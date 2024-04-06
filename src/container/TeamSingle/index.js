import { View, useWindowDimensions, Text, Dimensions, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './style';
import { fontFamily, fontSizes } from '../../theme/Font';
import { colors } from '../../theme/Color';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TeamInfo from '../TeamMisc/TeamInfo';
import TeamRoster from '../TeamMisc/TeamRoster';
import TeamStats from '../TeamMisc/TeamStats';
import TeamName from '../../components/TeamName';
import TextComponent from '../../components/TextComponent';
import { Loader } from '../../utils';


export default function TeamSingle({ route, navigation }) {

  const paramData = route?.params.data
  const baseUrl = route?.params?.url
  const _id = route?.params.id

  const [data, setData] = useState({
    season: {},
    coach: [],
    team: {
      displayName: ''
    }
  })
  const [playerData, setPlayerData] = useState([])
  const [loader, setLoader] = useState(false)

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'first', title: 'Info' },
    { key: 'second', title: 'Roster' },
    // {key: 'third', title: 'Stats'},
  ]);

  useEffect(() => {
    setLoader(true)
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("X-RapidAPI-Key", "fdf701fe2bmsh8c9f7797990ad86p1ddb3ajsne2f4d01935a5");
    if (paramData == 'nba') {
      myHeaders.append("X-RapidAPI-Host", "nba-listing1.p.rapidapi.com");
    }
    if (paramData == 'mlb') {
      myHeaders.append("X-RapidAPI-Host", "mlb-sport-live-data-api.p.rapidapi.com");
    }
    if (paramData == 'nhl') {
      myHeaders.append("X-RapidAPI-Host", "nhl-sport-live-data-api.p.rapidapi.com");
    }
    if (paramData == 'fifa') {
      myHeaders.append("X-RapidAPI-Host", "fifa-football-player-team-stats-records-matches-api-data.p.rapidapi.com");
    }
    if (paramData == 'nfl') {
    }
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    if (paramData != 'fifa') {
      fetch(`https://${baseUrl}.p.rapidapi.com/${paramData}-team-info/v1/data?id=${_id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          setData(result)
          setLoader(false)
        })
        .catch(error => {
          console.log('error', error)
          setLoader(false)
        });
    }
    else {
      setData(route?.params.item)
    }
    fetch(`https://${baseUrl}.p.rapidapi.com/${paramData}-player-listing/v1/data?id=${_id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (paramData == 'fifa') {
          let arr = [...result]
          arr = arr.map((data) => {
            return (
              {
                ...data,
                dateOfBirth: data.BirthDate,
                displayHeight: data.Height,
                displayWeight: data.Weight + ' lbs',
                headshot: {
                  href: data.PlayerPicture.PictureUrl
                },
                firstName: data.PlayerName[0].Description
              }
            )
          })
          setPlayerData(arr)
        }
        else {
          if (paramData == 'nba') {
            setPlayerData(result?.athletes)
          }
          else {
            setPlayerData(result?.athletes[0]?.items)
          }
        }
        setLoader(false)
      })
      .catch(error => {
        console.log('error', error)
        setLoader(false)
      });
  }, [])

  return (
    <>
      {loader && <Loader />}
      <View style={styles.bgContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginTop: 12, paddingHorizontal: 15, justifyContent: 'center' }}
        >
          <TextComponent
            text={'back'}
            style={{
              color: colors.black,
              textTransform: 'uppercase'
            }}
          />
        </TouchableOpacity>

        <View style={styles.headerWrap}>
          <TeamName teamLogo={data?.team?.logo || `https://api.fifa.com/api/v3/picture/flags-sq-4/${data?.IdAssociation}`} teamTitle={`${data?.team?.displayName || data?.ShortClubName}`} />
        </View>

        <View style={styles.innerWrap}>

          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene = ({ route }) => {
              switch (route.key) {
                case 'first':
                  return <TeamInfo data={data} />;
                case 'second':
                  return <TeamRoster data={playerData} />;
                // case 'third':
                //   return <TeamStats />;
                default:
                  return null;
              }
            }}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            style={styles.container}
            renderTabBar={props => (
              <TabBar
                {...props}

                pressColor={colors.white}
                indicatorStyle={{ backgroundColor: colors.secondary, width: '45%', marginLeft: 10, minHeight: 60, borderRadius: 10, marginBottom: 11 }}
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
                      padding: 20,
                      fontSize: fontSizes.default,
                      fontWeight: '700',
                      borderWidth: 0.5,
                      borderColor: colors.placeholderColor,
                      borderRadius: 10,
                      marginHorizontal: 5,
                      width: Dimensions.get("window").width / 2.2 - 10,
                      minHeight: 60,
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
  );
}
