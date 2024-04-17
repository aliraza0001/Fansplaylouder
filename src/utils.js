import { View, ActivityIndicator, StyleSheet } from 'react-native'

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

export const PopUpToast = () => {
  const dispatch = useDispatch();
  const {toast} = useSelector(state => state.AppReducer);

  const translateAnim = useRef(new Animated.Value(150)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const duration = 300;
  useEffect(() => show(), []);

  const show = () => {
    Animated.parallel([
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
      }).start(),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start(({finished}) => {
      setTimeout(() => hide(), 2000);
    });
  };

  const hide = () => {
    Animated.parallel([
      Animated.timing(translateAnim, {
        toValue: 150,
        duration: duration,
        useNativeDriver: true,
      }).start(),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start(({finished}) => {
      dispatch({
        type: 'SHOW_TOAST',
        toast: {
          show: false,
          title: '',
        },
      });
    });
  };

  return (
    <Animated.View
      style={{
        ...styles.popupCard,
        alignItems: 'center',
        bottom: 45,
        opacity: fadeAnim,
        transform: [{translateY: translateAnim}],
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
      }}>
      <Typography size={FONTSIZE.S} color={'#fff'} textType={'light'}>
        {toast.title}
      </Typography>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  popupCard: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 99,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 15,
    borderWidth: 2,
    // borderColor: COLORS.secondary
    borderColor: "black"
  }
})