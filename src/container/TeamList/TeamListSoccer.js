import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import TextComponent from "../../components/TextComponent";
import { colors } from "../../theme/Color";
import TeamName from "../../components/TeamName";
import { Loader } from "../../utils";

export default function TeamListSoccer({ route, navigation }) {
  const [selectedId, setSelectedId] = useState();

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const paramData = route?.params.data;

  const baseUrl = route?.params?.url;

  useEffect(() => {
    setLoader(true);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append(
      "X-RapidAPI-Key",
      "fdf701fe2bmsh8c9f7797990ad86p1ddb3ajsne2f4d01935a5"
    );
    if (paramData == "fifa") {
      myHeaders.append(
        "X-RapidAPI-Host",
        "fifa-football-player-team-stats-records-matches-api-data.p.rapidapi.com"
      );
    }
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(
      `https://${baseUrl}.p.rapidapi.com/${paramData}-team-listing/v1/data`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        console.log("result", result);
        setLoader(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoader(false);
      });
  }, []);

  const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? colors.primary : colors.placeholderColor;
    // const color = item.id === selectedId ? colors.black : colors.secondary;

    console.log("item", item);
    return (
      <>
        <TeamName
          item={item}
          teamLogo={`https://api.fifa.com/api/v3/picture/flags-sq-4/${item.IdAssociation}`}
          teamTitle={item.ShortClubName}
          onPress={() =>
            navigation.navigate("TeamSingle", {
              data: paramData,
              url: baseUrl,
              id: item.IdTeam,
              item: item,
            })
          }
        />
      </>
    );
  };

  return (
    <>
      {loader && <Loader />}
      <ScrollView>
        <View style={styles.bgContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginTop: 12,
              paddingHorizontal: 15,
              justifyContent: "center",
            }}
          >
            <TextComponent
              text={"back"}
              style={{
                color: colors.black,
                textTransform: "uppercase",
              }}
            />
          </TouchableOpacity>

          <View style={styles.innerWrap}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.IdTeam}
              extraData={selectedId}
              contentContainerStyle={styles.list}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
