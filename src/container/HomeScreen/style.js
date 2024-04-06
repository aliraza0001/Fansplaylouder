import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  ImageBgContainer: {
    flex: 1,
    padding: 10,
  },
  achievementStyle: {
    width: '48%',
  },
  achievementContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  titleStyle:{
    width: '80%'
  },
  exerciseContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20
  },
  list: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
