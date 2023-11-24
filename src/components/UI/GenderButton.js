import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useState } from 'react';
import IconButton from './IconButton';

const GenderButton = () => {
  const [isMaleSelected, setIsMaleSelected] = useState(true);


  return (
    <View>
      <Text style={styles.genderTitle}>Gender</Text>
      <View style={{ flexDirection: 'row', }}>
        <View style={[styles.genderIcon, { marginRight: 15 }]}>
          <IconButton
            icon={isMaleSelected ? 'record-circle-outline' : 'circle-outline'}
            size={50}
            color={isMaleSelected ? '#6B0554' : '#808080'}
            onPress={() => setIsMaleSelected(true)}
          />
          <Text style={styles.genderText}>Male</Text>
        </View>

        <View style={styles.genderIcon}>
          <IconButton
            icon={!isMaleSelected ? 'record-circle-outline' : 'circle-outline'}
            size={50}
            color={!isMaleSelected ? '#6B0554' : '#808080'}
            onPress={() => setIsMaleSelected(false)}
          />
          <Text style={styles.genderText}>Female</Text>
        </View>
      </View>
    </View>
  )
}

export default GenderButton

const styles = StyleSheet.create({
  genderTitle: {
    paddingBottom: 10,
  },
  genderText: {
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    fontSize: 20
  },
  genderIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '47.5%',
    borderWidth: 0.4,
    paddingVertical: 5,
    paddingLeft: 5,
    borderRadius: 4

  }
})