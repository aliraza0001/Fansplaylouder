import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../../../theme/Color';
import { fontFamily, fontSizes } from '../../../theme/Font';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: 'white',
    width: '100%',
    height: 100
  },
  secondContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoStyle: {
    width: 107,
    height: 43,
  },

  wrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },
  teamImage: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").width - 200,
    borderRadius: 10,
  },
  imageShadow: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").width - 200,
    borderRadius: 10,
    backgroundColor: colors.black,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
      },
      android: {
        elevation: 12,
      },
    }),
  },

  textStyle: {
    fontFamily: fontFamily.semibold,
    fontSize: fontSizes.default,
    color: colors.white,
    marginTop: 10,
  },
});
