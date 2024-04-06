import {StyleSheet} from 'react-native';
import {colors} from '../../theme/Color';

export const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  innerContainer: {
    display: 'flex',
    paddingVertical: 130,
    alignItems: 'center'
  },
  override: {
    justifyContent: 'space-around',
    alignItems: 'center',
    verticalAlign: 'middle',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 40,
  },
});
