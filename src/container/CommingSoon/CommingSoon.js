import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ComingSoonScreen = ({ onBackPress, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={styles.comingSoonText}>Coming Soon</Text>
        <Text style={styles.messageText}>
          We're working hard to bring you something amazing. Stay tuned!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backButton: {
    padding: 10,
    marginTop: 40,
    marginLeft: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: "black",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  comingSoonText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
  },
});

export default ComingSoonScreen;
