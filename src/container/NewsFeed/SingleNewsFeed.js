import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../theme/Color'

const SingleNewsFeed = (props) => {
    return (
        <View style={{ flex: 1 }}>
            {/* header */}
            <View
                style={styles.header
                }>
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    activeOpacity={0.8}
                >
                    <Icon name={'arrow-back'} size={20} color={colors.black} />
                </TouchableOpacity>
                <Text>News Feed Detail</Text>
                <View />
            </View>

            <View style={styles.container}>
                <View activeOpacity={0.9} style={styles.card}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[styles.flexRowAlignCenter, { marginVertical: 10 }]}
                    >
                        <Image
                            source={require('../../assets/images/placeholder.png')}
                            style={{ width: 70, height: 70, borderRadius: 35 }}
                            resizeMode='contain'
                        />
                        <Text style={{ marginHorizontal: 20, fontSize: 20, fontWeight: '500' }} >
                            Alex
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 20, fontSize: 16, fontWeight: '300' }} >
                        {'Lorem Ipsum is simply dummy text of the printing and industry #Services #Office...'}
                    </Text>

                </View>
            </View>

        </View>
    )
}

export default SingleNewsFeed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    flexRowAlignCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    header: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        zIndex: 1,
    },
    card: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.20,
        shadowRadius: 4,
        elevation: 4
    },
})