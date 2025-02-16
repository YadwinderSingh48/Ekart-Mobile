import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@store/reduxHook'
import { getHomeContent } from './api/actions';

const Home = () => {

  const dispatch = useAppDispatch();
  const {loading,error,data} = useAppSelector(state => state.home)
 
  useEffect(()=> {
    dispatch(getHomeContent(1))
    console.log(data)
  },[]);
 
  return (
    <View style={{marginTop:100}}>
      <Text>{JSON.stringify(data)}</Text>
      <Text>{JSON.stringify(error)}</Text>
      <Text>{JSON.stringify(loading)}</Text>
    </View>
  )
}

export default Home