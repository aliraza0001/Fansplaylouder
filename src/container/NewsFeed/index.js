import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../theme/Color'
// import {
//     soccer,
//     baseball,
//     basketball,
//     football,
//     icehockey,
//     blogimage
// } from '../../assets/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Loader } from '../../utils';

// const data = [
//     {
//         description: 'Lorem Ipsum is simply dummy text of the printing and industry #Services #Office...',
//         name: 'Around The NFL + | Oct 5, 2023'
//     },
//     {
//         name: "DJ's Rookie Report Breaking down top defensive players",
//         description: 'Lorem Ipsum is simply dummy text of the printing and industry #Services #Office...',
//     },
//     {
//         name: 'Around The NFL + | Oct 5, 2023',
//         description: 'Lorem Ipsum is simply dummy text of the printing and industry #Services #Office...',
//     },
//     {
//         name: "DJ's Rookie Report Breaking down top defensive players",
//         description: 'Lorem Ipsum is simply dummy text of the printing and industry #Services #Office...',
//     }
// ]

const NewsFeed = (props) => {

    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`https://api.fansplaylouder.com/api/blog/read`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setLoader(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoader(false)
            });
    }, [])


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            {loader && <Loader />}
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
                    <Text>News Feed</Text>
                    <View />
                </View>

                <ScrollView>
                {/* {
                    data.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                activeOpacity={0.7}
                                // onPress={() => props.navigation.navigate("SingleNewsFeed")}
                                style={styles.container}>
                                <View activeOpacity={0.9} style={styles.card}>
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        style={[styles.flexRowAlignCenter, { marginVertical: 10 }]}
                                    >
                                        <Image
                                            source={require('../../assets/images/placeholder.png')}
                                            style={{ width: 110, height: 110, borderRadius: 15 }}
                                            resizeMode='contain'
                                        />
                                        <View style={{ width: '60%' }}>
                                            <Text numberOfLines={4} style={{ marginHorizontal: 20, fontSize: 16, }} >
                                                {item.name}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                } */}
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export default NewsFeed;

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