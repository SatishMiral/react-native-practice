import { Pressable, StyleSheet, Text, TextInput, View, FlatList } from 'react-native'
import React, { useState } from 'react'

const Create = ({data, setdata}) => {
  const [textInput, settextInput] = useState('')
  const [stock, setstock] = useState('')
  const [isEdited, setisEdited] = useState(false)
  const [editItemId, seteditItemId] = useState(null)

  const addItemHandler = () => {
    const newItem = {
      id : Date.now(),
      name : textInput,
      stock : stock
    }
    setdata([...data, newItem])
    settextInput('')
    setstock('')
    setisEdited(false)
  }
  
  const deleteItemHandler = (id) => {
    setdata(data.filter((item) => item.id !== id))
  }

  const editItemHandler = (item) => {
    settextInput(item.name)
    setstock(item.stock.toString())
    setisEdited(true)
    seteditItemId(item.id)
  }

  const updateItemHandler = () => {
    setdata(data.map((item) => 
      item.id === editItemId ? {...item, name:textInput, stock : stock} : item
    ))
    settextInput('')
    setstock('')
    setisEdited(false)
    seteditItemId(null)
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter an Item Name'
        placeholderTextColor="#999"
        style={styles.input}
        value={textInput}
        onChangeText={(text) => settextInput(text)}
      />
      <TextInput
        placeholder='Enter Stock Amount'
        placeholderTextColor="#999"
        style={styles.input}
        value={stock}
        onChangeText={(text) => setstock(text)}
        keyboardType='numeric'
      />

      <Pressable style={styles.addButton} onPress={() => isEdited ? updateItemHandler() : addItemHandler()}>
        <Text style={styles.btnText}>{isEdited ? "EDIT ITEM" : "ADD ITEM" }</Text>
      </Pressable>

      <View style={styles.allItems}>
        <Text style={styles.headerText}>All Items</Text>
        
        <View style={styles.listHeader}>
          <Text style={[styles.itemText, styles.headerColumn, { flex: 1 }]}>Item Name</Text>
          <Text style={[styles.itemText, styles.headerColumn, { width: 60, textAlign: "center" }]}>Stock</Text>
          <Text style={[styles.itemText, styles.headerColumn, { width: 90, textAlign: "center" }]}>Actions</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <View style={[styles.itemContainer, { backgroundColor: item.stock < 20 ? "#FFCCCC" : "#D7F68FFF" }]}>
              <Text style={[styles.itemText, styles.itemName]}>{item.name}</Text>
              <Text style={[styles.itemText, styles.itemStock]}>{item.stock}</Text>
              <View style={styles.actions}>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={[styles.itemText, { color: "blue" }]}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text style={[styles.itemText, { color: "red" }]}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  input: {
    padding: 15,
    borderRadius: 5,
    borderColor: "#D7F68FFF",
    borderWidth: 1,
    marginBottom: 15
  },
  addButton: {
    backgroundColor: "#CABFEEFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    fontWeight: "500",
    color: "white"
  },
  allItems: {
    marginVertical: 30,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E0E0E0",
    paddingVertical: 8,
    paddingStart: 10,
    paddingEnd: 22,
    borderRadius: 5,
    marginBottom: 5
  },
  headerColumn: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    marginVertical: 5
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 8,
    paddingVertical: 5
  },
  itemName: {
    flex: 1,
    textAlign: "left",
  },
  itemStock: {
    width: 60,
    textAlign: "center",
  },
  actions: {
    width: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    marginEnd: 15
  }
});
