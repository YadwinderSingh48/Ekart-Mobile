import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React, { FC, useState } from 'react'
import { screenWidth } from '@utils/Constants';
import Carousel from 'react-native-reanimated-carousel';
import FilmSlip from '../molecules/FilmSlip';
import Dots from '../atoms/Dots';

const AddCarousal:FC <{data:any}> = ({data}) => {
    const [active,setActive] = useState(0);

    const baseOptions = {
        vertical: false,
        width: screenWidth,
        height: screenWidth * 0.8
    }
  return (
    <View> 
      <FilmSlip />
      <Carousel
      {...baseOptions}
      loop
      pagingEnabled
      snapEnabled
      autoPlay
      autoPlayInterval={3500}
      onSnapToItem={(index:any) => setActive(index)}
      data={data?.data}
      renderItem={({item}: any)=> (
        <Pressable style={styles.imageContainer} >
                <Image
                    source={item?.image_uri}
                    style={styles.img}
                />
        </Pressable>
      )}
    />

        {
            active !=null && 
            <View style={styles.dots}>
                {
                    data?.data?.map((item:any,index:any) => {
                        return (
                                <Dots key={index} index={index} active={active} />
                        )
                    })
                }
            </View>
        }
    </View>
  )
}

const styles = StyleSheet.create({
    dots: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: '100%',
    },
    imageContainer: {
        width: '100%',
        height: '100%'
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
})

export default AddCarousal