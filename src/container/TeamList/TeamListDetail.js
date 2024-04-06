import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TeamListDetail = (props) => {
    <View style={styles.container}>
        <TextComponent text={'The National Football League'} fontsize={fontSizes.default} textColor={colors.white} textalign='center' />
    </View>
}

export default TeamListDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})