import { View, ActivityIndicator } from 'react-native'

export const Loader = () => {
    return (
      <View
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundColor: 'black',
          opacity: 0.5,
          zIndex: 999,
          elevation: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator color="#fff" size={'large'} />
      </View>
    );
  };

import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = (key, value) =>
  AsyncStorage.setItem(key, JSON.stringify(value));

export const getItem = async (key) => {
  try {
    return JSON.parse(await AsyncStorage.getItem(key));
  } catch (e) {}
};

export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {}
};
