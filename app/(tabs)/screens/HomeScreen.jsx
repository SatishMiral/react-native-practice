import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import Allitems from "./Allitems"
import Create from "./Create"

const HomeScreen = () => {
  const [view, setview] = useState(0)
  const [data, setdata] = useState([
    {id : 1, name : "Wheat", stock : 15},
    {id : 2, name : "Rice", stock : 25},
    {id : 3, name : "Basmati Rice", stock : 10},
    {id : 4, name : "Corn", stock : 30},
    {id : 5, name : "Pulse", stock : 9}, 
])
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>DashBoard</Text>
      <View style={styles.btnContainer}>
        <Pressable style={[styles.btn, view === 0 ? { backgroundColor : "green" } : null]} onPress={() => setview(0)}>
            <Text style={[styles.btnText, view === 0 ? { color : "white" } : null]}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.btn, view === 1 ? { backgroundColor : "green" } : null]} onPress={() => setview(1)}>
            <Text style={[styles.btnText, view === 1 ? { color : "white" } : null]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.btn, view === 2 ? { backgroundColor : "green" } : null]} onPress={() => setview(2)}>
            <Text style={[styles.btnText, view === 2 ? { color : "white" } : null]}>Create</Text>
        </Pressable>
      </View>

      {view == 0 && <Allitems data={data}/>}
      {view == 1 && <Allitems data={data.filter((item) => item.stock < 20)} />}
      {view == 2 && <Create data={data} setdata={setdata}/>}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer : {
        backgroundColor : "#ffffff",
        width : "100%",
        height : "100%",
    },
    title : {
        fontSize : 24,
        fontWeight : 600,
        padding : 10,
    },
    btnContainer : {
        flexDirection : "row",
        gap : 10
    },
    btn : {
        margin : 5,
        paddingHorizontal : 12,
        paddingVertical : 7,
        borderRadius : 20,
        borderWidth : 1,
        borderColor : "green"
    },
    btnText : {
        color : "green",
        fontSize : 14
    }
})