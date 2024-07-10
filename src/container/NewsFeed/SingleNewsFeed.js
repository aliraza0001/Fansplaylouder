import React from "react";
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

const SingleNewsFeed = (props) => {
  const { blog } = props.route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          activeOpacity={0.8}
          style={styles.headerButton}
        >
          <Icon name={"arrow-back"} size={20} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>News Feed Detail</Text>
        <View style={{ width: 20 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>{blog.title}</Text>
          <Image
            source={{ uri: `https://api.fansplaylouder.com${blog.image}` }}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.description}>{blog.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SingleNewsFeed;

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
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    zIndex: 1,
    marginTop: 50,
  },
  headerButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  card: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "300",
  },
});
