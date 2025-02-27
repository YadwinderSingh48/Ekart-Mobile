import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Colors, screenHeight, screenWidth } from '@utils/Constants'
import { RFValue } from 'react-native-responsive-fontsize'
import { navigate } from '../../../Navigation/NavigationUtils'

const Categories:FC<{data:any}> = ({data}) => {

    const renderItem = ({item}:any) => {
        return (
            <Pressable onPress={() => navigate("Categories")} style={styles.itemContainer} >
                <Image source={{uri: item?.image_uri}} style={styles.contentImage}  />
                <Text style={styles.nameText} >{item?.name}</Text>
            </Pressable>
        )
    }

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <FlatList
            numColumns={Math.ceil(data?.data?.length /2)}
            data={data?.data}
            renderItem={renderItem}
            scrollEnabled={false}
            keyExtractor={item => item?.id?.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            style={styles.listContentContainer}
        />
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 15
    },
    listContentContainer: {
        marginVertical: 20,
        marginHorizontal: 15
    },
    itemContainer: {
        marginRight: 15,
        width: screenWidth * 0.2,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    contentImage: {
        width:screenWidth*0.12,
        height:screenWidth*0.12,
        resizeMode: 'cover',
        marginBottom: 5
    },
    nameText: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: RFValue(10),
        color: Colors.text
    }
})