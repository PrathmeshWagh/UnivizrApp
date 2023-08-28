import { StyleSheet, TextInput, View, Pressable } from 'react-native'
import React from 'react'
import IconButton from '../UI/IconButton'

const CustomSearchBar = ({ searchText, onSearchTextChange, onClearSearch }) => {
  return (
    <View style={styles.searchBarContainer}>
      {/* <AntDesign name="search1" size={24} color="black" style={styles.icon} /> */}
      <IconButton icon={"magnify"} size={20} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchText}
        onChangeText={onSearchTextChange}
      />
      {searchText !== "" && (
        <Pressable onPress={onClearSearch}>
          {/* <AntDesign name="close" size={24} color="black" style={styles.icon} /> */}
          <IconButton icon={"close"} size={20} />
        </Pressable>
      )}
    </View>
  )
}

export default CustomSearchBar

const styles = StyleSheet.create({
  searchBarContainer: {
    width: '80%',
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
    color: 'black',


  },
})