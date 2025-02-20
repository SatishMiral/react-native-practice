import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Allitems = ({data}) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.text}>Items</Text>
        <Text style={styles.text}>Quantity</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor = {(item) => item.id}
        renderItem={({item}) => (
            <View style={[styles.itemContainer, {backgroundColor : item.stock < 20 ? "#FFCCCC" : "#D7F68FFF"} ]}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemText}>{item.stock}</Text>
            </View>
        )}
       />
    </View>
  )
}

export default Allitems

const styles = StyleSheet.create({
    headingContainer : {
        flexDirection : "row",
        justifyContent : "space-between"
    },
    text : {
        fontSize : 18,
        fontWeight : "600",
        paddingHorizontal : 35,
        paddingVertical : 15
    },
    itemContainer : {
        marginHorizontal : 25,
        marginVertical : 5,
        flexDirection : "row",
        justifyContent : "space-between",
        padding : 10,
        gap : 5,
        borderRadius : 8
    },
    itemText : {
        fontSize : 16,
        fontWeight : "500",
        paddingHorizontal : 8,
        paddingVertical : 5
    }
})