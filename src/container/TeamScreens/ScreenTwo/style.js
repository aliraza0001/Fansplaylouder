import {StyleSheet} from 'react-native';
import { colors } from '../../../theme/Color';

export const styles = StyleSheet.create({
  bgContainer: {
   
    height: '100%',
    width: '100%',   
    zIndex: 1
  },
  iconStyle:{
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 2,
  },
  textStyles:{
    color: colors.white,
    padding: 15,
    textTransform: 'uppercase'
  }
});
