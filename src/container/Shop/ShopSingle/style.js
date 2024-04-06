import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/Color';

export const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 40,

  },
  headerWrap: {
    marginHorizontal: 10,
  },
  innerWrap: {
    paddingHorizontal: 10,
    marginBottom: 20,
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 30,

  },
  mainImage: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: colors.white,

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
  backdropStyle: {
    width: '100%',
    height: 40,
    backfaceVisibility: 'visible',
    backgroundColor: '#00000005',
    position: 'absolute',
    bottom: -20,
  },
  miscStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  miniImages: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.placeholderColor,
  }



});
