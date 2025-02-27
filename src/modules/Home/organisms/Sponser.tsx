import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { navigate } from '../../../Navigation/NavigationUtils'
import { screenWidth } from '@utils/Constants'

const Sponser:FC<{data:any}> = ({data}) => {
  return (
    <Pressable style={styles.container} onPress={() => navigate('Categories')} >
        <Image style={styles.img} source={{uri: data?.data![0].image_uri}} />
    </Pressable>
  )
}

export default Sponser

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        height: 80,
        width: screenWidth - 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 15
    }
})