import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/Color';
export const styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: colors.white,
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,

  }

});