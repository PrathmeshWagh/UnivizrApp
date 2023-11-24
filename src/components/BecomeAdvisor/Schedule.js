import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextInputBox from '../UI/TextInputBox';
import { useState } from 'react';

const Schedule = () => {

  const [isSelected, setIsSelected] = useState('SUN')

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 16, color: 'black', paddingBottom: 20 }}>Create Schedule</Text>

      <Text >Select Day</Text>
      <View style={styles.daycontainer}>
        <Pressable style={[styles.dayBox, isSelected === 'SUN' && styles.backColor]} onPress={() => setIsSelected('SUN')}>
          <Text style={[isSelected === 'SUN' ? styles.textChangeColor : styles.text]}>SUN</Text>
        </Pressable>
        <Pressable style={[styles.dayBox, isSelected === 'MON' && styles.backColor]} onPress={() => setIsSelected('MON')} >
          <Text style={[isSelected === 'MON' ? styles.textChangeColor : styles.text]}>MON</Text>
        </Pressable>
        <Pressable style={[styles.dayBox, isSelected === 'TUE' && styles.backColor]} onPress={() => setIsSelected('TUE')} >
          <Text style={[isSelected === 'TUE' ? styles.textChangeColor : styles.text]}>TUE</Text>
        </Pressable>
        <Pressable style={[styles.dayBox, isSelected === 'WED' && styles.backColor]} onPress={() => setIsSelected('WED')}>
          <Text style={[isSelected === 'WED' ? styles.textChangeColor : styles.text]}>WED</Text>
        </Pressable>
        <Pressable style={[styles.dayBox, isSelected === 'THU' && styles.backColor]} onPress={() => setIsSelected('THU')}>
          <Text style={[isSelected === 'THU' ? styles.textChangeColor : styles.text]}>THU</Text>
        </Pressable>
        <Pressable style={[styles.dayBox, isSelected === 'FRI' && styles.backColor]} onPress={() => setIsSelected('FRI')}>
          <Text style={[isSelected === 'FRI' ? styles.textChangeColor : styles.text]}>FRI</Text>
        </Pressable>
        <Pressable style={[styles.dayBox, isSelected === 'SAT' && styles.backColor]} onPress={() => setIsSelected('SAT')}>
          <Text style={[isSelected === 'SAT' ? styles.textChangeColor : styles.text]}>SAT</Text>
        </Pressable>
      </View>

      <TextInputBox title='Start Time' data='09:45 AM' />
      <TextInputBox title='End Time' data='07:15 AM' />
    </View>
  )
}

export default Schedule

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  daycontainer: {
    flexDirection: 'row',
    paddingBottom: 20,
    width: '100%',
    paddingTop: 10
  },
  dayBox: {
    marginRight: 5,
    width: '13%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 0.3,

  },
  backColor: {
    backgroundColor: '#6B0554'
  },
  text: {
    color: 'black'
  },
  textChangeColor: {
    color: 'white'
  }
})