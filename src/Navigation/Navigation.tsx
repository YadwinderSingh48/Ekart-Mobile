import { View, Text } from 'react-native'
import React, { FC } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '@modules/Onboard';
import Home from '@modules/Home';
import { navigationRef } from './NavigationUtils';
import MainNavigator from './MainNavigator';
import ProductList from '@modules/Products';
import Cart from '@modules/Cart';
import PaymentSuccess from '@modules/PaymentSuccess';
import Account from '@modules/Account';

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
            <Stack.Screen name='Products' component={ProductList} />
            <Stack.Screen name='Cart' component={Cart} />
            <Stack.Screen name='PaymentSuccess' component={PaymentSuccess} />
            <Stack.Screen name='Account' component={Account} />
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigation