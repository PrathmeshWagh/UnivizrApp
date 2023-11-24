import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
import IconButton from '../components/UI/IconButton';

const SelectCity = ({ navigation }) => {
  const AllCity = ['Surat', 'Pune', 'Napur', 'Akola', 'Amravati', 'Chennai', 'Banglore', 'Mumbai', 'Hyderabad', 'Lucknow', 'Kanpur', 'Kolkata', 'Indore'];
  const [selectedCity, setSelectedCity] = useState(null);

  function citySelectedHandler(city) {
    setSelectedCity(city)
    navigation.navigate('User Registration', {
      city: city,
    })
  }

  return (
    <ScrollView style={styles.container}>
      {AllCity.map((city) => (
        <TouchableOpacity key={city} onPress={() => citySelectedHandler(city)} style={styles.cityRow}>
          <Text style={styles.text}>{city}</Text>
          <IconButton icon={'greater-than'} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default SelectCity;

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1
  },
  cityRow: {
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
