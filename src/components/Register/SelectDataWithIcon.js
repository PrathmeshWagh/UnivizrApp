import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import IconButton from '../UI/IconButton';




const SelectDataWithIcon = ({ title, onPress, value }) => {

  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <Pressable style={styles.textAndIcon} onPress={onPress}>
        <Text style={{
          fontWeight: 'bold',
          color: 'black',
          fontSize: 18
        }}>{value}
        </Text>
        <IconButton icon={'greater-than'} size={20} />
      </Pressable>


    </View>
  )
}

export default SelectDataWithIcon

const styles = StyleSheet.create({
  titleText: {
    color: '#6B0554',
    fontWeight: 'bold',
    fontSize: 15,
    paddingVertical: 20
  },
  textAndIcon: {
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomWidth: 0.2,
    borderBottomColor: '#808080',
  }
})