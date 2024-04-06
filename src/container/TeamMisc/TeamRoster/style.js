import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/Color';
export const styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: colors.white,
  },

  searchBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    paddingHorizontal: 10

  },
  searchInput: {
    width: 220,
  },
  filterStyle: {
    borderRadius: 15,
    marginTop: -12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
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

  },
  list: {
    paddingVertical: 20,
    paddingHorizontal: 5,
  }

});