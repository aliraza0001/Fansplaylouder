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

  }
});
