import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '@store/reduxHook';
import { getCategories } from './api/actions';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '@utils/Constants';

const Categories = () => {

  const dispatch = useAppDispatch();
  const {data,loading,error} = useAppSelector(state => state.categories);

  useEffect(() => {
        dispatch(getCategories());
        console.log(data);
        console.error(error)
  },[]);

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer} >
          <SafeAreaView />
          <Text style={styles.title} >
            Categories
          </Text>
          <Text style={styles.subtitle} >
            Explore our wide range of Categories
          </Text>

            {
              loading ? 
              <ActivityIndicator size={'small'} color={'black'} /> : 
              <FlatList
              data={data}
              numColumns={2}
              keyExtractor={(item) => item?._id?.toString()}
              renderItem={({item}) => (
                    <TouchableOpacity style={styles.itemContainer} >
                        <Image source={{uri: item?.image_uri}} style={styles.image} />
                        <Text style={styles.name} >{item?.name}</Text>
                    </TouchableOpacity>
              ) } 
              />
            }
        </View>
    </View>
  )
}

export default Categories


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F9Ec'
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems:'center',
    marginBottom: 10,
    borderWidth: 1,
    borderBottomColor: '#ddd'
  },
  title: {
    fontSize: RFValue(18),
    color: '#333',
    fontWeight: 'bold',
    fontFamily: FONTS.heading
  },
  subtitle: {
    fontSize: RFValue(13),
    color: '#666',
    marginTop: 5
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  name: {
    marginTop: 10,
    fontSize: RFValue(12),
    fontWeight: '500',
    color: '#333'
  }
})