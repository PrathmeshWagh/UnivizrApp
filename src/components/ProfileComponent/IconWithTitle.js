import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import IconButton from '../UI/IconButton';

const IconWithTitle = ({ icon1, icon2, title, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.iconAndTtitle}>
        <IconButton icon={icon1} size={30} />
        <Text style={{ fontSize: 18, paddingLeft: 15 }}>{title}</Text>
      </View>

      <View style={styles.rightIcon}>
        <IconButton icon={icon2} size={18} color={'#808080'} />
      </View>

    </Pressable>

  )
}

export default IconWithTitle

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: '#808080'
  },
  iconAndTtitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20

  },
  rightIcon: {
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})