import { View, Text } from 'react-native'
import React, { FC } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '@modules/Onboard';
import Home from '@modules/Home';
import { navigationRef } from './NavigationUtils';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const Navigation:FC = () => {
  return (
    <NavigationContainer ref={navigationRef} >
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='Splash'
        >
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='MainNavigator' component={MainNavigator} />
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigation