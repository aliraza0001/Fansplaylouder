import {StyleSheet} from 'react-native';
import {colors} from '../../theme/Color';

export const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 40,
    
  },
  headerWrap:{
    backgroundColor: colors.secondary,
    paddingVertical: 10,
  },
  innerWrap:{
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  list: {
   paddingVertical: 20,
   paddingHorizontal: 5,   
  }
 
 
});
