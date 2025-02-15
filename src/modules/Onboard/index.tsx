import { View, Text, Image, StyleSheet } from 'react-native'
import React, { FC, useEffect } from 'react'
import { Colors, screenHeight, screenWidth } from '@utils/Constants'
import { resetAndNavigate } from '../../Navigation/NavigationUtils'

const Splash:FC = () => {

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            resetAndNavigate("MainNavigator")
        },1200)
    }, []);
    
  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/logo_t.png')}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: Colors.primary
    },
    image: {
        width: screenWidth * 0.35,
        height: screenHeight * 0.35,
        resizeMode: 'contain'
    }
})
export default Splash;