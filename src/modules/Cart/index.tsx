import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '@components/atoms/CustomSafeAreaView';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAppSelector } from '@store/reduxHook';
import { selectCartItems } from './api/slice';
import { navigate } from '../../Navigation/NavigationUtils';
import { Colors } from '@utils/Constants';
import OrderItem from './atoms/OrderItem';
import PlaceOrderButton from './atoms/PlaceOrderButton';

const Cart = () => {
  const carts = useAppSelector(selectCartItems);
  const user:any = useAppSelector(state => state.account.user);

  const renderItem = ({item}: any) => {
      return    <OrderItem item={item} />
  }

  return (
    <CustomSafeAreaView>
      <View style={styles.container} >
          <Text style={styles.heading} >My Cart</Text>
          <Text style={styles.address} >Deliver to: {user?.phone ? user?.phone : "🗺️"} </Text>
          <Text style={styles.number} >{user?.address ? user?.address : "Login First to place your orders"}</Text>
          {/* <Text style={styles.address} >Deliver to: Login First to place your orders </Text> */}
      </View>

      {
        carts?.length > 0 ? (
          <FlatList
            data={carts}
            renderItem={renderItem}
            keyExtractor={(item) => item?._id.toString()}
            contentContainerStyle={styles.listContainer}
          />
        ) : 
        (
          <View style={styles.emptyContainer} >
              <Text style={styles.emptyText} >Your cart is empty</Text>
              <TouchableOpacity style={styles.shopNowButton} onPress={() => navigate('Categories')} >
                    <Text style={styles.shopNowText} >Shop Now</Text>
              </TouchableOpacity>
          </View>
        )
      }

      {
        carts?.length > 0 &&
        <PlaceOrderButton />
      }
      
    </CustomSafeAreaView>
  )
}

export default Cart;

const styles = StyleSheet.create({
      container: {
        padding: 16,
        borderBottomWidth: 5,
        borderColor: '#F0F2F5',
        backgroundColor: '#fff'
      },
      heading:{
        fontSize: RFValue(14),
        fontWeight: '600',
        color: '#000',
        marginBottom: 8,
      },
      number: {
        fontWeight: '500',
      },
      address: {
        color: '#666',
        marginTop: 3
      },
      emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
      emptyText: {
        fontSize: RFValue(14),
        color: '#666',
        marginBottom:16,
      },
      shopNowButton: {
        backgroundColor: Colors.active,
        padding: 10,
      },
      shopNowText: {
        fontSize: RFValue(12),
        color: '#fff',
        fontWeight: '500',
      },
      listContainer: {
        paddingTop: 8,
        paddingBottom: 100,
      },

})