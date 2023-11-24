import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import IconButton from '../UI/IconButton';
import CountryPicker from 'react-native-country-picker-modal';


const CountrySelectorBox = ({ title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [country, setCountry] = useState('United kingdom')

  function iconHandler() {
    setIsVisible(!isVisible)
  }

  function handleCountrySelect(selectedCountry) {
    setCountry(selectedCountry.name);
    setIsVisible(false)
  }

  return (
    <View style={{ marginBottom: 25 }}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.countryAndIcon}>
        {isVisible &&
          <CountryPicker
            visible={isVisible}
            country={country}
            onSelect={handleCountrySelect}
          />}
        <Text style={{
          fontWeight: 'bold',
          fontSize: 18,
          color: 'black',
        }}>{country}</Text>
        <IconButton icon={'greater-than'} size={15} onPress={iconHandler} />
      </View>

    </View>
  )
}

export default CountrySelectorBox

const styles = StyleSheet.create({
  titleText: {
    fontSize: 15,
    paddingBottom: 10
  },
  countryAndIcon: {
    paddingLeft: 15,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: '#808080',
    paddingRight: 10,
    paddingVertical: 18
  }
})