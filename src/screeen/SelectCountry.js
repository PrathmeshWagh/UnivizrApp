import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
import IconButton from '../components/UI/IconButton';

const SelectCountry = ({ navigation }) => {
  const AllCountry = ['India', 'Australia', 'Japan', 'France', 'Italy', 'West Indies', 'America', 'England'];
  const [selectedCountry, setSelectedCountry] = useState(null);

  function countrySelectedHandler(country) {
    setSelectedCountry(country)
    navigation.navigate('User Registration', {
      selectedLocation: { country },

    })
  }

  return (
    <ScrollView style={styles.container}>
      {AllCountry.map((country) => (
        <TouchableOpacity key={country} onPress={() => countrySelectedHandler(country)} style={styles.countryRow}>
          <Text style={styles.text}>{country}</Text>
          <IconButton icon={'greater-than'} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default SelectCountry;

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1
  },
  countryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Center the items vertically
    borderBottomWidth: 0.5,
    borderColor: '#808080', // Add a border color
    paddingVertical: 20,
  },
  text: {
    paddingLeft: 15,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16
  },
});
