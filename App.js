import React, { useEffect, useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
// import messaging from "@react-native-firebase/messaging";

import StackNavigatior from "./src/navigation/navigation";
const logoScreen = require("./src/assets/images/splashimage.png");

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const Hide_Splash_Screen = () => {
    setIsVisible(false);
  };
  const time = () => {
    return 5000;
  };

  useEffect(() => {
    setTimeout(function () {
      Hide_Splash_Screen();
    }, time());
  }, []);

  requestUserPermission = async () => {
    // const authStatus = await messaging().requestPermission();
    // const enabled =
    //   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    //   authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    //   console.log("auth status",authStatus)
    //   console.log("enabled",enabled)
    // if (enabled) {
    //   getFcmToken();
    //   console.log("Authorization status:", authStatus);
    // }
  };

  getFcmToken = async () => {
    // const fcmToken = await messaging().getToken();
    // console.log("FCM Token ==>", fcmToken);
    // if (fcmToken) {
    //   dispatch(updateStates({ fcmToken }));
    //   console.log("Your Firebase Token is:", fcmToken);
    // } else {
    //   console.log("Failed", "No token received");
    // }
  };

  let Splash_Screen = (
    <ImageBackground
      source={logoScreen}
      resizeMode="cover"
      style={styles.SplashScreen_RootView}
    ></ImageBackground>
  );

  return <>{isVisible === true ? Splash_Screen : <StackNavigatior />}</>;
};

const styles = StyleSheet.create({
  SplashScreen_RootView: {
    justifyContent: "center",
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
});

export default App;
