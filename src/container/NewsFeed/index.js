import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../theme/Color";
import { SafeAreaView } from "react-native-safe-area-context";
import { Loader } from "../../utils";

const NewsFeed = (props) => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoader(true);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`https://api.fansplaylouder.com/api/blog/read`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        setLoader(false);
        setData(result?.blogs);
      })
      .catch((error) => {
        console.log("error", error);
        setLoader(false);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {loader && <Loader />}
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            activeOpacity={0.8}
          >
            <Icon name={"arrow-back"} size={20} color={colors.black} />
          </TouchableOpacity>
          <Text>News Feed</Text>
          <View />
        </View>

        <ScrollView>
          {data?.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.7}
                style={styles.container}
                // onPress={() => props.navigation.navigate("SingleNewsFeed", { id: item.id })}
              >
                <View style={styles.card}>
                  <View
                    style={[styles.flexRowAlignCenter, { marginVertical: 10 }]}
                  >
                    <Image
                      source={{
                        uri: `https://api.fansplaylouder.com${item.image}`,
                      }}
                      style={{ width: 110, height: 110, borderRadius: 15 }}
                      resizeMode="cover"
                    />
                    <View style={{ width: "60%" }}>
                      <Text
                        numberOfLines={4}
                        style={{ marginHorizontal: 20, fontSize: 16 }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        numberOfLines={2}
                        style={{
                          marginHorizontal: 20,
                          fontSize: 14,
                          color: colors.gray,
                        }}
                      >
                        {item.description}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NewsFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  flexRowAlignCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    zIndex: 1,
  },
  card: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});
