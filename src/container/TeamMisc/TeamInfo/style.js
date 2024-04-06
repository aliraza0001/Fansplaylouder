import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/Color';
export const styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 10
  },
  innerWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 0,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(4, 25, 46, 0.1)',
    marginHorizontal: 5,
  },
  mainWrap: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'rgba(4, 25, 46, 0.1)',
    backgroundColor: colors.white,
    marginTop: 20,
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

  }

});