import { View, Text , StyleSheet , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../theme/Color';


export default function ShopSingleHeader({filterIcon , cartIcon , onPress}) {
  return (
    <View style={styles.container}>
      
        <TouchableOpacity style={styles.imgStyle} onPress={onPress}>
            <Image source={filterIcon} resizeMode='contain' />
        </TouchableOpacity>
        <View style={{display: 'flex' , flexDirection: 'row', justifyContent: 'space-around' , alignItems: 'center'}}>
     
        <TouchableOpacity style={styles.imgStyle}>
            <Image source={cartIcon} resizeMode='contain' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    imgStyle:{
        backgroundColor: '#F5F6FA',
        width: 45,
        height: 45,
        borderRadius: 50,
        padding: 10,
        margin: 5
    }

 });